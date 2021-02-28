import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00A343',
      dark: '#084622',
      light: '#E2FEEB',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default theme;
