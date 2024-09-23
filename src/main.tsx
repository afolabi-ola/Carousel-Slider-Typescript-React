import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from './GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#6200ea',
    secondary: '#03dac6',
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
