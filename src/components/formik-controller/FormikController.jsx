import { useFormikContext } from "formik";
import Input from "./components/Input";
import MuiAutoComplete from "./components/AutoComplete";
import Password from "./components/Password";
import NumericField from "./components/NumericField";

const FormikController = (props) => {
  const { control, ...rest } = props;
  const { errors, touched } = useFormikContext();

  switch (control) {
    case "textField":
      return <Input {...rest} errors={errors} touched={touched} />;
    case "autoComplete":
      return <MuiAutoComplete {...rest} errors={errors} touched={touched} />;
    case "password":
      return <Password {...rest} errors={errors} touched={touched} />;
    case "numericField":
      return <NumericField {...rest} errors={errors} touched={touched} />;
    default:
      return null;
  }
};

export default FormikController;
