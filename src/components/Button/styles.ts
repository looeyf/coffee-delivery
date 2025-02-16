import styled, { css, RuleSet } from 'styled-components';

export type ButtonSize = 'small' | 'large';

const BUTTON_SIZE: Record<ButtonSize, RuleSet> = {
  small: css`
    font-size: ${({ theme }) => theme.fonts.button.m};
    padding: 0.5rem;
  `,
  large: css`
    font-size: ${({ theme }) => theme.fonts.button.g};
    padding: 0.75rem;
  `,
};

export const StyledButton = styled.button<{ size: ButtonSize }>`
  border: unset;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  line-height: 1.6;
  ${({ size }) => BUTTON_SIZE[size]}
`;
