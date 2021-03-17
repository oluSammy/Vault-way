import { makeStyles } from '@material-ui/core';

const dashboardVaultStyles = makeStyles((theme) => ({
  root: {
    minHeight: '85vh',
    paddingTop: '50px',
    paddingBottom: '70px'
  },
  new: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#ffffff',
  },
  createIcon: {
    fontSize: '40px',
    margin: 0,
  },
  createText: {
    fontSize: '18px',
    fontWeight: 600,
    margin: 0,

    '@media (max-width: 440px)': {
      fontSize: '14px',
    },
  },
  myVaultHeading: {
    marginTop: '30px',
    fontSize: 14,
    fontWeight: 600,
    color: '#6E80A3',
  },
  myVaultBox: {
    marginRight: '30px',

    '@media (max-width: 654px)': {
      marginRight: '15px',
    },
  },
  myVaultContainer: {
    textDecoration: 'none',
    marginBottom: '20px',
  },
  myVaultWrapper: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '20px',
    marginBottom: '20px',

    '@media (max-width: 719px)': {
      padding: '20px',
    },

    '@media (max-width: 390px)': {
      padding: '15px'
    },
  },
  myVaultContent: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',

    '@media (max-width: 719px)': {
      marginBottom: '15px',
    },
  },
  myVaultName: {
    marginRight: 'auto',
  },
  myVaultTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#6E80A3',
    margin: 0,

    '@media (max-width: 719px)': {
      fontSize: '15px',
    },

    '@media (max-width: 390px)': {
      fontSize: '13px',
    },
  },
  myVaultType: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#737588',
    margin: 0,

    '@media (max-width: 719px)': {
      fontSize: 12,
    },

    '@media (max-width: 390px)': {
      fontSize: '11px',
    },
  },
  titleMargin: {
    marginBottom: '10px',
  },
  myVaultCashOut: {
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    color: '#737588',
    marginBottom: '20px',

    '@media (max-width: 719px)': {
      fontSize: 12,
      marginBottom: '15px'
    },
  },
  myVaultProgress: {
    height: 10,
    borderRadius: '15px',

    '@media (max-width: 390px)': {
      height: '8px',
    },
  },
  myVaultComplete: {
    margin: 0,
    color: '#737588',
    fontSize: 13,
    fontWeight: 'normal',

    '@media (max-width: 960px)': {
      marginTop: '7px'
    },
  },
}));

export default dashboardVaultStyles;
