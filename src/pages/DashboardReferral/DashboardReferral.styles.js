import { makeStyles } from '@material-ui/core';

const dashboardReferralStyles = makeStyles((theme) => ({
  root: {
    minHeight: '82vh',
    marginTop: '50px',
    marginLeft: '30px',

    '@media (max-width: 450px)': {
      marginLeft: '15px',
      marginTop: '35px',
    },
  },
  referralHeading: {
    color: '#ADB8CD',
    fontSize: '35px',
    lineHeight: '40px',
    fontWeight: 700,
    marginBottom: '30px',

    '@media (max-width: 450px)': {
      fontSize: '25px',
      lineHeight: '30px',
    },

    '@media (max-width: 354px)': {
      fontSize: '20px',
    },
  },
  referralSubHeading: {
    color: '#6E80A3',
    fontSize: '24px',
    marginBottom: '50px',

    '@media (max-width: 450px)': {
      fontSize: '18px',
    },

    '@media (max-width: 354px)': {
      fontSize: '16px',
    },
  },
  copyBox: {
    backgroundColor:
      'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    border: '1px solid #E3EDF3',
    width: 'max-content',
    borderRadius: '20px',
    padding: '20px 20px',
    cursor: 'pointer',
  },
  copyBoxTitle: {
    color: '#ADB8CD',
    fontSize: '14px',
    fontWeight: 'bold',
    margin: 0,
  },
  copyBoxAction: {
    display: 'flex',
    alignItems: 'center',
  },
  copyBoxCode: {
    marginRight: '120px',
    fontSize: '30px',
    color: '#6E80A3',

    '@media (max-width: 450px)': {
      fontSize: '23px',
    },

    '@media (max-width: 384px)': {
      marginRight: '80px',
      fontSize: '20px',
    },
  },
  share: {
    marginTop: '30px',
  },
  shareTitle: {
    color: '#ADB8CD',
    fontSize: '14px',
  },
  shareBtn: {
    display: 'flex',
    alignItems: 'center',
    width: 'max-content',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '16px',
    marginRight: '20px',

    '@media (max-width: 636px)': {
      marginBottom: '10px',
    },
    '@media (max-width: 4126px)': {
      padding: '8px 15px',
    },
  },
  shareText: {
    margin: 0,
    marginLeft: '8px',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '1.5px',

    '@media (max-width: 636px)': {
      fontSize: '12px',
    },
  },
  shareBtnBox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: '20px',
  },
}));

export default dashboardReferralStyles;
