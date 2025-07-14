import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { InputTextContainer, StyledInputText } from './styles';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  onChange?: (newValue: string) => void;
}

export function InputText({ value, onChange, ...rest }: InputProps) {
  const [hasValue, setHasValue] = useState(false);
  const shouldRenderOptionalLabel = !rest.required && !hasValue;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setHasValue(!!newValue);
    onChange?.(newValue);
  };

  return (
    <InputTextContainer isOptional={shouldRenderOptionalLabel}>
      <StyledInputText value={value} onChange={handleChange} {...rest} />
    </InputTextContainer>
  );
}
