import { Button } from '@mui/material';
import clsx from 'clsx';

const BasicCancelBtn = ({ children, disabled, className, onClick, variant = 'outlined', size = 'small', sx, component }) => {
  return (
    <Button variant={variant} size={size} disabled={disabled} className={clsx(className)} onClick={onClick} sx={sx} component={component}>
      {children}
    </Button>
  );
};

export default BasicCancelBtn;
