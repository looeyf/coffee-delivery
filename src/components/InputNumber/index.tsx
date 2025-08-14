import { Minus, Plus } from 'phosphor-react';
import {
  ICON_SIZE,
  IconButton,
  InputNumberContainer,
  StyledInputNumber,
} from './styles';
import { isNumber } from '../../helpers/isNumber';
import { InputHTMLAttributes } from 'react';

interface InputNumberProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: number;
  onChange?: (newValue: number) => void;
}

export function InputNumber({ value, onChange }: InputNumberProps) {
  const handleChange = (newValue: number) => {
    onChange?.(newValue);
  };

  const handleDecreaseQuantity = () => {
    handleChange(value ? value - 1 : 1);
  };

  const handleIncreaseQuantity = () => {
    handleChange(value ? value + 1 : 1);
  };

  const isMinimumQuantity = value === 1;
  return (
    <InputNumberContainer>
      <IconButton
        type="button"
        position="left"
        onClick={handleDecreaseQuantity}
        disabled={isMinimumQuantity}
      >
        <Minus size={ICON_SIZE} />
      </IconButton>
      <StyledInputNumber
        min={1}
        value={value}
        onChange={(event) => {
          const newValue = event.target.value;
          if (isNumber(newValue)) handleChange(parseInt(newValue));
        }}
      />
      <IconButton
        type="button"
        position="right"
        onClick={handleIncreaseQuantity}
      >
        <Plus size={ICON_SIZE} />
      </IconButton>
    </InputNumberContainer>
  );
}
