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
    width: '250px',
    borderRadius: '10px',
    cursor: 'pointer',

    '@media (max-width: 1007px)': {
      minWidth: '200px',
    },
    '@media (max-width: 750px)': {
      width: '160px',
    },
  },
  quickBoxText: {
    marginRight: 'auto',
    fontSize: '14px',

    '@media (max-width: 1007px)': {
      fontSize: '12px',
    },

    '@media (max-width: 750px)': {
      fontSize: '10px',
    },
  },
  arrowIcon: {
    color: theme.palette.primary.main,
    fontSize: '20px'
  }
}));

export default dashboardMenuStyles;
