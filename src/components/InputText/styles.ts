import styled, { css } from 'styled-components';

const INPUT_PADDING = '0.75rem';

export const InputTextContainer = styled.div<{ isOptional?: boolean }>`
  > input {
    width: 100%;
  }

  position: relative;
  ${({ isOptional }) =>
    isOptional &&
    css`
      &::after {
        content: 'Opcional';
        position: absolute;
        right: ${INPUT_PADDING};
        top: 50%;
        transform: translateY(-50%);

        font-style: italic;
        font-size: ${({ theme }) => theme.fonts.sizes.text.xs};
        color: ${({ theme }) => theme.colors['base-label']};

        cursor: text;
      }
    `}
`;

export const StyledInputText = styled.input.attrs({ type: 'text' })`
  padding: ${INPUT_PADDING};

  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;

  font-size: ${({ theme }) => theme.fonts.sizes.text.s};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['base-text']};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  transition: 0.2s border-color ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`;
