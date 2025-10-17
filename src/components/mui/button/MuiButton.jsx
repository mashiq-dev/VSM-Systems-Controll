import { memo } from 'react';
import BasicBtn from './components/BasicBtn';
import BasicCancelBtn from './components/BasicCancelBtn';
import SubmitBtn from './components/SubmitBtn';

const MuiButton = (props) => {
  const { type, onClick, disabled, children, className, variant, size, isNoDirty, disableIsSubmit, sx, component, startIcon, isSubmitting, typeSubmit } = props;

  switch (type) {
    case 'submit':
      return (
        <SubmitBtn
          disabled={disabled}
          isNoDirty={isNoDirty}
          className={className}
          variant={variant}
          size={size}
          disableIsSubmit={disableIsSubmit}
          sx={sx}
          component={component}
          typeSubmit={typeSubmit}
        >
          {children}
        </SubmitBtn>
      );
    case 'basic':
      return (
        <BasicBtn onClick={onClick} disabled={disabled} className={className} variant={variant} size={size} sx={sx} component={component} startIcon={startIcon} isSubmitting={isSubmitting}>
          {children}
        </BasicBtn>
      );
    case 'cancel-btn':
      return (
        <BasicCancelBtn onClick={onClick} disabled={disabled} className={className} variant={variant} size={size} sx={sx} component={component}>
          {children}
        </BasicCancelBtn>
      );
    default:
      return null;
  }
};

export default memo(MuiButton);
