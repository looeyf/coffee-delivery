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
    font-weight: 400;
    font-size: ${({ theme }) => theme.fonts.text.m};
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
    font-size: ${({ theme }) => theme.fonts.title.xl};
    font-weight: 800;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.title.l};
    font-weight: 800;
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.title.m};
    font-weight: 800;
  }

  h4 {
    font-size: ${({ theme }) => theme.fonts.title.s};
    font-weight: 700;
  }

  h5 {
    font-size: ${({ theme }) => theme.fonts.title.xs};
    font-weight: 700;
  }
`;
