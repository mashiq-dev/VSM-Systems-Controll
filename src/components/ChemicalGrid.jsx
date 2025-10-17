import { FieldArray, Form, Formik } from "formik";
import MuiButton from "./mui/button/MuiButton";
import CustomGrid from "./shared-ui/CustomGrid";
import { selectMenuItem } from "../helper-function/pageUtils";
import { chemicalProductData } from "../helper-function/productData";

export default function ChemicalGrid() {
  const initialValues = {
    chemical: [
      {
        item: "",
        qty: "",
        each: "",
        unit: "",
        rate: "",
      },
      {
        item: "",
        qty: "",
        each: "",
        unit: "",
        rate: "",
      },
    ],
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  const DEFAULT_COLUMNS = [
    { label: "Qty", field: "qty", type: "textField", disabled: true },
    { label: "Each", field: "each", type: "textField", disabled: true },
    { label: "Unit", field: "unit", type: "textField" },
    { label: "Rate", field: "rate", type: "textField", disabled: true },
  ];
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue, values }) => (
          <Form>
            <FieldArray name="chemical">
              {({ form, push, remove }) => {
                const columns = [
                  {
                    label: "Item / Code",
                    field: "item",
                    type: "autoComplete",
                    minWidth: 300,
                    onChange: (value) => {
                      const val = value?.target;
                      if (!val) return;

                      const nameMatch = val.name.match(/\[(\d+)\]/);
                      const rowIndex = nameMatch ? Number(nameMatch[1]) : 0;

                      setFieldValue(`chemical.${rowIndex}.qty`, "");
                      setFieldValue(`chemical.${rowIndex}.each`, "");
                      setFieldValue(`chemical.${rowIndex}.unit`, "");
                      setFieldValue(`chemical.${rowIndex}.rate`, "");

                      const chemicalFilter = chemicalProductData?.filter(
                        (item) => item.code === val.value
                      );
                      const qtyVal = chemicalFilter[0];
                      if (qtyVal) {
                        setFieldValue(
                          `chemical.${rowIndex}.qty`,
                          qtyVal.quantity
                        );
                        setFieldValue(
                          `chemical.${rowIndex}.each`,
                          qtyVal.amount
                        );
                      }
                    },
                    optionsList: selectMenuItem({
                      items: chemicalProductData,
                      labelKey: "name",
                      valueKey: "code",
                      mode: "combo",
                    }),
                  },

                  {
                    label: "Qty",
                    field: "qty",
                    type: "textField",
                    disabled: true,
                  },
                  {
                    label: "Each",
                    field: "each",
                    type: "textField",
                    disabled: true,
                  },
                  {
                    label: "Unit",
                    field: "unit",
                    type: "textField",

                    onChange: (e) => {
                      const val = e.target;
                      const nameMatch = val.name.match(/\[(\d+)\]/);
                      console.log(nameMatch);
                      const rowIndex = nameMatch ? Number(nameMatch[1]) : 0;
                      const unitValue = Number(val.value) || 0;
                      const eachValue =
                        Number(values.chemical[rowIndex].each) || 0;
                      const rateValue = unitValue * eachValue;
                      setFieldValue(`chemical.${rowIndex}.unit`, val.value);
                      setFieldValue(
                        `chemical.${rowIndex}.rate`,
                        rateValue.toFixed(2)
                      );
                    },
                  },

                  {
                    label: "Rate",
                    field: "rate",
                    type: "textField",
                    disabled: true,
                  },
                ];
                return (
                  <div>
                    <div mb={2} className="flex justify-between items-center ">
                      <MuiButton
                        type="basic-btn"
                        onClick={() =>
                          push({
                            item: "",

                            qty: "",
                            each: "",
                            rate: "",
                          })
                        }
                      >
                        Add
                      </MuiButton>
                    </div>
                    <div className="m-10">
                      <CustomGrid
                        columns={columns}
                        form={form}
                        remove={remove}
                      />
                    </div>
                  </div>
                );
              }}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </div>
  );
}
