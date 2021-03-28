import { makeStyles } from '@material-ui/core';

const fundFinishStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '60px',
  },
  fundContentBox: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 30
  },
  fundTitle: {
    flexBasis: '250px',
    margin: 0,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6E80A3',
  },
  funSubTitle: {
    margin: 0,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ADB8CD'
  },
  funSubTitleSpan: {
    color: '#6E80A3'
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

export default fundFinishStyles;