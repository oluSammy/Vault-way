import { makeStyles } from '@material-ui/core';

const cardBankStyles = makeStyles((theme) => ({
  tab: {
    backgroundColor: '#ffffff',
    color: '#6E80A3 !important',
    textTransform: 'capitalize',
    padding: '35px 50px',
    borderRadius: '15px',
    transition: 'all .4s',
    fontSize: '12px',
    fontWeight: 700,
    marginRight: '30px',

    '@media (max-width: 553px)': {
      padding: '25px 30px',
    },

    '@media (max-width: 493px)': {
      padding: '20px 20px',
    },

    '@media (max-width: 424px)': {
      padding: '18px 16px',
      fontSize: '10px'
    },

    '@media (max-width: 364px)': {
      padding: '14px 10px',
      fontSize: '10px'
    },

    '@media (max-width: 340px)': {
      padding: '12px 8px',
      fontSize: '8px'
    },
  },
  activeTab: {
    border: '1px solid #00A343',
  },
  inactiveTab: {
  },
  indicator: {
    backgroundColor: 'white !important',
    display: 'none !important',
    opacity: '0 !important',
  },
  tabIcon: {
    fontSize: '45px',

    '@media (max-width: 426px)': {
      fontSize: '25px',
    },

    '@media (max-width: 351px)': {
      fontSize: '20px',
    },
  },
  rotatedIcon: {
    transform: 'rotate(-45deg)',
  },
  activeIcon: {
    color: '#00A343',
  },
  dashedLine: {
    borderTop: '1px dashed #AAAAAA',
    marginTop: '50px',
    width: '70%',
    marginLeft: 0,

    '@media (max-width: 969px)': {
      width: '95%',
    },

  }
}));

export default cardBankStyles;
