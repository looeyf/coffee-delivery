import styled, { css } from 'styled-components';

export const HiddenInputRadio = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;
`;

export const InputRadioLabel = styled.label`
  border-radius: 6px;
  border: 1px solid transparent;
  padding: 0.9375rem; // 16px - 1px border

  background-color: ${({ theme }) => theme.colors['base-button']};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.sizes.button.m};
  color: ${({ theme }) => theme.colors['base-text']};

  display: flex;
  gap: 0.75rem;
  align-items: center;

  transition-property: color, background-color, border-color;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  &:has(input[type='radio']:checked) {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    border-color: ${({ theme }) => theme.colors.purple};
  }
`;

export const InputRadioGroup = styled.div<{
  direction?: 'column' | 'row';
  hasError?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 0.75rem;

  ${({ theme, hasError }) =>
    hasError &&
    css`
      > label {
        border-color: ${theme.colors.red};
      }
    `}

  > label {
    flex: 1;
  }
`;

InputRadioGroup.defaultProps = {
  direction: 'row',
};
