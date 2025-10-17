import { Button } from '@mui/material';
import clsx from 'clsx';

const BasicBtn = ({ children, disabled, className, onClick, variant = 'contained', size = 'small', sx, component, startIcon, isSubmitting }) => {
  const isDisabled = isSubmitting ? true : disabled;
  return (
    <Button
      variant={variant}
      size={size}
      disabled={isDisabled}
      className={clsx('bg-btn-primary disabled:bg-gray-200 text-white hover:text-btn-primary', className)}
      onClick={onClick}
      sx={sx}
      component={component}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
};

export default BasicBtn;
