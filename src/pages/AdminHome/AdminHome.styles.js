import { makeStyles } from '@material-ui/core';
const adminHomeStyles = makeStyles((theme) => ({
  root: {

  },
  overview: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: '20px',
    [theme.breakpoints.up('xl')]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 350px))',
    },
    '@media (max-width: 421px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    },

    '@media (max-width: 557px)': {
      gridGap: '10px',
    },
  },
  overviewBox: {
    padding: 20,
    border: '1px solid #E3EDF3',
    borderRadius: 20,

    '@media (max-width: 557px)': {
      padding: '15px',
    },
  },
  overviewTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,

    '@media (max-width: 745px)': {
      marginBottom: 10,
    },
    '@media (max-width: 391px)': {
      marginBottom: 7
    },
  },
  overviewTxt: {
    margin: 0,
    fontSize: 14,
    color: '#6E80A3',
    fontWeight: 'normal'
  },
  overViewAmount: {
    margin: 0,
    marginBottom: 10
  },
  realMoney: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: '0 4px',

    '@media (max-width: 557px)': {
      fontSize: '20px',
    },

    '@media (max-width: 391px)': {
      fontSize: '17px',
    },
  },
  purple: {
    color: '#5B5A99',
  },
  grey: {
    color: '#6E80A3'
  },
  green: {
    color: '#00A343'
  },
  red: {
    color: '#EF6E4B'
  },
  overviewCurrency: {
    color: '#6E80A3',
    fontSize: 14,
    fontWeight: 'normal'
  },
  overviewSub: {
    color: '#6E80A3',
    fontSize: 12,
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center'
  },
  overviewIcon: {
    color: theme.palette.primary.main,
    marginLeft: 10,
  }
}));

export default adminHomeStyles;
