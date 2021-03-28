import { makeStyles } from '@material-ui/core';

const quickVaultSuccessStyle = makeStyles(theme => ({
  amount: {
    margin: 0,
    fontSize: 35,
    color: '#B5BED1',
    fontWeight: 'bold',
    marginTop: 60,

    '@media (max-width: 634px)': {
      fontSize: 20,
    },
  },
  amountSpan: {
    color: '#6E80A3'
  },
  saved: {
    margin: 0,
    fontSize: 14,
    color: '#6E80A3',
    fontWeight: 'bold'
  },
  locked: {
    margin: 0,
    fontSize: 20,
    color: '#ADB8CD',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 40,

    '@media (max-width: 634px)': {
      fontSize: 16,
    },
  },
  lockedSpan: {
    color: '#6E80A3'
  }
}));

export default quickVaultSuccessStyle;