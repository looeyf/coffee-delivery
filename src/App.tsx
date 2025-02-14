import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { ResetCssGlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResetCssGlobalStyle />

      <h1>Coffee Delivery</h1>
    </ThemeProvider>
  );
}

export default App;
