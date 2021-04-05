import { makeStyles } from '@material-ui/core';

// const width = 240
const dashboardStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    backgroundColor: '#FFFFFF',
  },
  swipeableDrawer: {
    width: '40vw',

    '@media (max-width: 696px)': {
      width: '50vw',
    },

    '@media (max-width: 498px)': {
      width: '60vw',
    },

    '@media (max-width: 398px)': {
      width: '70vw',
    },
  },
  toolbarStyles: {
    padding: '14px 2%',
    display: 'flex',
    alignItems: 'center',
    color: '#6E80A3',
    '@media (max-width: 960px)': {
      padding: '14px 6%',
    },
    '@media (max-width: 608px)': {
      flexWrap: 'wrap',
    },
  },
  menuIcon: {
    color: '#6E80A3',
  },
  logoContainer: {
    margin: '0 4.5vw 0 4vw',

    '@media (max-width: 960px)': {
      margin: '0 auto'
    },
  },
  logo: {
    width: '70%',
  },
  name: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 700,

    '@media (max-width: 960px)': {
      display: 'none'
    },
  },
  switch: {
    marginLeft: 'auto',
    '@media (max-width: 960px)': {
      display: 'none'
    },
  },
  navIcon: {
    marginLeft: '40px',
    '@media (max-width: 960px)': {
      marginLeft: '0px',
    },
  },
  drawer: {
    width: 300,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxShadow: 'none',

  },
  drawerOpen: {
    width: 300,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: 'none',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  navList: {
    marginTop: '100px',
    color: '#6E80A3',
  },
  listItem: {
    marginBottom: '10px'
  },
  listIcon: {
    color: '#6E80A3',
  },
  listText: {
    fontSize: '15px',
    fontWeight: 500,
  },
  mainContent: {
    transition: 'all .2s ease',
  },
  activeNavLink: {
    background: '#F4FFF8',
    boxShadow: '0px 3px 19px rgba(3, 104, 44, 0.1)',
    borderRadius: '8px',
  },
}));

export default dashboardStyles;
