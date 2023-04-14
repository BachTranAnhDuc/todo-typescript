import { createTheme, ThemeOptions } from '@mui/material';

const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      paper: '#151515',
      default: 'rgba(0, 0, 0, 0.96)',
    },
  },
});

export default customTheme;
