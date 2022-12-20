import React from 'react';
import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/rubik';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a152',
    },
    secondary: {
      main: '#2c387e',
    },
    background: {
      default: grey[50],
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
    <GlobalStyles
      styles={{
        body: { backgroundColor: theme.palette.background.default },
      }}
    />
    <Routes />
  </ThemeProvider>
);

export default App;
