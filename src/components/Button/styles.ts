import styled, { css, RuleSet } from 'styled-components';

export type ButtonSize = 'small' | 'large';
export type ButtonVariant = 'raw' | 'primary' | 'secondary';

const BUTTON_SIZE: Record<ButtonSize, RuleSet> = {
  small: css`
    font-size: ${({ theme }) => theme.fonts.sizes.button.m};
    padding: 0.5rem;
  `,
  large: css`
    font-size: ${({ theme }) => theme.fonts.sizes.button.g};
    padding: 0.75rem;
  `,
};

const BUTTON_VARIANT: Record<ButtonVariant, RuleSet> = {
  raw: css``,
  primary: css`
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-text']};
    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  `,
};

export const StyledButton = styled.button<{
  size: ButtonSize;
  variant: ButtonVariant;
}>`
  ${({ variant }) => BUTTON_VARIANT[variant]}

  transition: all 0.2s ease-in-out;

  border: unset;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  line-height: 1.6;
  ${({ size }) => BUTTON_SIZE[size]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
