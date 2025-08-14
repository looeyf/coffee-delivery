import styled from 'styled-components';
import heroSectionBackground from '/assets/hero-section-bg.svg';

export const HeroSectionContainer = styled.section`
  position: relative;
  /* &::before {
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
  } */

  padding: 5.75rem 0;
  display: flex;
  align-items: center;
  gap: 3.5rem;

  @media screen and (max-width: 1175px) {
    flex-direction: column-reverse;

    > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.text.l};
    color: ${({ theme }) => theme.colors['base-subtitle']};

    margin-bottom: 4.125rem;
  }

  img {
    flex: 1;
    max-width: 100%;
  }
`;

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 1.25rem;
  white-space: nowrap;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`;
