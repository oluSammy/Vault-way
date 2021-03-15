import { makeStyles } from '@material-ui/core';

const debitCardPanelStyles = makeStyles((theme) => ({
  debitForm: {
    width: '70%',

    '@media (max-width: 1144px)': {
      width: '85%',
    },
    '@media (max-width: 659px)': {
      // width: '100%',
    },
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',

    '@media (max-width: 659px)': {
      flexDirection: 'column',
    },
  },
  formInput: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 659px)': {
      marginLeft: '20px',
    },
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
    marginRight: '40px',
    width: '60%',
    '@media (max-width: 659px)': {
      width: '100%',
      marginRight: 0,
      marginBottom: '20px',
    },
  },
  cvvInput: {
    width: '50%',
    position: 'relative',
    '@media (max-width: 659px)': {
      width: '100%',
    },
  },
  selectInput: {
    width: '48%',
    '@media (max-width: 659px)': {
      width: '100%',
    },
  },
  selectMargin: {
    marginRight: '40px',

    '@media (max-width: 659px)': {
      marginRight: '0',
      marginBottom: '20px',
    },
  },
  cvvContainer: {
    // position: 'relative',
  },
  cvvIcon: {
    position: 'absolute',
    right: '20px',
    bottom: '13px',
    fontSize: '20px',
    color: '#00A343',
  },
  visaCard: {
    color: '#6E80A3',
    width: '500px',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '30px 30px',
    marginTop: '50px',

    '@media (max-width: 541px)': {
      width: '95%',
    },
  },
  visaCardTop: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  visaCardTitle: {
    fontSize: '20px',
    fontWeight: 500,
    margin: 0,

    '@media (max-width: 429px)': {
      fontSize: '17px',
    },
  },
  visaCardDot: {
    fontSize: '15px',
    margin: 0,
    marginLeft: 'auto'
  },
  visaCardNumber: {
    margin: 0,
    fontSize: '30px',

    '@media (max-width: 429px)': {
      fontSize: '20px',
    },
  },
  visaCardFooter: {
    display: 'flex',
    alignItems: 'center'
  },
  visaCardExpires: {
    margin: 0,
    fontSize: '20px',
    marginTop: '30px',

    '@media (max-width: 429px)': {
      fontSize: '20px',
    },
  },
  visaCardImg: {
    marginLeft: 'auto',
    marginTop: '5px',

    '@media (max-width: 429px)': {
      width: '25%'
    },
  },
  newCardIcon: {
    marginRight: '6px'
  }
}));

export default debitCardPanelStyles;
