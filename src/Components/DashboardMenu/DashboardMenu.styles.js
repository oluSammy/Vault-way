import { makeStyles } from '@material-ui/core';

const dashboardMenuStyles = makeStyles(theme => ({
  menuContainer: {
    marginRight: '25px'
  },
  quickBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#EAF1F5',
    padding: '12px 15px',
    width: '250px',
    margin: '0 20px',
    borderRadius: '10px',
    cursor: 'pointer'
  },
  quickBoxText: {
    marginRight: 'auto',
    fontSize: '14px'
  },
  arrowIcon: {
    color: theme.palette.primary.main,
    fontSize: '20px'
  }
}));

export default dashboardMenuStyles;
