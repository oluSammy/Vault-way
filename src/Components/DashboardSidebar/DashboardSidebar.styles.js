import { makeStyles } from '@material-ui/core';

const dashboardSidebarStyles = makeStyles(theme => ({
  root: {
    padding: '0 20px'
  },
  imgContainer: {
    margin: '30px 0 30px 20px'
  },
  logo: {
    width: '30%'
  },
  name: {
    color: '#6E80A3',
    fontSize: '16px',
    margin: 0
  },
  switch: {
    marginLeft: '-15px'
  },
  negMargin: {
    marginBottom: '-80px'
  }
}));

export default dashboardSidebarStyles;