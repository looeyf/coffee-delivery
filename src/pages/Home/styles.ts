import styled from 'styled-components';
import heroSectionBackground from '../../assets/hero-section-bg.svg';

export const HeroSection = styled.section`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100%;
    left: calc(((100vw - 70rem) / 2) * -1);
    background-image: url(${heroSectionBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
  }

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

export const ProductsSection = styled.section`
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
