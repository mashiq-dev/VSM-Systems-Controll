
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { TextField } from '@mui/material';

//  Number component to accept 0-9

const NumericField = (props) => {
  const { name, errors, touched, ...rest } = props;
  const { setFieldValue } = useFormikContext();

  const handleInputChange = (e) => {
    // Regex to allow numbers only
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      console.log(e.target.value);
      console.log(Number(e.target.value));
      setFieldValue(name, Number(e.target.value));
    }
  };

  return (
    <Field
      as={TextField}
      name={name}
      fullWidth
      autoComplete="off"
      variant="outlined"
      onChange={handleInputChange}
      inputProps={{ maxLength: 15 }}
      helperText={<ErrorMessage name={name} />}
      error={Boolean(errors[name] && touched[name])}
      {...rest}
    />
  );
};

export default NumericField;
