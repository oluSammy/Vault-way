import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#00A343'
      }
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(' '),
  },
});

export default theme;
