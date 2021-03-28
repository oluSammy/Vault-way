import { makeStyles } from '@material-ui/core';

const fundReasonStyles = makeStyles(theme => ({
  root: {

  },
  title: {
    color: '#6E80A3',
    fontSize: 35,

    '@media (max-width: 425px)': {
      fontSize: 25,
    },
  },
  titleSpan: {
    color: '#AEBEC7',
  },
  inputField:{
    border: '1px solid #E3EDF3',
    width: 'max-content',
    padding: '30px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 40,

    '@media (max-width: 425px)': {
      padding: 20,
      width: '105%',
    },
  },
  inputLabel: {
    fontSize: 14,
    color: '#AEBEC7',
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    border: 'none',
    outline: 'none',
    fontSize: 30,
    color: '#AEBEC7',

    '@media (max-width: 425px)': {
      fontSize: 20,
    },

    '&::placeholder': {
      fontSize: 30,
      color: '#AEBEC7',

      '@media (max-width: 425px)': {
        fontSize: 20,
      },
    }
  },

}));

export default fundReasonStyles;