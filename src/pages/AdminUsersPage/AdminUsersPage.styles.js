import { makeStyles } from '@material-ui/core';
const adminUsersStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 120
  },
  usersContainer: {
    border: '1px solid #E3EDF3',
    padding: 25,
    borderRadius: 20,
  },
  containerTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  usersHeading: {
    margin: 0,
    fontSize: 14,
    fontWeight: 'normal',
    color: '#6E80A3',
  },
  usersNo: {
    color: '#6E80A3',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 0,
  },
  usersNew: {
    margin: 0,
    fontSize: 12,
    fontWeight: 'normal',
    color: '#6E80A3'
  },
  tableFlex: {
    display: 'flex',
    alignItems: 'center'
  },
  dateIcon: {
    marginLeft: 10
  }
}));

export default adminUsersStyles;
