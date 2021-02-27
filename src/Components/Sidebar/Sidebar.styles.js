import { makeStyles } from '@material-ui/core';

const sidebarStyles = makeStyles((theme) => ({
  vaultWayLogoBox: {
    margin: '20px auto 10px 20px',
  },
  vaultWayLogo: {
    width: '40%',
    margin: '0 auto',

    '@media (max-width: 402px)': {
      width: '30%',
    },
  },
  divider: {
    width: '95%',
    backgroundColor: theme.palette.grey[300],
    margin: '0 auto',
    height: '.3px'
  },
  navList: {
    marginTop: '40px',
    padding: '10px'
  },
  navItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
    textDecoration: 'none',
    // backgroundColor: 'red',
    marginBottom: '5px',
    padding: '10px 10px',
    borderRadius: '5px'
  },
  navIcon: {
    marginRight: '20px',
    fontSize: '15px',

    '@media (max-width: 402px)': {
      marginRight: '15px',
    },

    '@media (max-width: 350px)': {
      marginRight: '12px',
    },
  },
  navText: {
    fontSize: '12px',
    fontWeight: '700'
  },
  activeNavLink: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main
  }
}));

export default sidebarStyles;
