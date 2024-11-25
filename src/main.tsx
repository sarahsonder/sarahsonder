import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core';
import App from './App'
import '@mantine/core/styles.css';

const theme = createTheme({
  fontFamily: 'Poppins, sans-serif',
  headings: {
    fontFamily: 'Gluten, sans-serif',
    fontWeight: '600'
  },
  primaryColor: 'cyan',
});

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>
)
