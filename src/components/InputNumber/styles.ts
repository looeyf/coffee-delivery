import styled, { css } from 'styled-components';

export const InputNumberContainer = styled.div`
  position: relative;
`;

export const ICON_SIZE = 14;
export const IconButton = styled.button<{ position: 'left' | 'right' }>`
  line-height: 0;

  border: unset;
  background: none;
  position: absolute;
  ${({ position }) => css`
    ${position}: 0.5rem
  `};
  top: 50%;
  transform: translateY(-50%);

  transition: 0.2s color ease-in-out;
  svg {
    color: ${({ theme }) => theme.colors.purple};
    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const StyledInputNumber = styled.input.attrs({ type: 'number' })`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-title']};
  text-align: center;
  line-height: 1.3;

  padding: 0.53125rem calc(0.5rem + ${ICON_SIZE}px);
  border-radius: 8px;
  border: none;
`;
