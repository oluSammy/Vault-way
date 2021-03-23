import { makeStyles } from '@material-ui/core';

const savingsReasonStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '50px',
  },
  formTop: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 0',

    '@media (max-width: 688px)': {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
  },
  formInput: {
    flexGrow: 1,
    marginRight: 30,
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    border: '1px solid #E3EDF3',
    fontSize: 16,
    color: '#AEBEC7',
    fontWeight: 'bold',
    padding: '15px 20px',
    borderRadius: '25px',
    outline: 'none',

    '&::placeholder': {
      color: '#AEBEC7',
    },

    '@media (max-width: 688px)': {
      width: '100%',
      marginBottom: '30px'
    },
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

    '@media (max-width: 466px)': {
      marginRight: '-30px'
    },
  },
  option: {
    background: '#ffffff',
    width: 220,
    padding: '25px 15px',
    borderRadius: 20,
    cursor: 'pointer',
    marginRight: 30,
    marginBottom: 20,

    '@media (max-width: 824px)': {
      width: 200
    },

    '@media (max-width: 717px)': {
      width: 180
    },

    '@media (max-width: 424px)': {
      width: 160,
      marginRight: 20,
    },

    '@media (max-width: 365px)': {
      width: 150,
      marginRight: 15,
    },

    '@media (max-width: 335px)': {
      width: 140,
      marginRight: 15,
    },
  },
  optionsLabel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },

  optionsIconBox: {
    width: '100px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@media (max-width: 717px)': {
      width: '80px',
      height: '60px',
    },
  },
  optionsLabelIcon: {
    height: '100%',
    width: '100%',
    display: 'block',
    objectFit: 'center'
  },
  optionsLabelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6E80A3',
    margin: 0,
    marginTop: 20,

    '@media (max-width: 824px)': {
      fontSize: 16
    },

    '@media (max-width: 717px)': {
      fontSize: 14
    },
  },
  optionsInput: {
    display: 'none',
  },
  activeInput: {
    border: '1px solid #00A343'
  }
}));

export default savingsReasonStyles;
