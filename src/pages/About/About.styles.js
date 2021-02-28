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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '@media (max-width: 383px)': {
      minHeight: '50vh',
    },
  },
  lifestyleHeading: {
    fontWeight: '800',
    fontSize: '55px',
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
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#6E80A3',
    width: '43%',
    margin: '0 auto',
    textAlign: 'center',

    '@media (max-width: 1052px)': {
      width: '53%',
    },

    '@media (max-width: 882px)': {
      width: '65%',
    },

    '@media (max-width: 702px)': {
      width: '85%',
    },

    '@media (max-width: 585px)': {
      fontSize: '12px',
      lineHeight: '20px',
    },

    '@media (max-width: 383px)': {
      fontSize: '11px',
      lineHeight: '18px',
    },
  },
  aboutSectionHeading: {
    fontWeight: 800,
    fontSize: '25px',
    marginBottom: '15px',

    '@media (max-width: 700px)': {
      fontSize: '20px',
      marginBottom: '10px',
    },

    '@media (max-width: 538px)': {
      fontSize: '16px',
    },
  },
  aboutSection: {
    padding: '80px 140px',
    backgroundColor: '#ffffff',

    '@media (max-width: 1014px)': {
      padding: '80px 40px',
    },

    '@media (max-width: 600px)': {
      padding: '40px 10px',
    },
  },
  aboutSectionTxt: {
    width: '70%',

    '@media (max-width: 1014px)': {
      width: '80%',
    },
    '@media (max-width: 538px)': {
      width: '90%',
    },
  },
  aboutSectionSub: {
    fontWeight: 500,
    fontSize: '16px',
    color: '#6E80A3',
    letterSpacing: '.5px',
    lineHeight: '25px',

    '@media (max-width: 700px)': {
      fontSize: '14px',
      lineHeight: '20px',
    },

    '@media (max-width: 538px)': {
      fontSize: '12px',
    },
  },

  aboutSectionRec: {
    height: '300px',
    width: '300px',
    backgroundColor: '#E2FEEB',
    borderRadius: '20px',

    '@media (max-width: 700px)': {
      height: '200px',
      width: '200px',
    },

    '@media (max-width: 594px)': {
      height: '100px',
      width: '100px',
      borderRadius: '10px',
    },
  },

  aboutSectionImg: {
    width: '80%',
  },

  redefine: {
    minHeight: '65vh',
    background: theme.palette.primary.dark,
    color: '#E2FEEB',
    padding: '5px 180px',
    position: 'relative',

    '@media (max-width: 1289px)': {
      padding: '5px 100px'
    },

    '@media (max-width: 1160px)': {
      padding: '5px 70px'
    },

    '@media (max-width: 1071px)': {
      padding: '5px 30px'
    },

    '@media (max-width: 876px)': {
      minHeight: '55vh',
      padding: '15px 10px'
    },
  },

  designIcon: {
    position: 'absolute',
  },

  designOne: {
    bottom: 0,
    left: 0,
    zIndex: '2',
  },
  designTwo: {
    bottom: 0,
    left: 0,
    zIndex: '10',
  },
  designThree: {
    top: 0,
    right: 0,
    zIndex: '2',
  },
  designFour: {
    top: 0,
    right: 0,
    zIndex: '2',
  },

  designBottom: {
    width: '20%'
  },

  designTop: {
    height: '54%'
  },

  redefineHeading: {
    fontSize: '40px',
    fontWeight: '800',
    letterSpacing: '1px',
    width: '70%',
    margin: '0 auto',

    '@media (max-width: 1289px)': {
      width: '80%',
    },

    '@media (max-width: 1023px)': {
      width: '95%',
    },

    '@media (max-width: 644px)': {
      width: '100%',
    },

    '@media (max-width: 840px)': {
      fontSize: '30px',
    },

    '@media (max-width: 600px)': {
      fontSize: '22px',
      textAlign: 'center'
    },
  },

  redefineSub: {
    fontSize: '17px',
    fontWeight: 500,
    width: '65%',
    margin: '0 auto',

    '@media (max-width: 1160px)': {
      width: '80%',
    },

    '@media (max-width: 733px)': {
      width: '90%',
    },

    '@media (max-width: 600px)': {
      fontSize: '12px',
      textAlign: 'justify',
      marginTop: '-60px'
    },

    '@media (max-width: 355px)': {
      marginTop: '-20px'
    },
  },

  company: {
    padding: '60px 80px',
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
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

  companyTitle: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: '35px',
    marginTop: '50px',
    color: '#121E31',

    '@media (max-width: 692px)': {
      fontSize: '25px',
      marginTop: '30px',
    },

    '@media (max-width: 468px)': {
      marginTop: '10px',
    },

    '@media (max-width: 446px)': {
      marginTop: '0px',
    },
  },

  companySubTitle: {
    textAlign: 'center',
    color: '#6E80A3',
    fontSize: '18px',
    fontWeight: 500,
    width: '50%',
    margin: '20px auto 70px auto',

    '@media (max-width: 1006px)': {
      width: '70%',
    },

    '@media (max-width: 692px)': {
      fontSize: '15px',
      width: '80%',
    },

    '@media (max-width: 528px)': {
      fontSize: '12px',
    },

    '@media (max-width: 392px)': {
      width: '90%',
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
    fontWeight: '800',
    fontSize: '18px',
    lineHeight: '20px',
    color: '#121E31',
    marginBottom: '25px',
  },
  companyTxt: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6E80A3',

    '@media (max-width: 736px)': {
      fontSize: '12px',
    },
  },

  join: {
    marginBottom: '300px',

    '@media (max-width: 1004px)': {
      marginBottom: '200px',
    },

    '@media (max-width: 440px)': {
      marginBottom: '150px',
    },
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
  // latest: {
  //   padding: '100px 90px',
  //   paddingBottom: '300px',

  //   '@media (max-width: 1252px)': {
  //     padding: '100px 50px 300px 50px',
  //   },

  //   '@media (max-width: 1174px)': {
  //     padding: '100px 50px 300px 50px',
  //   },

  //   '@media (max-width: 960px)': {
  //     padding: '100px 50px 200px 50px',
  //   },

  //   '@media (max-width: 452px)': {
  //     padding: '100px 0px 120px 0px',
  //   },
  // },
  // latestHeading: {
  //   fontWeight: '700',
  //   fontSize: '26px',
  //   lineHeight: '24px',
  //   marginBottom: '45px',
  //   textAlign: 'center',
  //   color: '#121E31',
  // },
  // Card: {
  //   boxShadow: '0px 10px 25px 3px rgba(209, 225, 214, 0.33)',
  //   marginLeft: '0',
  // },
  // cardContainer: {
  // '@media (max-width: 596px)': {
  //     marginLeft: '8%',
  //   },
  // },
  // CardTitle: {
  //   fontWeight: '700',
  //   fontSize: '16px',
  //   lineHeight: '20px',
  //   color: '#121E31',
  //   marginBottom: '10px',
  // },
  // CardSubtitle: {
  //   fontWeight: '400',
  //   fontSize: '15px',
  //   lineHeight: '18px',
  //   color: '#6E80A3',
  //   marginBottom: '10px',
  // },
  // cardFooter: {
  //   display: 'flex',
  //   alignItems: 'center',
  // },
  // CardDate: {
  //   fontWeight: '400',
  //   fontSize: '13px',
  //   lineHeight: '18px',
  //   color: '#6E80A3',
  // },
  // cardDot: {
  //   margin: '-15px 8px 0 8px',
  //   fontSize: '30px',
  //   fontWeight: '800',
  // },
}));

export default aboutStyles;
