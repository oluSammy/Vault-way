import { makeStyles } from '@material-ui/core';

const broadcastStyles = makeStyles(theme => ({
  indicator: {
    backgroundColor: 'white !important',
    display: 'none !important',
    opacity: '0 !important',
  },
  tab: {
    color: '#ADB8CD',
    fontSize: 16,
    fontWeight: 'bold',
    padding: '10px 10px',
    minWidth: '120px !important',

    '@media (max-width: 498px)': {
      fontSize: 12,
      minWidth: '60px !important',
    },

    '@media (max-width: 422px)': {
      fontSize: 10,
      minWidth: '40px !important',
      minHeight: '15px !important',
    },

    '@media (max-width: 357px)': {
      fontSize: 8,
      minWidth: '30px !important',
      minHeight: '8px !important',
    },
  },
  activeTab: {
    backgroundColor: '#ADB8CD',
    borderRadius: 10,
    color: '#ffffff',
    fontWeight: 700,
  },
  inactiveTab: {

  }
}));

export default broadcastStyles;