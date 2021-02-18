import { makeStyles } from '@material-ui/core';
import bg from '../../assets/img/BG.png';

const plansStyles = makeStyles((theme) => ({
  root: {
    scrollBehavior: 'smooth',
    position: 'relative',
  },
  hero: {
    minHeight: '70vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Montserrat',
  },

  heroTextContainer: {
    '@media (max-width: 600px)': {
      width: '80%',
      marginTop: '30px',
    },
  },
  heroHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 800,
    fontSize: '38px',
    color: '#121E31',
    marginBottom: '30px',

    '@media (max-width: 756px)': {
      fontSize: '25px',
      marginBottom: '20px',
    },
  },
  heroSubHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '18px',
    color: '#6E80A3',
    marginBottom: '20px',

    '@media (max-width: 756px)': {
      fontSize: '13px',
      marginBottom: '15px',
    },
  },
  vaultImg: {
    width: '70%',

    '@media (max-width: 600px)': {
      width: '40%',
      marginLeft: '15%',
    },

    '@media (max-width: 428px)': {
      marginLeft: '22%',
    },
  },

  safe: {
    minHeight: '55vh',
  },
  safeTxtBox: {
    width: '70%',
  },
  safeImgBox: {
    backgroundColor: '#E2FEEB',
    height: '210px',
    width: '210px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',

    '@media (max-width: 959px)': {
      height: '160px',
      width: '160px',
    },

    '@media (max-width: 796px)': {
      height: '140px',
      width: '140px',
    },

    '@media (max-width: 372px)': {
      height: '90px',
      width: '9px',
    },

    '@media (max-width: 677px)': {
      height: '110px',
      width: '110px',
    },

    '@media (max-width: 344px)': {
      height: '80px',
      width: '80px',
    },
  },
  safeImg: {
    width: '40%',
  },
  safeHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 800,
    fontSize: '24px',
    color: '#121E31',
    marginBottom: '10px',

    '@media (max-width: 548px)': {
      fontSize: '18px',
    },

    '@media (max-width: 344px)': {
      fontSize: '15px',
    },
  },
  safeSubHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '12px',
    color: '#6E80A3',

    '@media (max-width: 548px)': {
      fontSize: '10px',
    },

    '@media (max-width: 344px)': {
      fontSize: '9px',
    },
  },
  lastSafe: {
    padding: '70px 0 250px 0',

    '@media (max-width: 636px)': {
      padding: '70px 0 200px 0',
    },

    '@media (max-width: 442px)': {
      padding: '70px 0 140px 0',
    },

    '@media (max-width: 364px)': {
      padding: '70px 0 120px 0',
    },
  }
}));

export default plansStyles;
