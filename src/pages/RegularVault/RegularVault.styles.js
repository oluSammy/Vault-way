import { makeStyles } from '@material-ui/core';

const regularVaultStyles = makeStyles((theme) => ({
  root: {
    minHeight: '85vh',
    paddingTop: '40px',
    paddingRight: '50px',
    position: 'relative',
  },
  regularTopTop: {
    display: 'grid',
    gridTemplateColumns: '.1fr 1fr',
    alignItems: 'center',
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
