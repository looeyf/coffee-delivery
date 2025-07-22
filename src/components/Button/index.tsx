import { ButtonHTMLAttributes } from 'react';
import { ButtonSize, ButtonVariant, StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export function Button({
  children,
  type = 'button',
  size = 'small',
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      size={size}
      variant={variant}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
