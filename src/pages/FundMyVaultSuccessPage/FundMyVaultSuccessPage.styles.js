
import { makeStyles } from '@material-ui/core';
const fundSuccessStyles = makeStyles(theme => ({
  root: {
    minHeight: '85vh',
    paddingTop: '40px',
    paddingBottom: 70
  },
  type: {
    margin: 0,
    color: '#6E80A3',
    fontSize: 14,
    fontWeight: 600
  },
  title: {
    margin: 0,
    marginTop: 40,
    fontSize: 35,
    color: '#6E80A3',
    lineHeight: '43px',
    marginBottom: 40,

    '@media (max-width: 1040px)': {
      fontSize: 25,
      lineHeight: '30px',
    },

    '@media (max-width: 516px)': {
      fontSize: 18,
      lineHeight: '25px',
      marginTop: 25
    },

    '@media (max-width: 381px)': {
      fontSize: 16,
      lineHeight: '20px',
      marginTop: 20
    },
  },
  titleSpan: {
    color: '#ADB8CD'
  },
  timerContainer: {
    background: '#ffffff',
    width: '450px',
    padding: '30px 40px',
    borderRadius: '20px',

    '@media (max-width: 516px)': {
      width: '350px',
      padding: '20px 30px',
    },

    '@media (max-width: 381px)': {
      width: '320px',
      padding: '20px 20px',
    },

    '@media (max-width: 344px)': {
      width: '300px',
      padding: '20px 10px',
    },
  },
  timerTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  timerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  timerStatus: {
    margin: 0,
    color: '#ADB8CD'
  },
  timerNumber: {
    margin: 0,
    color: '#6E80A3',
    fontSize: 50,
    fontWeight: 'bold',

    '@media (max-width: 516px)': {
      fontSize: 20,
    },
  },
  timerText: {
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    color: '#ADB8CD',

    '@media (max-width: 516px)': {
      fontSize: 12,
    },
  },
  copy: {
    marginTop: 30,
    marginBottom: '70px'
  },
  copyBox: {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    background: '#ffffff',
    width: 'max-content',
    padding: '12px 17px',
    borderRadius: 20,
    cursor: 'pointer',
  },
  copyLink: {
    margin: 0,
    marginRight: 70,

    '@media (max-width: 381px)': {
      marginRight: 40,
    },
  }
}));

export default fundSuccessStyles;