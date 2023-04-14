import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import customTheme from './theme/customTheme';

import { Dashboard } from './pages';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline></CssBaseline>
      <Dashboard></Dashboard>
    </ThemeProvider>
  );
};

export default App;
