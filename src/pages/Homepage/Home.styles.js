import { makeStyles } from '@material-ui/core';
import bg from '../../assets/icons/stories-bg.png';
import hero from '../../assets/img/BG.png';

const homeStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  hero: {
    backgroundImage: `url(${hero})`,
    minHeight: '85vh',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
  },

  heroText: {
    '@media (max-width: 600px)': {
      marginTop: '2.5rem',
    },
  },

  heading: {
    color: '#121E31',
    fontWeight: 800,
    fontSize: '2.8rem',
    lineHeight: '3.5rem',
    letterSpacing: '.1rem',
    marginBottom: '20px',

    '@media (max-width: 800px)': {
      fontSize: '30px',
      lineHeight: '40px',
      marginBottom: '10px',
      letterSpacing: '.7px',
    },

    '@media (max-width: 511px)': {
      fontSize: '20px',
      lineHeight: '25px',
    },
  },

   headingSpan: {
    color: '#00A343',
  },
  subHeading: {
    fontSize: '15px',
    fontWeight: 500,
    letterSpacing: '.5',
    color: '#6E80A3',
    marginBottom: '20px',

    '@media (max-width: 800px)': {
      fontSize: '11px',
      marginBottom: '10px',
    },
  },

  img: {
    height: '85vh',

    '@media (max-width: 600px)': {
      height: '65vh',
    },

    '@media (max-width: 490px)': {
      height: '55vh',
    },
  },

  security: {
    // backgroundColor: '#F2F2F2',
    padding: '80px 0',
  },
  securityHeading: {
    textAlign: 'center',
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

    '@media (max-width: 412px)': {
      fontSize: '17px',
    },
  },
  securityContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '70px 160px',

    '@media (max-width: 800px)': {
      padding: '70px 100px',
    },

    '@media (max-width: 781px)': {
      padding: '70px 70px',
    },

    '@media (max-width: 480px)': {
      padding: '70px 30px',
    },

    '@media (max-width: 691px)': {
      flexDirection: 'column',
    },
  },
  securityBox: {
    width: '35%',
    display: 'flex',
    alignItems: 'flex-start',

    '@media (max-width: 1038px)': {
      width: '45%',
    },

    '@media (max-width: 872px)': {
      width: '55%',
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
      width: '100%',
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
    fontWeight: 600,
    fontSize: '20px',
    marginBottom: '20px',
  },
  securitySubTitle: {
    fontWeight: 400,
    color: '#6E80A3',
    fontSize: '14px',
  },
  vaultWayTxt: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: '20px',
    lineHeight: '20px',
    color: 'rgba(110, 128, 163, 0.5)',
    textTransform: 'uppercase',
    letterSpacing: '.5px',
    marginTop: '50px',

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

    '@media (max-width: 465px)': {
      width: '30px',
      height: '30px',
    },

    '@media (max-width: 380px)': {
      width: '20px',
      height: '20px',
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
    fontWeight: '700',
    fontSize: '34ypx',
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

    '@media (max-width: 433px)': {
      fontSize: '12px',
      padding: '0 2px',
    },

    '@media (max-width: 380px)': {
      fontSize: '10px',
    },
  },
  secFooterSpan: {
    color: '#00A343',
  },
  plan: {
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    padding: '60px 0',
  },
  planContainer: {
    // padding: '0 300px',
  },
  planHeading: {
    textAlign: 'center',
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
    width: '70%',
    marginLeft: 'auto',

    '@media (max-width: 960px)': {
      width: '40%',
      margin: '0 auto',
      marginBottom: '20px',
    },
  },
  planBox: {
    display: 'flex',
    width: '65%',
    marginBottom: '30px',
    marginRight: 'auto',

    '@media (max-width: 959px)': {
      margin: '0 auto',
      marginBottom: '30px',
    },

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
    marginRight: '25px',
    backgroundColor: '#E2FEEB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',

    '@media (max-width: 378px)': {
      width: '300px',
    },
  },

  regularIconBox: {
    width: '350px',
    height: '70px',
  },

  quickIconBox: {
    width: '250px',
    height: '70px',
  },

  fundIconBox: {
    width: '200px',
    height: '70px',
  },
  planBoxHeading: {
    fontWeight: '800',
    fontSize: '18px',
    marginBottom: '10px',
  },
  planBoxSub: {
    fontWeight: '400',
    fontSize: '14px',
    color: '#6E80A3',

    '@media (max-width: 444px)': {
      fontSize: '12px',
    },
  },
  smart: {
    backgroundColor: '#F5F7FA',
    padding: '80px 60px',

    '@media (max-width: 530px)': {
      padding: '40px 0',
    },
  },
  smartHeading: {
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
    // backgroundColor: 'red',
    marginLeft: '20%',

    '@media (max-width: 406px)': {
      marginLeft: '10%',
    },
  },

  stepContent: {
    width: '60%',
  },
  number: {
    backgroundColor: '#00A343',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '30px',
    height: '36px',
    width: '36px',

    '@media (max-width: 516px)': {
      height: '35px',
      width: '35px',
    },
  },
  numberText: {
    color: '#FFFFFF',
  },
  stepTitle: {
    fontWeight: '800',
    color: '#6E80A3',
    fontSize: '16px',
    marginBottom: '10px',
  },
  stepSubTitle: {
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
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'repeat',
    backgroundColor: '#ffffff',

    padding: '60px 10px',
    paddingBottom: '250px',

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
    fontSize: '13px',
    lineHeight: '13px',
  },
  storyTestimony: {
    color: '#6E80A3',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '27px',

    '@media (max-width: 392px)': {
      fontSize: '12px',
      lineHeight: '20px',
    },
  },
}));

export default homeStyles;
