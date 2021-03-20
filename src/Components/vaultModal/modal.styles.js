import { makeStyles } from '@material-ui/core';

const modalStyles = makeStyles((theme) => ({
  root: {
    outline: 'none',
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    padding: '70px 70px',
    borderRadius: '20px',
    position: 'relative',
    width: '550px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    '@media (max-width: 702px)': {
      width: '550px',
      padding: '50px 50px',
    },

    '@media (max-width: 607px)': {
      width: '450px',
      padding: '50px 30px',
    },

    '@media (max-width: 530px)': {
      width: '400px',
      padding: '30px 30px',
    },

    '@media (max-width: 437px)': {
      width: '300px',
      padding: '30px 20px',
    },
  },

  modalHeading: {
    fontSize: 24,
    fontWeight: 600,
    color: '#ADB8CD',
    textAlign: 'center',
  },

  cancelBox: {
    backgroundColor: '#E1E9EE',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    boxShadow: '0px 10px 10px #E3EDF3',
    cursor: 'pointer',
    position: 'absolute',
    top: '15px',
    right: '25px',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },

    '@media (max-width: 472px)': {
      width: '30px',
      height: '30px',
    },
  },
  cancel: {
    color: '#B5BED1',
    fontSize: '30px',

    '@media (max-width: 472px)': {
      fontSize: '20px',
    },
  },

  mainText: {
    fontSize: 20,
    fontWeight: 600,
    color: '#ADB8CD',
    textAlign: 'center',
    margin: '40px 0 0 25px',

    '@media (max-width: 530px)': {
      fontSize: 16,
    },

    '@media (max-width: 437px)': {
      fontSize: 14,
    },
  },
  mainSpan: {
    color: '#6E80A3',
  },
  balanceBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '20px 0',
    border: '1px solid #E3EDF3',
    padding: '20px',
    borderRadius: 20,
    marginBottom: '50px',
  },
  balanceTitle: {
    margin: 0,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6E80A3',
    marginBottom: 20,

    '@media (max-width: 437px)': {
      fontSize: 12,
    },
  },
  balanceAmount: {
    margin: 0,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#6E80A3',

    '@media (max-width: 530px)': {
      fontSize: 25,
    },

    '@media (max-width: 437px)': {
      fontSize: 20,
    },
  },
  topUpBox: {
    marginTop: '20px',
  },
  topUpTitle: {
    color: '#AEBEC7',
    fontSize: 14,
    fontWeight: 'bold',
  },
  labelBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@media (max-width: 560px)': {
      flexDirection: 'column',
    },
  },
  label: {
    background: '#ffffff',
    width: '47%',
    padding: 20,
    borderRadius: 20,
    cursor: 'pointer',
    transition: 'all .2s ease',

    '@media (max-width: 560px)': {
      marginBottom: '10px',
      width: '60%'
    },

    '@media (max-width: 399px)': {
      width: '75%'
    },
  },
  topUpInput: {
    display: 'none',
  },
  labelBalance: {
    margin: 0,
    fontSize: 12,
    fontWeight: 600,
    color: '#ADB8CD',
    marginBottom: 10,
  },
  labelBalanceBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelBalanceBank: {
    margin: 0,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6E80A3',
  },
  activeLabel: {
    border: '1px solid #00A343',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
}));

export default modalStyles;
