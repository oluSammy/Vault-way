import { makeStyles } from '@material-ui/core';

const cardBankStyles = makeStyles((theme) => ({
  activeTab: {
    backgroundColor: '#ffffff',
    color: '#6E80A3 !important',
    textTransform: 'capitalize',
    padding: '35px 50px',
    borderRadius: '15px',
    transition: 'all .4s',
    fontSize: '12px',
    fontWeight: 700,
    marginRight: '30px',
    border: '1px solid #00A343',
  },
  inactiveTab: {
    textTransform: 'capitalize',
    backgroundColor: '#ffffff',
    color: '#6E80A3 !important',
    padding: '35px 50px',
    borderRadius: '15px',
    transition: 'all .4s',
    fontSize: '12px',
    fontWeight: 700,
    marginRight: '30px',
  },
  indicator: {
    backgroundColor: 'white !important',
    display: 'none !important',
    opacity: '0 !important',
  },
  tabIcon: {
    fontSize: '45px',
  },
  rotatedIcon: {
    transform: 'rotate(-45deg)',
  },
  activeIcon: {
    color: '#00A343',
  },
  dashedLine: {
    borderTop: '1px dashed #AAAAAA',
    marginTop: '50px',
    width: '70%',
    marginLeft: 0

  }
}));

export default cardBankStyles;
