import { makeStyles } from '@material-ui/core';

const regularFinishStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '50px',
  },
  finishHeading: {
    fontSize: 35,
    color: '#6E80A3',
    fontWeight: 'bold',

    '@media (max-width: 442px)': {
      fontSize: 25,
    },
  },
  finishContent: {
    marginBottom: 20
  },
  finishBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  finishTitle: {
    margin: 0,
    flexBasis: '20%',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6E80A3',

    '@media (max-width: 701px)': {
      flexBasis: '40%',
    },

  },
  finishSub: {
    margin: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ADB8CD',

    '@media (max-width: 417px)': {
      fontSize: 20,
    },
  },
  finishBtnBox: {
    marginTop: 50
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  finishEmoji: {
    marginBottom: '15px'
  }
}));

export default regularFinishStyles;