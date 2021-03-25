import { makeStyles } from '@material-ui/core';

const createVaultSuccessStyles = makeStyles(theme => ({
  root: {
    minHeight: '85vh',
    padding: '50px 20px 20px 20px',
  },
  vaultType: {
    color: '#6E80A3',
    fontSize: 14,
    fontWeight: 'bold',
  },
  pageTitle: {
    color: '#6E80A3',
    fontSize: 35,
    fontWeight: 'bold',

    '@media (max-width: 443px)': {
      fontSize: 25
    },
  },
  amount: {
    color: '#6E80A3',
    fontSize: 35,
    fontWeight: 'bold',
    margin: 0,
    marginTop: '60px',

    '@media (max-width: 443px)': {
      fontSize: 25
    },
  },
  amountSpan: {
    color: '#B5BED1'
  },
  amountSaved: {
    color: '#6E80A3',
    fontSize: 14,
    fontWeight: 'bold',
  },
  amountLock: {
    fontSize: 20,
    color: '#ADB8CD',
    fontWeight: 'bold',
    marginBottom: 40,

    '@media (max-width: 443px)': {
      fontSize: 18
    },
  },
  amountLockSpan: {
    color: '#6E80A3',
  },
}));

export default createVaultSuccessStyles;