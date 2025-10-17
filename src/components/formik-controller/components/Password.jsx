
import { TextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

const Password = (props) => {
  const { name, errors, touched, fullWidth = true, ...rest } = props;

  const handlePreventCopyPaste = (e) => e.preventDefault();

  return (
    <Field
      as={TextField}
      name={name}
      fullWidth={fullWidth}
      autoComplete="off"
      variant="outlined"
      helperText={<ErrorMessage name={name} />}
      error={Boolean(errors[name] && touched[name])}
      onCut={handlePreventCopyPaste}
      onCopy={handlePreventCopyPaste}
      onPaste={handlePreventCopyPaste}
      {...rest}
    />
  );
};

export default Password;
