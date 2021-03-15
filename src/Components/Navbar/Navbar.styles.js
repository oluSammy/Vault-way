import { makeStyles } from '@material-ui/core';

const navbarStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  appBarStyles: {
    backgroundColor: '#F5F7FA',
    boxShadow: 'none',
  },
  swipeableDrawer: {
    width: '30%',
    backgroundColor: theme.palette.primary.main,

    '@media (max-width: 636px)': {
      width: '35%',
    },

    '@media (max-width: 536px)': {
      width: '55%',
    },

    '@media (max-width: 443px)': {
      width: '65%',
    },

    '@media (max-width: 376px)': {
      width: '70%',
    },

    '@media (max-width: 333px)': {
      width: '80%',
    },
  },
  toolbarStyles: {
    display: 'flex',
    alignItems: 'center',
    padding: '9px 5%',

    '@media (max-width: 583px)': {
      padding: '6px 2%',
      justifyContent: 'space-between',
    },

    '@media (max-width: 400px)': {
      padding: '4px 1%',
    },
  },
  iconBtn: {
    display: 'none',
    '@media (max-width: 815px)': {
      display: 'block',
    },
  },
  hamburger: {
    display: 'none',
    '@media (max-width: 815px)': {
      display: 'block',
    },
  },
  logoContainer: {
    marginRight: 'auto',
    width: '123px',
    height: '40px',

    '@media (max-width: 583px)': {
      width: '80px',
      height: '30px',
      marginRight: 0,
    },
    '@media (max-width: 400px)': {
      width: '60px',
      height: '20px',
    },
  },
  logo: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
  },
  navLinks: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginRight: '25px',

    '@media (max-width: 815px)': {
      display: 'none',
    },
  },
  navLink: {
    fontWeight: 500,
    textDecoration: 'none',
    marginLeft: '34px',
    fontSize: '12px',
    letterSpacing: '.5px',
    lineHeight: '30px',
    color: '#6E80A3',
    transition: 'all .2s',
    cursor: 'pointer',

    '&:hover': {
      fontWeight: 800,
      color: theme.palette.primary.main,
    }
  },
  activeNavLink: {
    fontWeight: 800,
    color: theme.palette.primary.main,
  },
  navCta: {
    display: 'flex',
    alignItems: 'center',
  },
  navBtn: {
    marginRight: '20px',

    '@media (max-width: 400px)': {
      marginRight: '8px',
    },
  },
  create: {
    '@media (max-width: 583px)': {
      display: 'none',
    },
  },
  navLinkWithIcon: {
    display: 'flex',
    alignItems: 'center'
  },
  navDropDown: {
    marginTop: '40px',
  },
  rotateEndIcon: {
    transform: 'rotate(180deg)',
    transition: 'all .5s ease-in-out'
  },
  menuItem: {
    display: 'flex',
    textDecoration: 'none',
    alignItems: 'center'
  },
  dropIcon: {
    fontSize: '15px',
    marginRight: '10px'
  },
  menuItemLink: {
    color: '#6E80A3',
    fontWeight: '500',
    fontSize: '14px'
  },
}));

export default navbarStyles;
