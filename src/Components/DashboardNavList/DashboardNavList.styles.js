import { makeStyles } from '@material-ui/core';

const navListStyles =makeStyles((theme) => ({
  navList: {
    marginTop: '100px',
    color: '#6E80A3',
  },
  listItem: {
    marginBottom: '10px'
  },
  listIcon: {
    color: '#6E80A3',
  },
  listText: {
    fontSize: '15px',
    fontWeight: 500,
  },
  activeNavLink: {
    background: '#F4FFF8',
    boxShadow: '0px 3px 19px rgba(3, 104, 44, 0.1)',
    borderRadius: '8px',
  },
}));

export default navListStyles;
