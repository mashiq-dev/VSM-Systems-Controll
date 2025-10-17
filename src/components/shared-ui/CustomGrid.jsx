import React, { memo, useState, useEffect } from "react";
import { Box, IconButton, useTheme, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FormikController from "../formik-controller/FormikController";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";

const DEFAULT_COLUMN_WIDTH = 160;
const DEFAULT_ROW_HEIGHT = 50;

const GridRow = memo(({ rowIndex, columns, columnWidth, remove }) => (
  <Box
    sx={{
      display: "flex",
      borderBottom: "1px solid #e5e7eb",
      backgroundColor: rowIndex % 2 === 0 ? "#fff" : "#f9fafb",
      "&:hover": { backgroundColor: "#f1f5f9" },
      alignItems: "center",
      minHeight: DEFAULT_ROW_HEIGHT,
    }}
  >
    {columns.map((col) => (
      <Box
        key={col.field}
        sx={{
          flex: `0 0 ${columnWidth}px`,
          minWidth: col.minWidth || columnWidth,
          px: 2,
          display: "flex",
          alignItems: "center",
          borderRight: "1px solid #e5e7eb",
          textAlign: col.type === "action" ? "center" : "left",
        }}
      >
        {col.type === "action" ? (
          <IconButton
            color="error"
            onClick={() => remove(rowIndex)}
            size="small"
            aria-label="remove row"
            sx={{ padding: 0.5 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        ) : (
          <FormikController
            control={col.type}
            name={`chemical[${rowIndex}].${col.field}`}
            optionsList={col.optionsList}
            disabled={col.disabled}
            onChange={col.onChange}
          />
        )}
      </Box>
    ))}
  </Box>
));

const CustomGrid = ({
  columns,
  form,
  remove,
  columnWidth = DEFAULT_COLUMN_WIDTH,
  pageSize = 10,
}) => {
  console.log(columns);
  const theme = useTheme();
  const rows = form?.values?.chemical || [];
  const rowCount = rows.length;
  const iconSize = 15;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(rowCount / pageSize));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [rowCount, totalPages, page]);

  const startIndex = (page - 1) * pageSize;
  const currentRows = rows.slice(startIndex, startIndex + pageSize);

  return (
    <Box
      sx={{
        border: "1px solid #d1d5db",
        borderRadius: 0,
        width: "100%",
        maxHeight: 500,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <Box sx={{ flex: 1, overflowX: "auto", overflowY: "auto" }}>
        <Box
          sx={{
            minWidth: columns.length * columnWidth,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "sticky",
              top: 0,
              zIndex: 10,
              backgroundColor: "#f9fafb",
              borderBottom: "2px solid #cbd5e1",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            {columns?.map((col) => (
              <Box
                key={col.field}
                sx={{
                  flex: `0 0 ${columnWidth}px`,
                  minWidth: col.minWidth || columnWidth,
                  px: 1,
                  py: 1,
                  fontWeight: 600,
                  fontSize: 12,
                  color: "#374151",
                  borderRight: "1px solid #e5e7eb",
                  textAlign: col.type === "action" ? "center" : "left",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {col.label}
              </Box>
            ))}
          </Box>

          {currentRows.length > 0 ? (
            currentRows.map((row, rowIndex) => (
              <GridRow
                key={startIndex + rowIndex}
                row={row}
                rowIndex={startIndex + rowIndex}
                columns={columns}
                columnWidth={columnWidth}
                remove={remove}
              />
            ))
          ) : (
            <Box
              sx={{
                textAlign: "center",
                py: 2,
                color: "#9ca3af",
                fontStyle: "italic",
                fontSize: 14,
              }}
            >
              No data
            </Box>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1,
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.default,
          fontSize: 13,
          color: theme.palette.text.secondary,
        }}
      >
        <span>
          Showing {rowCount ? startIndex + 1 : 0}–
          {Math.min(startIndex + pageSize, rowCount)} of {rowCount}
        </span>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="small"
            disabled={page === 1}
            onClick={() => setPage(() => 1)}
          >
            <FirstPageIcon sx={{ fontSize: `${iconSize}px` }}></FirstPageIcon>
          </IconButton>
          <IconButton
            size="small"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            <ChevronLeftIcon
              sx={{ fontSize: `${iconSize}px` }}
            ></ChevronLeftIcon>
          </IconButton>
          <span>
            Page {page} of {totalPages}
          </span>
          <IconButton
            size="small"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            <NavigateNextIcon
              sx={{ fontSize: `${iconSize}px` }}
            ></NavigateNextIcon>
          </IconButton>
          <IconButton
            size="small"
            disabled={page === totalPages}
            onClick={() => setPage(() => totalPages)}
          >
            <LastPageIcon sx={{ fontSize: `${iconSize}px` }}></LastPageIcon>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomGrid;
