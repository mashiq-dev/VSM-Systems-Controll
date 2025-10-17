import { TextField } from "@mui/material";
import { Field, ErrorMessage, useFormikContext } from "formik";

const Input = (props) => {
  const { name, errors, touched, fullWidth = true, onChange, ...rest } = props;
  const { setFieldValue } = useFormikContext();

  const handleBlur = (e) => {
    const { value } = e?.target || {};
    if (typeof value !== "string") return;
    const trimmedValue = value.trim();
    if (trimmedValue !== value) {
      setFieldValue(name, trimmedValue);
    }
  };
  const handleInputChange = (e) => {
    const { value } = e?.target || {};
    if (onChange) {
      onChange(e)
    }
    setFieldValue(name, value);
  };

  return (
    <Field
      as={TextField}
      name={name}
      fullWidth={fullWidth}
      onChange={handleInputChange}
      autoComplete="off"
      onBlur={handleBlur}
      variant="standard"
      helperText={<ErrorMessage name={name} />}
      error={Boolean(errors[name] && touched[name])}
      {...rest}
    />
  );
};

export default Input;
