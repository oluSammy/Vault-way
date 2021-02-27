import { makeStyles } from '@material-ui/core';

const signupStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#084622',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  iconBox: {
    margin: '30px auto 30px 10%',

    '@media (max-width: 467px)': {
      margin: '20px auto 20px 10%',
    },
  },
  vaultWayIcon: {
    '@media (max-width: 467px)': {
      width: '20%'
    },
  },
  signUpContent: {
    position: 'relative',
  },
  signUpTxtBox: {
    width: '80%',
    margin: '0 auto',

    '@media (max-width: 600px)': {
      paddingBottom: '20px'
    },
  },
  form: {
    // backgroundImage: `url(${pattern})`,
    // minHeight: '100vh'
  },
  pattern: {
    // width: '200%',
    position: 'absolute',
    transform: 'rotate(-15deg)',
    top: '10%',
    right: '0',
    // marginLeft: '-30%'
  },
  signupHeading: {
    color: '#E8EDEA',
    fontWeight: 800,
    fontSize: '40px',
    lineHeight: '40px',
    letterSpacing: '1px',
    marginBottom: '20px',

    '@media (max-width: 658px)': {
      fontSize: '30px'
    },

    '@media (max-width: 389px)': {
      fontSize: '25px',
      marginBottom: '10px',
    },
  },
  signupTxt: {
    fontWeight: 400,
    fontSize: '14px',
    color: '#F9F9F9',
    marginBottom: '15px',

    '@media (max-width: 658px)': {
      fontSize: '13px',
      textAlign: 'justify'
    },

    '@media (max-width: 340px)': {
      fontSize: '11px',
      textAlign: 'justify'
    },
  },
  signupImg: {
    width: '18%',
    display: 'block',
  },
  signupCeo: {
    color: '#FFFFFF',
    fontWeight: 400,
    fontSize: '11px',
    marginTop: '11px',
  },
  formContainer: {
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    width: '80%',
    margin: '0 auto',
    padding: '50px 60px',
    marginBottom: '20px',
    borderRadius: '15px',

    '@media (max-width: 798px)': {
      padding: '40px 40px',
      width: '90%'
    },

    '@media (max-width: 624px)': {
      padding: '30px 20px',
      width: '90%',
    },

    '@media (max-width: 600px)': {
      padding: '50px 60px',
      width: '80%'
    },

    '@media (max-width: 467px)': {
      padding: '30px 20px',
      width: '90%',
    },
  },
  formHeading: {
    color: '#121E31',
    fontWeight: 800,
    fontSize: '25px',
    textAlign: 'center',
    marginBottom: '5px',

    '@media (max-width: 467px)': {
      fontSize: '22px',
    },
  },
  formSubHeading: {
    color: '#7A869A',
    fontWeight: 400,
    fontSize: '15px',
    textAlign: 'center',
    marginBottom: '35px',

    '@media (max-width: 467px)': {
      fontSize: '13px',
    },
  },
  label: {
    marginBottom: '-17px',
    color: '#002251',
    fontWeight: 700,
    fontSize: '12px',

    '@media (max-width: 467px)': {
      marginBottom: '-12px',
    },
  },
  formInput: {
    width: '100%',
  },
  formIcon: {
    fontSize: '17px',
    color: theme.palette.primary.main,
  },
  formTerms: {
    marginTop: '7px',
    color: '#B2BCCA',
    fontWeight: 600,
    fontSize: '13px',
    marginBottom: '10px',
    opacity: '.99'
  },
  formLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  formBtn: {
    width: '100%',
    textTransform: 'capitalize',
    fontFamily: 'Sans-serif',
    fontWeight: 700,
    borderRadius: '10px',
    marginBottom: '30px',
    marginTop: '20px',
    boxShadow: 'none',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  already: {
    color: '#7A869A',
    fontWeight: 400,
    fontSize: '14px',
    textAlign: 'center',
  },
  signinLink: {
    color: theme.palette.primary.main,
  },
  help: {
    textAlign: 'center',
    marginTop: '30px',
    color: '#7A869A',
    fontWeight: 400,
    fontSize: '14px',
    opacity: '.7'
  },
  helpLink: {
    color: theme.palette.primary.main,
  }
}));

export default signupStyles;
