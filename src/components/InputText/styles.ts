import styled from 'styled-components';

export const StyledInputText = styled.input.attrs({ type: 'text' })`
  padding: 0.75rem;

  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;

  font-size: ${({ theme }) => theme.fonts.text.s};
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
