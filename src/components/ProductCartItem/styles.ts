import styled from 'styled-components';

export const ProductCartItemContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  padding: 0.5rem 0.25rem;
`;

export const ProductCartItemTitle = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const ProductCartItemActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    max-width: 72px;
  }
`;

export const ProductCartItemPrice = styled.span`
  margin-left: auto;

  font-size: ${({ theme }) => theme.fonts.sizes.text.m};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;
