import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { InputTextContainer, StyledInputText } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  hasError?: boolean;
}

export function InputText({
  onChange,
  className,
  hasError,
  ...rest
}: InputProps) {
  const [hasValue, setHasValue] = useState(false);
  const shouldRenderOptionalLabel = !rest.required && !hasValue;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setHasValue(!!newValue);
    onChange?.(event);
  };

  return (
    <InputTextContainer isOptional={shouldRenderOptionalLabel}>
      <StyledInputText
        onChange={handleChange}
        className={`${className} ${hasError ? 'has-error' : ''}`}
        {...rest}
      />
    </InputTextContainer>
  );
}
