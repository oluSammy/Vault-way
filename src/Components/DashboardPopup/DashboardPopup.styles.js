import { makeStyles } from '@material-ui/core';

const dashBoardPopupStyles = makeStyles((theme) => ({
  root: {
    outline: 'none',
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    padding: '70px 80px',
    borderRadius: '20px',
    position: 'relative',

    '@media (max-width: 705px)': {
      padding: '50px 60px',
    },

    '@media (max-width: 472px)': {
      padding: '30px 30px',
    },

    '@media (max-width: 376px)': {
      padding: '30px 20px',
    },
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
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#ADB8CD',
    textAlign: 'center',
    margin: 0,
    marginBottom: '40px',

    '@media (max-width: 705px)': {
      fontSize: '18px',
    },

    '@media (max-width: 472px)': {
      fontSize: '14px',
    },
  },
  inputLabel: {
    color: '#AEBEC7',
    fontSize: '17px',
    fontWeight: 'bold',

    '@media (max-width: 705px)': {
      fontSize: '14px',
    },

    '@media (max-width: 472px)': {
      fontSize: '12px',
    },
  },
  inputContainer: {
    border: '1px solid #E3EDF3',
    width: '400px',
    padding: '30px 30px',
    borderRadius: '15px',

    '@media (max-width: 705px)': {
      width: '350px',
      margin: '0 auto',
    },

    '@media (max-width: 587px)': {
      padding: '15px',
    },

    '@media (max-width: 555px)': {
      width: '280px',
    },

    '@media (max-width: 472px)': {
      width: '260px',
    },

    '@media (max-width: 395px)': {
      width: '230px',
    },
  },
  inputBox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
  },
  inputField: {
    fontSize: '35px',
    fontWeight: 'bold',
    width: '70%',
    border: 'none',
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    padding: '0 20px',
    color: '#6E80A3',
    outline: 'none',
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-webkit-appearance': 'textfield',
      '-moz-appearance': 'textfield',
    },

    '@media (max-width: 705px)': {
      fontSize: '28px',
    },

    '@media (max-width: 555px)': {
      fontSize: '20px',
    },

    '@media (max-width: 472px)': {
      fontSize: '14px',
    },
  },
  formGroup: {
    height: '70px',
    border: '1px solid #E3EDF3',
    fontSize: '25px',
    color: '#B5BED1',
    fontWeight: 'bold',
    width: '100%',

    '@media (max-width: 705px)': {
      fontSize: '17px',
    },

    '@media (max-width: 472px)': {
      fontSize: '14px',
    },
  },
  formBox: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
  },
  adorn: {
    fontSize: '30px',
    color: '#B5BED1',
    fontWeight: 'bold',
    margin: 0,

    '@media (max-width: 705px)': {
      fontSize: '17px',
    },

    '@media (max-width: 472px)': {
      fontSize: '14px',
    },
  },
  dashboardBtnBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  destination: {
    margin: 0,
    fontSize: '14px',
    color: '#AEBEC7',
    fontWeight: 'bold',
    marginTop: '20px',

    '@media (max-width: 705px)': {
      fontSize: '12px',
    },
  },
  name: {
    color: '#6E80A3',
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '10px 0',

    '@media (max-width: 705px)': {
      fontSize: '18px',
    },

    '@media (max-width: 472px)': {
      fontSize: '14px',
    },
  },
  acct: {
    margin: 0,
    color: '#ADB8CD',
    fontSize: '25px',
    fontWeight: 'bold',

    '@media (max-width: 705px)': {
      fontSize: '18px',
    },

    '@media (max-width: 472px)': {
      fontSize: '14px',
    },
  },
  bank: {
    margin: 0,
    color: '#ADB8CD',
    fontSize: '25px',
    fontWeight: 'bold',

    '@media (max-width: 705px)': {
      fontSize: '18px',
    },

    '@media (max-width: 472px)': {
      fontSize: '14px',
    },
  },
  walletCard: {
    marginTop: '30px',
    background: '#ffffff',
    width: 'max-content',
    padding: '20px',
    borderRadius: '20px',
    border: '1px solid #00A343',
  },
  walletName: {
    margin: 0,
    fontSize: '13px',
    fontWeight: 600,
    color: '#ADB8CD',
  },
  walletFooter: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  walletBank: {
    margin: 0,
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#ADB8CD',
    marginTop: '20px',
    marginRight: '70px',
  },
}));

export default dashBoardPopupStyles;
