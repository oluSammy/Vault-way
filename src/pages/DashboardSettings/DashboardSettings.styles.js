import { makeStyles } from '@material-ui/core';

const dashboardSettingsStyles = makeStyles((theme) => ({
  root: {
    minHeight: '84vh',
  },
  tabBox: {
    marginTop: '40px',
    marginBottom: '30px',

    '@media (max-width: 730px)': {
      flexWrap: 'wrap-reverse',
    },
  },
  tabContainer: {
    marginRight: 'auto',

    '@media (max-width: 659px)': {
      width: '100%',
    },
  },
  activeTab: {
    backgroundColor: '#ADB8CD',
    textTransform: 'capitalize',
    color: '#ffffff !important',
    padding: '2px 10px',
    borderRadius: '15px',
    transition: 'all .4s',
    fontSize: '18px',
    fontWeight: 700,

    '@media (max-width: 1229px)': {
      minWidth: '100px !important',
      minHeight: '40px !important',
    },

    '@media (max-width: 659px)': {
      fontSize: '14px',
      minWidth: '80px !important',
      minHeight: '40px !important',
    },

    '@media (max-width: 439px)': {
      fontSize: '12px',
      minWidth: '60px !important',
      padding: '0px 10px',
    },

    '@media (max-width: 372px)': {
      fontSize: '10px',
      minWidth: '50px !important',
    },
  },
  inactiveTab: {
    textTransform: 'capitalize',
    color: '#ADB8CD',
    transition: 'all .4s',
    fontSize: '18px',
    fontWeight: 700,

    '@media (max-width: 1229px)': {
      minWidth: '100px !important',
      minHeight: '40px !important',
    },
    '@media (max-width: 659px)': {
      fontSize: '14px',
      minWidth: '80px !important',
      minHeight: '40px !important',
    },
    '@media (max-width: 439px)': {
      fontSize: '12px',
      minWidth: '60px !important',
      padding: '0px 10px',
    },
    '@media (max-width: 372px)': {
      fontSize: '10px',
      minWidth: '50px !important',
    },
  },
  indicator: {
    backgroundColor: 'white !important',
    display: 'none !important',
    opacity: '0 !important',
  },

  tabsLogoBox: {
    '@media (max-width: 1099px)': {
      width: '80px',
    },

    '@media (max-width: 1038px)': {
      width: '50px',
    },

    '@media (max-width: 956px)': {
      width: '80px',
    },

    '@media (max-width: 730px)': {
      marginLeft: '-10px',
      marginTop: '-10px',
      marginBottom: '40px',
    },
  },
  tabsLogo: {
    width: '100%',
    display: 'block',
  },
}));

export default dashboardSettingsStyles;
