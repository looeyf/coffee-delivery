import styled from 'styled-components';

export const ProductsSectionContainer = styled.section`
  padding: 2rem 0;

  h2 {
    font-family: 'Baloo 2';
    font-size: ${({ theme }) => theme.fonts.title.l};
    color: ${({ theme }) => theme.colors['base-subtitle']};

    margin-bottom: 3.375rem;
  }
`;

export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`;
