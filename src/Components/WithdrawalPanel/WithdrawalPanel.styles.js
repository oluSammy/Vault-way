import { makeStyles } from '@material-ui/core';

const withdrawalPanelStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '50px'
  },
  form: {
    color: '#6E80A3',
  },
  formInput: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  },
  formLabel: {
    fontSize: '14px',
    marginBottom: '8px',
    color: '#6E80A3',
  },
  inputField: {
    width: '40%',
    padding: '14px 20px',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    color: '#ADB8CD',
    border: 'none',
    borderRadius: '14px',

    '@media (max-width: 1124px)': {
      width: '65%',
    },

    '@media (max-width: 500px)': {
      width: '85%',
    },

    '@media (max-width: 382px)': {
      width: '95%',
    },
  },
  select: {
    backgroundColor: '#F0F0F0'
  },
  formBtnBox: {
    marginTop: '50px'
  },
  saveAcct: {
    marginTop: '40px'
  },
  saveAcctName: {
    margin: 0,
    color: '#ADB8CD',
    fontSize: '25px',
  },
  saveAcctTxt: {
    margin: 0,
    color: '#E1E9EE',
    fontSize: '25px'
  },
  formAcct: {
    marginTop: '30px'
  },
  withdrawalCard: {
    width: '450px',
    backgroundColor: '#ffffff',
    marginTop: '40px',
    padding: '30px 30px',
    borderRadius: '20px'
  },
  withdrawalCardDotsBox: {
    display: 'flex',
    alignItems: 'center'
  },
  withdrawalCardDots: {
    margin: 0,
    fontSize: '20px',
    color: '#5B5A99',
    marginLeft: 'auto',
  },
  withdrawalCardName: {
    margin: 0,
    color: '#6E80A3',
    fontSize: '25px'
  },
  withdrawalCardNumber: {
    margin: 0,
    color: '#ADB8CD',
    fontSize: '22px'
  },
  withdrawalCardBank: {
    margin: 0
  }
}));

export default withdrawalPanelStyles;