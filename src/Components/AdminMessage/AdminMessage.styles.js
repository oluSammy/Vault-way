import { makeStyles } from '@material-ui/core';

const adminMessageStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20
  },
  messageBox: {
    background: '#ffffff',
    padding: '25px 35px',
    borderRadius: 20,

    '@media (max-width: 483px)': {
      padding: '20px 15px',
    },
  },
  messageTop: {
    display: 'flex',
    alignItems: 'center'
  },
  messageOpen: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  messageTitle: {
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    color: '#6E80A3'
  },
  messageDate: {
    margin: 0,
    color: '#ADB8CD',
    fontSize: 13,
    fontWeight: 500,
    marginLeft: 20
  },
  open: {
    margin: 0,
    color: '#ADB8CD',
    fontSize: 13,
    fontWeight: 500,
    marginRight: 20,
  },
  messageSeen: {
    marginRight: 20,
  },
  messageDelete: {
    cursor: 'pointer'
  },
  messageTxt: {
    color: '#6E80A3',
    fontSize: 13,
    fontWeight: 'normal',
    textAlign: 'justify'
  }
}));

export default adminMessageStyles;
