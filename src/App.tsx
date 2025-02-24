import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { ResetCssGlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router';
import { Router } from './Router';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResetCssGlobalStyle />

      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
