import { makeStyles } from '@material-ui/core';

const amountStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '50px'
  },
  inputField: {
    marginBottom: 50,
    border: '1px solid #E3EDF3',
    padding: 20,
    width: 'max-content',
    borderRadius: 20,
    width: '40%',

    '@media (max-width: 1296px)': {
      width: '60%'
    },

    '@media (max-width: 986px)': {
      width: '70%'
    },

    '@media (max-width: 576px)': {
      width: '100%'
    },
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#AEBEC7',
  },
  textField: {
    marginTop: 30
  },
  inputEl: {
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    border: 'none',
    outline: 'none',
    fontSize: 35,
    color: '#6E80A3',
    fontWeight: 'bold',
    width: '50%',

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-webkit-appearance': 'textfield',
      '-moz-appearance': 'textfield',
    },

    '@media (max-width: 418px)': {
      width: '40%'
    },

    '@media (max-width: 363px)': {
      width: '40%',
      fontSize: 25
    },
  },
  inputSpan: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#B5BED1',

    '@media (max-width: 363px)': {
      fontSize: 25
    },
  }
}));

export default amountStyles;