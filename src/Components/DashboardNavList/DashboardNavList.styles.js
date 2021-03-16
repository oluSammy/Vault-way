import { makeStyles } from '@material-ui/core';

const navListStyles =makeStyles((theme) => ({
  navList: {
    margin: '100px 10px 0 10px',
    color: '#6E80A3',

    '@media (max-width: 718px)': {
      margin: '100px 1px 0 1px',
    },
  },
  listItem: {
    marginBottom: '10px'
  },
  listIcon: {
    color: 'inherit',
  },
  listText: {
    fontSize: '15px',
    fontWeight: 500,
  },
  activeNavLink: {
    background: '#F4FFF8',
    boxShadow: '0px 3px 19px rgba(3, 104, 44, 0.1)',
    borderRadius: '8px',
    color: theme.palette.primary.main
  },
}));

export default navListStyles;
