import { ChangeEvent, InputHTMLAttributes } from 'react';
import { StyledInputText } from './styles';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  onChange?: (newValue: string) => void;
}

export function InputText({ value, onChange, ...rest }: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return <StyledInputText value={value} onChange={handleChange} {...rest} />;
}
