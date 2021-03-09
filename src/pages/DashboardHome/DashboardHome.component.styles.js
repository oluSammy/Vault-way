import { makeStyles } from '@material-ui/core';

const dashboardHomeStyles = makeStyles(theme => ({
  root: {
    marginTop: '40px'
  },
  balanceContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridRowGap: '20px',
    [theme.breakpoints.up('xl')]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 350px))',
    },
    '@media (max-width: 421px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    },
  },
  balance: {
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    width: '90%',
    border: '1px solid #E3EDF3',
    borderRadius: '10px',
    padding: '10px 12px 20px 12px',
    cursor: 'pointer',

    '@media (max-width: 1013px)': {
      width: '95%',
    },
  },
  balanceTop: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px'
  },
  balanceTitle: {
    marginRight: 'auto',
    color: '#737588',
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '17px',

    '@media (max-width: 624px)': {
      fontSize: '12px'
    },
  },
  balanceIcon: {
    width: '70%'
  },
  amount: {
    color: '#161A35',
    fontSize: '28px',

    '@media (max-width: 624px)': {
      fontSize: '20px'
    },
  },
  naira: {
    color: '#161A35',
    fontSize: '12px',
    marginRight: '5px',
  },
  kobo: {
    color: '#161A35',
    fontSize: '12px',
    marginLeft: '5px',
  },
  wallet: {
    background: '#FFFFFF',
    width: '90%',
    border: '1px solid #E3EDF3',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    '@media (max-width: 1013px)': {
      width: '95%',
    },

  },
  walletContent: {
    marginRight: 'auto',
    padding: '14px 0 18px 12px',
    color: '#737588',

    '@media (max-width: 616px)': {
      padding: '10px 0 20px 12px',
    },
  },
  walletTop: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '17px',

    '@media (max-width: 616px)': {
      marginBottom: '15px',
    },

  },
  walletHeading: {
    fontWeight: 'normal',
    fontSize: '18px',
    marginLeft: '13px',

    '@media (max-width: 851px)': {
      fontSize: '16px'
    },

    '@media (max-width: 624px)': {
      fontSize: '15px'
    },

    '@media (max-width: 616px)': {
      marginLeft: '8px',
    },

    '@media (max-width: 367px)': {
      fontSize: '12px',
    },
  },
  walletBank: {
    fontSize: '14px',
    fontWeight: 500,

    '@media (max-width: 624px)': {
      fontSize: '13px'
    },
  },
  walletAcct: {
    fontSize: '16px',
    fontWeight: 700,

    '@media (max-width: 624px)': {
      fontSize: '15px'
    },
  },
  walletAction: {
    color: '#E2FEEB',
    background: '#00A343',
    border: '1px solid #E3EDF3',
    width: '20%',
    borderRadius: '10px',
    fontSize: '26px',
    fontWeight: 300,
    cursor: 'pointer',
  },
  quick: {
    marginTop: '20px',
  },
  quickHeading: {
    fontSize: '14px',
    color: '#6E80A3',
    marginBottom: '12px'
  },
  quickContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    // gridColumnGap: '10px'
  },

  quickBox: {
    display: 'flex',
    background: '#EAF1F5',
    padding: '15px 10px',
    borderRadius: '8px',
    width: '90%'
  },
  quickText: {
    marginRight: 'auto'
  }
}));

export default dashboardHomeStyles;
