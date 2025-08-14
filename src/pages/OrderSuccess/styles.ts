import styled, { css } from 'styled-components';
import { Card } from '../../components/Card';

export const OrderSuccessContainer = styled.main`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const OrderSuccessTittle = styled.h2`
  color: ${({ theme }) => theme.colors['yellow-dark']};
`;

export const OrderSuccessSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.text.l};
  color: ${({ theme }) => theme.colors['base-subtitle']};
`;

export const OrderSuccessContent = styled.div`
  display: flex;
  gap: 6.25rem;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const OrderSuccessCard = styled(Card)`
  padding: 2.5rem;
  background: ${({ theme }) => css`
  linear-gradient(${theme.colors.background}, ${theme.colors.background}) padding-box,
              linear-gradient(to right, ${theme.colors.yellow}, ${theme.colors.purple}) border-box;
  `};
  border: 1px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
