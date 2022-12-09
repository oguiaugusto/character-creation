import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Routes from './routes';
import '@fontsource/rubik';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a152',
    },
    secondary: {
      main: '#2c387e',
    },
  },
  typography: {
    fontFamily: [
      'Rubik',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={ theme }>
    <Routes />
  </ThemeProvider>
);

export default App;
