import { ButtonHTMLAttributes } from 'react';
import { ButtonSize, StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

export function Button({
  children,
  type = 'button',
  size = 'small',
  ...rest
}: ButtonProps) {
  return (
    <StyledButton type={type} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}
