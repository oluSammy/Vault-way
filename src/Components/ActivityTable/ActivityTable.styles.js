import { makeStyles } from '@material-ui/core';
const activityTableStyles = makeStyles((theme) => ({
  root: {},
  container: {
    overflowX: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '0 0 20px 20px',
    paddingBottom: 20,
  },
  table: {
    minWidth: 450,
    overflow: 'scroll',
  },
  tableBody: {
    background: '#fff',
  },
  tableCell: {
    color: '#ADB8CD',
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center',
  },
  iconBox: {
    height: 34,
    width: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    background: '#00A343',
    borderRadius: '50%',
    marginRight: 15,
  },
  icon: {
    fontSize: 15,
  },
  nameTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6E80A3',
  },
  daysTxt: {
    color: '#ADB8CD',
    fontSize: 13,
    fontWeight: 500,
  },
  tableArrow: {
    color: '#ADB8CD',
  },
  tableCellTxt: {
    color: '#00A343',
    fontSize: 15,
  },
  pagination: {
    padding: '40px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAll: {
    color: '#6E80A3',
    fontSize: 14,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default activityTableStyles;
