import { makeStyles } from '@material-ui/core';

const accountsTabPanelStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '60px',
  },
  form: {
    paddingBottom: '50px',
    marginBottom: '30px'
  },
  formLabel: {
    color: '#6E80A3',
    fontSize: '14px',
    fontWeight: 600,
  },
  formLink: {
    color: '#00A343',
    fontSize: '10px',
    textDecoration: 'none',
  },
  formGroup: {
    width: '35%',
  },
  formTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formInput: {
    marginTop: '20px',
    padding: '14px 20px',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    color: '#ADB8CD',
    border: 'none',
    borderRadius: '14px',
    width: '100%',

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
  formBtn: {
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
  line: {
    marginRight: '5%',
    marginBottom: '80px',
    border: '1px solid #EAF1F5',
  }
}));

export default accountsTabPanelStyles;
