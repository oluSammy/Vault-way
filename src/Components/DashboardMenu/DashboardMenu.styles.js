import { makeStyles } from '@material-ui/core';

const dashboardMenuStyles = makeStyles(theme => ({
  menuContainer: {
    marginRight: '25px',

    '@media (max-width: 750px)': {
      marginRight: '15px',
    },
  },
  quickBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#FFFFFF',
    padding: '12px 15px',
    width: '90%',
    borderRadius: '10px',
    cursor: 'pointer',

    '@media (max-width: 482px)': {
      padding: '8px 7px',
    },
  },
  quickBoxText: {
    marginRight: 'auto',
    fontSize: '12px',
    color: '#6E80A3',

    '@media (max-width: 1007px)': {
      fontSize: '12px',
    },

    '@media (max-width: 750px)': {
      fontSize: '10px',
    },
  },
  arrowIcon: {
    color: theme.palette.primary.main,
  },
  arrowIconGreen: {

    '@media (max-width: 482px)': {
      fontSize: '7px',
    },
  }
}));

export default dashboardMenuStyles;
