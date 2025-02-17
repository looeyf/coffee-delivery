import styled from 'styled-components';
import { Button } from '../../../Button';

export const ShoppingCartButtonContainer = styled(Button)`
  font-size: ${({ theme }) => theme.fonts.text.s};

  transition: 0.2s filter ease-in-out;
  &:hover {
    filter: brightness(95%);
  }

  background-color: ${({ theme }) => theme.colors['yellow-light']};
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
  height: 20px;
  border-radius: 50%;

  transform: translate(50%, -50%);
`;
