import { createGlobalStyle } from 'styled-components';

export const ResetCssGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors['background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: ${({ theme }) => theme.fonts.weights.regular};
    font-size: ${({ theme }) => theme.fonts.sizes.text.m};
  }

  ul {
    list-style-type: none;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2';
    line-height: 1.3;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.title.xl};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.title.l};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.sizes.title.m};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
  }

  h4 {
    font-size: ${({ theme }) => theme.fonts.sizes.title.s};
    font-weight: ${({ theme }) => theme.fonts.weights['semi-bold']};
  }

  h5 {
    font-size: ${({ theme }) => theme.fonts.sizes.title.xs};
    font-weight: ${({ theme }) => theme.fonts.weights['semi-bold']};
  }
`;
