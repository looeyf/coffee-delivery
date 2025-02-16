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
`;
