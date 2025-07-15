import { IconProps } from 'phosphor-react';
import { ElementType, InputHTMLAttributes } from 'react';
import { HiddenInputRadio, InputRadioLabel } from './styles';
import { useTheme } from 'styled-components';

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  iconSize?: number;
  iconPosition?: 'left' | 'right';
  Icon?: ElementType<IconProps>;
}

export function InputRadio({
  children,
  Icon,
  iconPosition = 'left',
  iconSize = 16,
  ...rest
}: InputRadioProps) {
  const theme = useTheme();

  const hasLeftIcon = Icon && iconPosition === 'left';
  const hasRightIcon = Icon && iconPosition === 'right';

  return (
    <InputRadioLabel>
      <HiddenInputRadio type="radio" {...rest} />

      {hasLeftIcon && <Icon size={iconSize} color={theme.colors.purple} />}
      <span>{children}</span>
      {hasRightIcon && <Icon size={iconSize} color={theme.colors.purple} />}
    </InputRadioLabel>
  );
}
