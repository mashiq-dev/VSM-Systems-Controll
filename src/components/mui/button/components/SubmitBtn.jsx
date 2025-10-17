import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const SubmitBtn = ({
  children,
  isNoDirty,
  disabled,
  disableIsSubmit,
  size = "small",
  variant = "contained",
  className = "bg-btn-primary disabled:bg-gray-100 text-white hover:text-btn-primary",
  sx,
  component,
  typeSubmit,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { dirty, isSubmitting, values } = useFormikContext();

  useEffect(() => {
    if (typeSubmit) {
      if (isSubmitting) {
        setIsDisabled(true);
      }
    } else if (!disableIsSubmit) {
      if (disabled) {
        setIsDisabled(true);
      } else if (isSubmitting) {
        setIsDisabled(true);
      } else if (!dirty && !isSubmitting && !isNoDirty) {
        setIsDisabled(true);
      } else if (isNoDirty) setIsDisabled(false);
    }
    return () => {
      if (isSubmitting && !dirty) {
        setIsDisabled(false);
      } else if (!dirty) {
        setIsDisabled(false);
      } else if (isSubmitting) {
        setIsDisabled(false);
      } else if (typeSubmit) setIsDisabled(false);
    };
  }, [
    isSubmitting,
    dirty,
    isNoDirty,
    disabled,
    disableIsSubmit,
    typeSubmit,
    values,
  ]);

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      type="submit"
      disabled={isDisabled}
      sx={sx}
      component={component}
    >
      {children}
    </Button>
  );
};

export default SubmitBtn;
