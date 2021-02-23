import { makeStyles } from '@material-ui/core';

const sidebarStyles = makeStyles((theme) => ({
  vaultWayLogoBox: {
    margin: '20px auto 10px 20px',
  },
  vaultWayLogo: {
    width: '60%',
    margin: '0 auto',

    '@media (max-width: 402px)': {
      width: '50%',
    },
  },
}));

export default sidebarStyles;
