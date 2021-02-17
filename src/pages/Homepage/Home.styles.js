import { makeStyles } from '@material-ui/core';

const homeStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    scrollBehavior: 'smooth',
    position: 'relative',
  },
  security: {
    backgroundColor: '#F2F2F2',
    padding: '80px 0',
  },
  securityHeading: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '35px',
    lineHeight: '20px',

    '@media (max-width: 774px)': {
      fontSize: '25px',
      lineHeight: '25px',
    },
    '@media (max-width: 483px)': {
      fontSize: '20px',
    },
  },
  securityContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '70px 60px',

    '@media (max-width: 781px)': {
      padding: '70px 20px',
    },

    '@media (max-width: 691px)': {
      flexDirection: 'column',
    },
  },
  securityBox: {
    width: '30%',
    display: 'flex',
    alignItems: 'flex-start',

    '@media (max-width: 1038px)': {
      width: '40%',
    },

    '@media (max-width: 691px)': {
      width: '70%',
      margin: '0 auto',
      marginBottom: '50px',
    },

    '@media (max-width: 484px)': {
      width: '80%',
    },

    '@media (max-width: 417px)': {
      width: '90%',
    },
  },
  secIconBox: {
    marginRight: '20px',
    backgroundColor: '#E2FEEB',
    width: '250px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '14px',
    boxShadow: '0px 15px 40px rgba(0, 163, 67, 0.25)',

    '@media (max-width: 1171px)': {
      width: '350px',
    },

    '@media (max-width: 483px)': {
      width: '270px',
      height: '50px',
    },
  },
  securityIcon: {
    width: '30%',

    '@media (max-width: 483px)': {
      width: '20%',
    },
  },
  securityTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '20px',
    marginBottom: '20px',
  },
  securitySubTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    color: '#6E80A3',
    fontSize: '14px',
  },
  vaultWayTxt: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '20px',
    lineHeight: '20px',
    color: '#6E80A3',
    textTransform: 'uppercase',
    letterSpacing: '.5px',

    '@media (max-width: 580px)': {
      marginTop: '-35px',
    },
  },
  securityFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  secFooterIconBox: {
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@media (max-width: 756px)': {
      width: '40px',
      height: '40px',
    },
  },
  secFooterIcon: {
    width: '70%',

    '@media (max-width: 756px)': {
      width: '60%',
    },
  },
  secFooterTxt: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '25px',
    lineHeight: '20px',
    color: '#6E80A3',
    padding: '0 20px',

    '@media (max-width: 756px)': {
      fontSize: '20px',
      padding: '0 15px',
    },

    '@media (max-width: 580px)': {
      fontSize: '15px',
      padding: '0 5px',
    },
  },
  secFooterSpan: {
    color: theme.palette.primary.main,
  },
  plan: {
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    padding: '60px 0',
  },
  planHeading: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '30px',
    marginBottom: '60px',

    '@media (max-width: 580px)': {
      fontSize: '20px',
    },

    '@media (max-width: 376px)': {
      fontSize: '18px',
    },
  },
  plansImg: {
    width: '60%',

    '@media (max-width: 960px)': {
      width: '40%',
      marginBottom: '20px',
    },
  },
  planBox: {
    display: 'flex',
    width: '60%',
    margin: '0 auto',
    marginBottom: '30px',

    '@media (max-width: 534px)': {
      width: '70%',
    },
    '@media (max-width: 444px)': {
      width: '80%',
    },
    '@media (max-width: 378px)': {
      width: '90%',
    },
  },
  plansIconBox: {
    width: '350px',
    height: '70px',
    marginRight: '25px',
    backgroundColor: '#E2FEEB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
  },
  plansIcon: {
    width: '50%',
  },
  planBoxHeading: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '18px',
    marginBottom: '10px',
  },
  planBoxSub: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '14px',
    color: '#6E80A3',

    '@media (max-width: 444px)': {
      fontSize: '12px',
    },
  },
  smart: {
    backgroundColor: '#F5F7FA',
    padding: '80px 0',

    '@media (max-width: 530px)': {
      padding: '40px 0',
    },
  },
  smartHeading: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: '40px',
    color: '#121E31',
    marginBottom: '20px',

    '@media (max-width: 706px)': {
      fontSize: '30px',
    },

    '@media (max-width: 530px)': {
      fontSize: '20px',
      marginBottom: '5px',
    },

    '@media (max-width: 370px)': {
      fontSize: '16px',
    },
  },
  smartSubTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '18px',
    color: '#6E80A3',
    lineHeight: '30px',
    marginBottom: '40px',

    '@media (max-width: 706px)': {
      fontSize: '15px',
    },

    '@media (max-width: 530px)': {
      fontSize: '10px',
      marginBottom: '20px',
      lineHeight: '20px',
    },

    '@media (max-width: 370px)': {
      fontSize: '8px',
      marginBottom: '10px',
      lineHeight: '15px',
    },
  },
  step: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '30px',
    width: '60%',
    margin: '0 auto',

    '@media (max-width: 400px)': {
      width: '70%',
    },
  },
  number: {
    width: '65px',
    height: '35px',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: '#FFFFFF',
    marginRight: '30px',
  },
  stepTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    color: '#6E80A3',
    fontSize: '16px',
    marginBottom: '10px',
  },
  stepSubTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#6E80A3',
    fontSize: '10px',
    lineHeight: '20px',
  },
  smartImg: {
    width: '70%',

    '@media (max-width: 998px)': {
      marginLeft: '10%',
    },

    '@media (max-width: 544px)': {
      marginLeft: '16%',
    },
  },
  stories: {
    // backgroundImage: `url(${storiesBg})`,
    // height: '100vh',
    // backgroundSize: 'cover',
    // backgroundPosition: 'bottom',
    // backgroundRepeat: 'repeat',
    backgroundColor: '#ffffff',

    padding: '60px 10px',
    paddingBottom: '300px',

    '@media (max-width: 812px)': {
      paddingBottom: '200px',
    },

    '@media (max-width: 574px)': {
      paddingBottom: '150px',
    },

    '@media (max-width: 400px)': {
      paddingBottom: '100px',
    },
  },
  storiesHeading: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    color: '#121E31',
    fontSize: '30px',
    marginBottom: '40px',

    '@media (max-width: 494px)': {
      fontSize: '20px',
    },
  },
  story: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 10px 25px 3px rgba(209, 225, 214, 0.33)',
    padding: '40px 20px',
    display: 'flex',
    position: 'relative',
    borderRadius: '13px',

    '@media (max-width: 392px)': {
      padding: '20px 10px',
    },
  },
  storyBtn: {
    textAlign: 'center',
    marginTop: '25px',
  },
  StoryIcon: {
    position: 'absolute',
    right: '30px',
    top: '15px',
    width: '3%',

    '@media (max-width: 392px)': {
      right: '15px',
      top: '12px',
    },
  },
  storyImgContainer: {
    marginRight: '35px',
  },
  name: {
    // width: '90%',
    height: '70px',
    borderRadius: '50%',
    width: 'auto',
    margin: '0 auto',
  },
  nameTxt: {
    textAlign: 'center',
    marginLeft: '-29px',
    marginTop: '9px',
    color: '#084622',
    fontWeight: '500',
    fontFamily: 'Montserrat',
    fontSize: '13px',
    lineHeight: '13px',
  },
  storyTestimony: {
    color: '#6E80A3',
    fontWeight: '400',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    lineHeight: '27px',

    '@media (max-width: 392px)': {
      fontSize: '12px',
      lineHeight: '20px',
    },
  },
}));

export default homeStyles;
