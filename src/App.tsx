import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { ResetCssGlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router';
import { Router } from './Router';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResetCssGlobalStyle />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
