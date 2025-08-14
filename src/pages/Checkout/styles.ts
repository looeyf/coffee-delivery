import styled from 'styled-components';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';

export const CheckoutFormContainer = styled.form`
  padding: 2.5rem 0;
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }

  h5 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 0.9375rem;
  }
`;

export const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;

  & + & {
    margin-top: 0.75rem;
  }
`;

export const SectionContentTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    line-height: 1.3;

    p {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      margin-bottom: 0.125rem;
    }

    span {
      font-size: ${({ theme }) => theme.fonts.sizes.text.s};
    }
  }
`;

export const AddressInputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-gap: 1rem 0.75rem;

  > * {
    grid-column: span 2;

    &:has(input[name='street']) {
      grid-column: span 6;
    }

    &:has(input[name='additional']) {
      grid-column: span 4;
    }

    &:has(input[name='city']) {
      grid-column: span 3;
    }

    &:has(input[name='state']) {
      grid-column: span 1;
    }
  }

  @media screen and (max-width: 768px) {
    > * {
      grid-column: span 6 !important;
    }
  }
`;

export const CartSummaryCard = styled(Card)`
  height: auto;
  padding: 2.5rem;

  @media screen and (min-width: 768px) {
    min-width: 28rem;
  }

  ul {
    max-height: 32.45rem;
    overflow: auto;
  }
`;

export const Separator = styled.hr`
  margin: 1.5rem 0;
  background-color: ${({ theme }) => theme.colors['base-button']};
  height: 1px;
  border: 0;
`;

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  p {
    display: flex;
    justify-content: space-between;

    &:last-of-type {
      font-size: ${({ theme }) => theme.fonts.sizes.text.l};
      font-weight: ${({ theme }) => theme.fonts.weights.bold};
    }
  }
`;

export const ConfirmOrderButton = styled(Button)`
  width: 100%;
`;
