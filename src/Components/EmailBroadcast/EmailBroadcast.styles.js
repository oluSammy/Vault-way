import { makeStyles } from '@material-ui/core';

const broadcastEmailStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 100,
  },
  messageBox: {
    border: '1px solid #E3EDF3',
    borderRadius: 20,
    // padding: '30px 0',
    marginBottom: 0,
  },
  formInput: {
    padding: '20px 30px',

    '@media (max-width: 548px)': {
      padding: '20px 10px',
    },
  },
  labelInput: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#AEBEC7',
    display: 'block',
    whiteSpace: 'nowrap',
    marginRight: 30,

    '@media (max-width: 548px)': {
      marginRight: 10,
      fontSize: 11,
    },
  },
  formInputBorder: {
    borderBottom: '1px solid #E3EDF3',
  },
  inputText: {
    width: '100%',
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    border: 'none',
    padding: 10,

    '&:focus': {
      outline: '2px solid #E3EDF3',
    },
  },
  inputBox: {
    display: 'flex',
  },
  fileBox: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 778px)': {
      flexDirection: 'column',
    },
  },
  inputFile: {
    display: 'none',
  },
  fileLabel: {
    display: 'flex',
    cursor: 'pointer',
  },
  importTxt: {
    margin: 0,
    color: '#ADB8CD',
    fontWeight: 500,
    fontSize: 13,
    marginRight: 10,
  },
  fileName: {
    margin: 0,
    color: '#ADB8CD',
    fontSize: 15,
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  sendBtn: {
    marginLeft: 'auto',
    padding: '10px 25px',
    fontWeight: '700',
    borderRadius: 20,
  },
  sendIcon: {
    transform: 'rotate(-40deg)',
    marginLeft: 10,
    color: '#fff'
  },
  historyTxt: {
    color: '#ADB8CD',
    fontSize: 14,
    margin: '20px 0 40px 0',
  },
}));

export default broadcastEmailStyles;
