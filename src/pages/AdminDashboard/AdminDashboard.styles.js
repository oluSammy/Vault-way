import { makeStyles } from '@material-ui/core';

const adminDashboardStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    minHeight: '100vh',
  },
  searchBox: {
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 608px)': {
      // width: '75vw',
      order: 10
    },
  },
  searchInput: {
    padding:'15px 35px',
    marginLeft: -30,
    border: 'none',
    width: 170,
    transition: 'all .5s',

    '&::placeholder': {
      fontSize: 14,
      color: '#737588',
      fontWeight: 'normal'
    },

    '&:focus': {
      width: '50vw',
      outline: '2px solid #737588',
      // borderRadius: 40,

      '@media (max-width: 1042px)': {
        width: '45vw',
      },

      '@media (max-width: 608px)': {
        width: '90vw',
      },
    },
    '@media (max-width: 608px)': {
      width: '70vw',
    },
  },
  SearchIcon: {
    zIndex: 20,
    color: '#979797',
    marginTop: 10
  },
  main: {
    paddingTop: 40,
    paddingRight: 35,

    '@media (max-width: 599px)': {
      paddingRight: 20,
    },
  }
}));

export default adminDashboardStyles;
