import { makeStyles } from '@material-ui/core';

const debitCardPanelStyles = makeStyles(theme => ({
  debitForm: {
    width: '70%',
    // backgroundColor: 'red',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  formInput: {
    display: 'flex',
    flexDirection: 'column'
  },
  formLabel: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#6E80A3',
    lineHeight: '17px',
  },
  textField: {
    marginTop: '20px',
    padding: '14px 20px',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    color: '#ADB8CD',
    border: 'none',
    borderRadius: '14px',

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-webkit-appearance': 'textfield',
      '-moz-appearance': 'textfield',
    },
  },
  select: {
    backgroundColor: '#F0F0F0',
    padding: '14px 20px',
  },
  cardInput: {
    marginRight: '40px'
  }
}));

export default debitCardPanelStyles;