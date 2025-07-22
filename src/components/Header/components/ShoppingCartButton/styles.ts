import styled from 'styled-components';
import { Button } from '../../../Button';

export const ShoppingCartButtonContainer = styled(Button).attrs({
  variant: 'raw',
})`
  font-size: ${({ theme }) => theme.fonts.text.s};

  background-color: ${({ theme }) => theme.colors['yellow-light']};
  &:hover {
    filter: brightness(95%);
  }

  position: relative;
`;

export const ProductsAmount = styled.span`
  position: absolute;
  right: 0;
  top: 0;

  background-color: ${({ theme }) => theme.colors['yellow-dark']};
  color: ${({ theme }) => theme.colors.white};

  font-size: ${({ theme }) => theme.fonts.text.xs};
  font-weight: 700;

  width: 20px;
  line-height: 20px;
  border-radius: 50%;

  transform: translate(50%, -50%);
`;
