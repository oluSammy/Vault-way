import { makeStyles } from '@material-ui/core';

const savingsReasonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 35,
    fontWeight: 700,
    color: '#6E80A3',
    margin: 0,
    lineHeight: '43px',
  },
  interestBox: {
    color: '#ADB8CD',
  },
  interestTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 0,
  },
  interestSubTitle: {
    margin: 0,
    color: '#6E80A3',
    textAlign: 'right',
  },
  interestContainer: {
    marginBottom: '15px',
    fontSize: 14,
  },
}));

export default savingsReasonStyles;
