import { makeStyles } from '@material-ui/core';

const addAdminStyles = makeStyles((theme) => ({
  root: {},
  form: {
    width: '90%',
  },
  formGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 30,
    marginBottom: 20,
  },
  formInput: {
    display: 'flex',
    flexDirection: 'column',
  },
  formLabel: {
    color: '#6E80A3',
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 10,
  },
  inputTxt: {
    background: '#ffffff',
    border: 'none',
    padding: '15px 20px',
    borderRadius: 15,
    fontSize: 16,
    color: '#ADB8CD',
    fontWeight: 600,
  },
  btn: {
    marginTop: 30
  }
}));

export default addAdminStyles;
