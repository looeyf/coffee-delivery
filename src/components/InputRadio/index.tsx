import { IconProps } from 'phosphor-react';
import { ChangeEvent, ElementType, InputHTMLAttributes } from 'react';
import { HiddenInputRadio, InputRadioLabel } from './styles';
import { useTheme } from 'styled-components';

interface InputRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  iconSize?: number;
  iconPosition?: 'left' | 'right';
  Icon?: ElementType<IconProps>;
  onChange?: (newValue: string) => void;
}

export function InputRadio({
  children,
  Icon,
  iconPosition = 'left',
  iconSize = 16,
  value,
  onChange,
  ...rest
}: InputRadioProps) {
  const theme = useTheme();

  const hasLeftIcon = Icon && iconPosition === 'left';
  const hasRightIcon = Icon && iconPosition === 'right';

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <InputRadioLabel>
      <HiddenInputRadio
        type="radio"
        value={value}
        onChange={handleChange}
        {...rest}
      />

      {hasLeftIcon && <Icon size={iconSize} color={theme.colors.purple} />}
      <span>{children}</span>
      {hasRightIcon && <Icon size={iconSize} color={theme.colors.purple} />}
    </InputRadioLabel>
  );
}
