import { makeStyles } from '@material-ui/core';
import bg from '../../assets/img/BG.png';

const aboutStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  lifestyle: {
    minHeight: '60vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Montserrat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '@media (max-width: 383px)': {
      minHeight: '50vh',
    },
  },
  lifestyleHeading: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '38px',
    lineHeight: '50px',
    color: '#121E31',
    marginBottom: '30px',
    textAlign: 'center',
    wordSpacing: '4px',

    '@media (max-width: 585px)': {
      fontSize: '30px',
      lineHeight: '35px',
      wordSpacing: '3px',
      marginBottom: '20px',
    },

    '@media (max-width: 383px)': {
      fontSize: '25px',
      lineHeight: '30px',
      wordSpacing: '3px',
      marginBottom: '20px',
    },
  },
  span: {
    color: theme.palette.primary.main,
  },
  lifestyleSub: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#6E80A3',
    textAlign: 'center',

    '@media (max-width: 585px)': {
      fontSize: '12px',
      lineHeight: '20px',
    },

    '@media (max-width: 383px)': {
      fontSize: '11px',
      lineHeight: '18px',
    },
  },
  company: {
    padding: '60px 80px',
    backgroundColor: '#F2F2F2',
    paddingBottom: '190px',

    '@media (max-width: 952px)': {
      padding: '60px 40px',
      paddingBottom: '140px',
    },

    '@media (max-width: 808px)': {
      padding: '60px 10px',
      paddingBottom: '120px',
    },

    '@media (max-width: 736px)': {
      padding: '60px 2px',
      paddingBottom: '100px',
    },
  },
  companyBox: {
    width: '85%',

    '@media (max-width: 1004px)': {
      width: '95%',
    },

    '@media (max-width: 952px)': {
      width: '100%',
    },

    '@media (max-width: 600px)': {
      width: '70%',
      margin: '0 auto',
      display: 'flex',
      marginBottom: '25px',
    },

    '@media (max-width: 500px)': {
      width: '80%',
      margin: '0 auto',
      display: 'flex',
      marginBottom: '25px',
    },

    '@media (max-width: 396px)': {
      width: '90%',
    },
  },
  companyIconBox: {
    width: '70px',
    height: '70px',
    backgroundColor: '#E2FEEB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
    marginBottom: '20px',

    '@media (max-width: 600px)': {
      width: '60%',
      marginRight: '25px',
    },

    '@media (max-width: 436px)': {
      width: '75%',
      marginRight: '25px',
    },

    '@media (max-width: 352px)': {
      width: '90%',
    },

    '@media (max-width: 324px)': {
      width: '100%',
    },
  },
  companyIcon: {
    width: '55%',

    '@media (max-width: 352px)': {
      width: '40%',
    },
  },
  companyHeading: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#121E31',
    marginBottom: '25px',
  },
  companyTxt: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6E80A3',

    '@media (max-width: 736px)': {
      fontSize: '12px',
    },
  },

  join: {
    // marginBottom: '20vh',
  },
  joinImgContainer: {
    height: '75vh',
  },
  joinImg: {
    height: '100%',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
  },
  joinContainer: {
    width: '45%',
    '@media (max-width: 655px)': {
      marginTop: '35px',
    },

    '@media (max-width: 950px)': {
      width: '55%',
    },

    '@media (max-width: 832px)': {
      width: '75%',
    },
  },
  joinHeading: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '28px',
    lineHeight: '24px',
    color: '#121E31',
    marginBottom: '25px',

    '@media (max-width: 655px)': {
      fontSize: '20px',
      lineHeight: '20px',
      marginBottom: '18px',
    },
  },
  joinTxt: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#6E80A3',
    marginBottom: '25px',

    '@media (max-width: 655px)': {
      fontSize: '12px',
      lineHeight: '20px',
      marginBottom: '20px',
    },
  },
  latest: {
    padding: '100px 90px',
    paddingBottom: '300px',

    '@media (max-width: 1252px)': {
      padding: '100px 50px 300px 50px',
    },

    '@media (max-width: 1174px)': {
      padding: '100px 50px 300px 50px',
    },

    '@media (max-width: 960px)': {
      padding: '100px 50px 200px 50px',
    },

    '@media (max-width: 452px)': {
      padding: '100px 0px 120px 0px',
    },
  },
  latestHeading: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '26px',
    lineHeight: '24px',
    marginBottom: '45px',
    textAlign: 'center',
    color: '#121E31',
  },
  Card: {
    boxShadow: '0px 10px 25px 3px rgba(209, 225, 214, 0.33)',
    marginLeft: '0',
  },
  cardContainer: {
  '@media (max-width: 596px)': {
      marginLeft: '8%',
    },
  },
  CardTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#121E31',
    marginBottom: '10px',
  },
  CardSubtitle: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#6E80A3',
    marginBottom: '10px',
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
  },
  CardDate: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '18px',
    color: '#6E80A3',
  },
  cardDot: {
    margin: '-15px 8px 0 8px',
    fontSize: '30px',
    fontWeight: '800',
  },
}));

export default aboutStyles;
