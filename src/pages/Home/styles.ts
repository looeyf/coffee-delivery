import styled from 'styled-components';

export const HeroSection = styled.section`
  padding: 5.75rem 0%;
  display: flex;
  align-items: center;
  gap: 3.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: ${({ theme }) => theme.fonts.title.xl};
    font-weight: 800;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors['base-title']};

    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.text.l};
    color: ${({ theme }) => theme.colors['base-subtitle']};

    margin-bottom: 4.125rem;
  }

  img {
    flex: 1;
  }
`;

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 1.25rem;
  white-space: nowrap;
`;
