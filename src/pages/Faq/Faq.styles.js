import { makeStyles } from '@material-ui/core';
import bg from '../../assets/img/BG.png';

const faqStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  faqHeader: {
    minHeight: '65vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faqHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 800,
    fontSize: '50px',
    letterSpacing: '1.7px',
    marginBottom: '40px',
    textAlign: 'center',

    '@media (max-width: 716px)': {
      fontSize: '35px',
    },

    '@media (max-width: 408px)': {
      fontSize: '30px',
    },

    '@media (max-width: 360px)': {
      fontSize: '25px',
    },
  },
  faqForm: {
    display: 'flex',
    width: '50%',

    '@media (max-width: 660px)': {
      width: '60%',
    },

    '@media (max-width: 528px)': {
      width: '70%',
    },

    '@media (max-width: 398px)': {
      width: '80%',
    },
  },
  faqSearch: {
    width: '100%',
    padding: '15px 10px',
    border: '1px solid #D8D8D8',
    background: 'rgba(236, 242, 254, 0.83)',

    '@media (max-width: 360px)': {
      width: '120%',
      padding: '10px 10px',
    },
  },
  faqSubmit: {
    backgroundColor: 'transparent',
    border: 'none',
    marginLeft: '-40px',
    cursor: 'pointer',
  },
  faqSearchIcon: {
    color: '#084622',
  },
  tabBox: {
    marginTop: '40px',
  },
  tabContainer: {
    width: '100%',
    marginBottom: '40px',

    '@media (max-width: 504px)': {
      marginBottom: '30px',
    },

    '@media (max-width: 392px)': {
      marginBottom: '15px',
    },
  },
  tabPanel: {
    paddingBottom: '260px',

    '@media (max-width: 604px)': {
      padding: '0 20px 140px 20px'
    },
  },
  activeTab: {
    backgroundColor: theme.palette.primary.main,
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    fontFamily: 'Montserrat',
    padding: '2px 10px',
    borderRadius: '15px',
    transition: 'all .4s',

    '@media (max-width: 904px)': {
      minWidth: '100px',
      minHeight: '40px'
    },

    '@media (max-width: 542px)': {
      minWidth: '90px',
      minHeight: '30px',
      borderRadius: '9px',
      fontSize: '10px'
    },

    '@media (max-width: 482px)': {
      minWidth: '70px',
      minHeight: '30px',
    },

    '@media (max-width: 400px)': {
      minWidth: '40px',
      minHeight: '20px',
      fontSize: '8px'
    },
  },
  inactiveTab: {
    textTransform: 'capitalize',
    color: '#6E80A3',
    fontFamily: 'Montserrat',
    transition: 'all .4s',

    '@media (max-width: 904px)': {
      minWidth: '100px',
      minHeight: '40px'
    },

    '@media (max-width: 542px)': {
      minWidth: '90px',
      minHeight: '30px',
      borderRadius: '9px',
      fontSize: '10px'
    },

    '@media (max-width: 482px)': {
      minWidth: '70px',
      minHeight: '30px',
    },

    '@media (max-width: 400px)': {
      minWidth: '40px',
      minHeight: '20px',
      fontSize: '8px'
    },
  },
  indicator: {
    backgroundColor: 'transparent',
  },
}));

export default faqStyles;