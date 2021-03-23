import { makeStyles } from '@material-ui/core';

const regularVaultStyles = makeStyles((theme) => ({
  root: {
    minHeight: '85vh',
    paddingTop: '40px',
    paddingRight: '50px',
    position: 'relative',

    '@media (max-width: 609px)': {
      paddingRight: '30px',
    },

    '@media (max-width: 466px)': {
      paddingRight: '20px',
    },
  },
  regularTopTop: {
    display: 'grid',
    gridTemplateColumns: '.1fr 1fr',
    alignItems: 'center',

    '@media (max-width: 783px)': {
      gridTemplateColumns: '.1.5fr 1fr',
    },
    '@media (max-width: 692px)': {
      gridTemplateColumns: '.2fr 1fr',
    },

    '@media (max-width: 411px)': {
      gridTemplateColumns: '.3fr 1fr',
    },

    '@media (max-width: 363px)': {
      gridTemplateColumns: '.3.5fr 1fr',
    },

  },
  arrowBackBox: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    width: 50,
    background: '#ffffff',
    justifyContent: 'center',
    borderRadius: '50%',
    color: '#00A343',
    boxShadow: '0px 0px 24px rgba(0, 81, 33, 0.16)',
    cursor: 'pointer',
    // marginRight: '100px'
  },
  regularTitle: {
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    color: '#6E80A3',
    marginTop: '20px',
  },
  regularContent: {
    marginTop: '40px'
  }
}));

export default regularVaultStyles;
