import { Autocomplete, TextField } from "@mui/material";
import { ErrorMessage, useFormikContext, Field } from "formik";
const MuiAutoComplete = (props) => {
  const {
    name,
    errors,
    touched,
    optionsList,
    label,
    required,
    onChange,
    disabled,
    ...rest
  } = props;

  const { handleBlur, setFieldValue, initialValues } = useFormikContext();
  return (
    <Field name={name}>
      {({ field }) => (
        <Autocomplete
          name={field.name}
          value={
            optionsList.find((option) => option.value === field.value) || null
          }
          fullWidth
          options={optionsList}
          disabled={disabled}
          getOptionLabel={(option) => option.label}
          // getOptionLabel={(option) => option?.label?.toString?.() || ''}
          onChange={(event, value) => {
            const selectedValue = value?.value ?? initialValues[name];

            setFieldValue(name, selectedValue);
            console.log(value);
            if (onChange) {
              const syntheticEvent = {
                target: {
                  name,
                  value: selectedValue,
                },
              };
              onChange(syntheticEvent);
            }
          }}
          renderOption={(props, option) => (
            <li {...props} key={option?.value} style={{ fontSize: '13px' }}>
              {option?.label}
            </li>
          )}
          onBlur={handleBlur}
          clearOnBlur
          renderInput={(params) => (
            <TextField
              label={label}
              variant="standard"
              InputProps={params.InputProps}
              InputLabelProps={params.InputLabelProps}
              inputProps={params.inputProps}
              fullWidth
              autoComplete="off"
              required={required}
              disabled={disabled}
              slotProps={{
                inputLabel: {
                  style: { fontSize: "13px" },
                  ...params.InputLabelProps,
                },

                input: {
                  ...params.InputProps,
                },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "13px",
                },
              }}
              onBlur={params.onBlur}
              helperText={<ErrorMessage name={name} />}
              error={Boolean(errors[name] && touched[name])}
              {...rest}
            />
          )}
        />
      )}
    </Field>
  );
};

export default MuiAutoComplete;
