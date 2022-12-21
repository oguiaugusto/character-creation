import React from 'react';
import { ColorPartial } from '@mui/material/styles/createPalette';
import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/rubik';

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor extends ColorPartial {}
}
// Source: https://stackoverflow.com/questions/67013112/material-ui-how-to-access-all-palette-shades-inside-component

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a152',
      50: '#e5f5eb',
      100: '#c1e7cd',
      200: '#98d7ad',
      300: '#6bc88d',
      400: '#46bc75',
      500: '#0fb05d',
      700: '#008f47',
      800: '#007e3c',
      900: '#005e28',
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
