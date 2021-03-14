import { makeStyles } from '@material-ui/core';

const profileTabPanelStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '50px',
  },
  profileForm: {
    width: '70%',

    '@media (max-width: 1120px)': {
      width: '80%',
    },

    '@media (max-width: 1009px)': {
      width: '90%',
    },
  },
  profileFileUpload: {
    display: 'flex',
    alignItems: 'center',
  },
  profileFileInput: {
    display: 'none',
  },
  profileInputLabel: {
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
    color: '#6E80A3',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',

    '@media (max-width: 673px)': {
      flexDirection: 'column',
    },
  },
  formInput: {
    display: 'flex',
    flexDirection: 'column',
    width: '42%',
    marginRight: '5%',

    '@media (max-width: 673px)': {
      width: '90%',
      marginBottom: '20px',
      marginRight: '0',
    },

    '@media (max-width: 482px)': {
      width: '100%',
      marginBottom: '20px',
      marginRight: '0',
    },
  },
  formTextField: {
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

    '@media (max-width: 482px)': {
      fontSize: '14px',
      padding: '14px 15px'
    },
  },
  labelBox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  radioLabel: {
    backgroundColor: '#F0F0F0',
    fontSize: '16px',
    fontWeight: 600,
    color: '#ADB8CD',
    marginRight: '20px',
    padding: '20px 30px',
    borderRadius: '20px',
    cursor: 'pointer',

    '@media (max-width: 515px)': {
      padding: '14px 15px'
    },
  },
  radioLabelActive: {
    border: '1px solid #00A343',
  },
  formSubmit: {
    backgroundColor: '#00A343',
    color: '#ffffff',
    fontStyle: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    border: 'none',
    padding: '13px 40px',
    borderRadius: '30px',
    marginTop: '30px',
    cursor: 'pointer',
  },
  formInputVariant: {
    width: '90%',

    '@media (max-width: 482px)': {
      width: '100%',
    },
  },
  radioHidden: {
    display: 'none'
  }
}));

export default profileTabPanelStyles;
