import { makeStyles } from '@material-ui/core';

const tyroFreqStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '70px'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',

    '@media (max-width: 361px)': {
      paddingLeft: 20
  },
  },
  option: {
    background: '#ffffff',
    marginRight: 25,
    width: 140,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '25px',
    cursor: 'pointer',
    marginTop: '20px'
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  input: {
    display: 'none',
  },
  iconBox: {
    height: '25px',
    width: '25px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  optionText: {
    color: '#6E80A3',
    fontSize: 16,
    fontWeight: 'bold',
    margin: '12px 0'
  },
  activeLabel: {
    background: '#6E80A3',
  },
  activeIcon: {
    background: '#ffffff',
  },
  activeText: {
    color: '#ffffff',
  }
}));

export default tyroFreqStyles;