import styled from 'styled-components';
import { Button } from '../Button';
import { Card } from '../Card';

export const ProductCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }
`;

export const ProductTagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  color: ${({ theme }) => theme.colors['yellow-dark']};
  font-size: ${({ theme }) => theme.fonts.tag};
  font-weight: 700;
  text-transform: uppercase;
`;

export const ProductDescription = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-family: 'Baloo 2';
    font-size: ${({ theme }) => theme.fonts.title.s};
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    text-align: center;

    margin-bottom: 0.5rem;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.text.s};
    color: ${({ theme }) => theme.colors['base-label']};
    text-align: center;
    line-height: 1.3;
  }
`;

export const ProductCardFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: ${({ theme }) => theme.fonts.text.s};

    strong {
      font-family: 'Baloo 2';
      font-size: ${({ theme }) => theme.fonts.title.m};
      font-weight: 800;
    }
  }
`;

export const ProductFooterActions = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    max-width: 72px;
  }
`;

export const AddToCartButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors['purple-dark']};
  transition: 0.2s background-color ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors['purple']};
  }
`;
