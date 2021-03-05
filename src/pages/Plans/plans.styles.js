import { makeStyles } from '@material-ui/core';
import bg from '../../assets/img/BG.png';

const plansStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  hero: {
    minHeight: '80vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '0 150px',

    '@media (max-width: 997px)': {
      padding: '0 100px',
    },

    '@media (max-width: 870px)': {
      padding: '0 60px',
    },

    '@media (max-width: 650px)': {
      padding: '0 20px',
    },

    '@media (max-width: 600px)': {
      padding: '0 0',
    },
  },

  heroTextContainer: {
    '@media (max-width: 600px)': {
      width: '90%',
      marginTop: '30px',
      marginRight: '20px',
    },

    '@media (max-width: 424px)': {
      width: '95%',
      marginTop: '30px',
      marginRight: '20px',
      marginLeft: '20px',
    },
  },
  heroHeading: {
    fontWeight: 800,
    fontSize: '40px',
    color: '#121E31',
    marginBottom: '30px',
    lineHeight: '50px',
    textTransform: 'capitalize',

    '@media (max-width: 797px)': {
      fontSize: '25px',
      marginBottom: '15px',
      lineHeight: '30px',
    },
  },
  heroSubHeading: {
    fontWeight: 500,
    fontSize: '18px',
    color: '#6E80A3',
    marginBottom: '25px',
    lineHeight: '26px',

    '@media (max-width: 756px)': {
      fontSize: '13px',
      marginBottom: '15px',
    },
  },
  vaultImg: {
    width: '70%',
    transition: 'all .2s ease',
    alignSelf: 'flex-start',

    '@media (max-width: 600px)': {
      width: '40%',
      marginLeft: '15%',
      marginTop: '30px',
    },

    '@media (max-width: 428px)': {
      marginLeft: '22%',
    },
  },
  vaultwaySection: {
    padding: '120px 0',
    backgroundColor: '#fff',

    '@media (max-width: 772px)': {
      padding: '80px 20px',
    },
  },

  vaultwaySectionHeading: {
    fontWeight: 800,
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '80px',

    '@media (max-width: 702px)': {
      fontSize: '25px',
    },

    '@media (max-width: 600px)': {
      marginBottom: '40px',
    },
  },

  vaultSaveRect: {
    width: '400px',
    height: '450px',
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    borderRadius: '20px',

    '@media (max-width: 1048px)': {
      width: '300px',
      height: '450px',
    },

    '@media (max-width: 500px)': {
      width: '300px',
      height: '350px',
    },

    '@media (max-width: 370px)': {
      width: '300px',
      height: '300px',
    },
  },

  saveVaultBox: {
    display: 'flex',
    marginBottom: '23px',

    '@media (max-width: 600px)': {
      width: '80%',
      margin: '0 auto 40px auto',
    },

    '@media (max-width: 394px)': {
      width: '90%',
    },
  },

  saveVaultBoxRect: {
    height: '34px',
    width: '34px',
    background: '#E2FEEB',
    borderRadius: '5px',
    marginRight: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',

    '@media (max-width: 670px)': {
      height: '27px',
      width: '27px',
      marginRight: '18px',
    },
  },

  saveVaultBoxContent: {
    width: '60%',
    marginTop: '2px',


    '@media (max-width: 1048px)': {
      width: '70%',
    },

    '@media (max-width: 702px)': {
      width: '80%',
    },
  },

  saveVaultHeading: {
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '24px',
    marginBottom: '7px',
    color: '#121E31',

    '@media (max-width: 670px)': {
      fontSize: '16px',
      lineHeight: '18px',
    },
  },

  saveVaultSub: {
    fontWeight: 500,
    fontSize: '15px',
    color: '#6E80A3',

    '@media (max-width: 670px)': {
      fontSize: '12px',
    },
  },

  regularVault: {
    padding: '100px 90px',
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',

    '@media (max-width: 1078px)': {
      padding: '100px 50px',
    },

    '@media (max-width: 995px)': {
      padding: '100px 10px',
    },

    '@media (max-width: 960px)': {
      padding: '100px 30px',
    },
  },

  regularVaultHeading: {
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: 800,
    marginBottom: '25px',
  },

  regularVaultSub: {
    textAlign: 'center',
    fontSize: '17px',
    fontWeight: 500,
    color: '#6E80A3',
    lineHeight: '28px',
    marginBottom: '70px',
  },

  regularVaultBox: {
    display: 'flex',
    marginBottom: '70px',

    '@media (max-width: 864px)': {
      marginBottom: '40px',
    },
  },

  regularVaultIconBox: {
    marginRight: '20px',
    marginTop: '30px',

    '@media (max-width: 960px)': {
      marginRight: '10px',
    },

    '@media (max-width: 706px)': {
      marginRight: '-30px',
    },
  },

  regularVaultIcon: {
    '@media (max-width: 960px)': {
      width: '70%',
    },

    '@media (max-width: 706px)': {
      width: '50%',
    },
  },

  regularVaultContent: {
    width: '65%',

    '@media (max-width: 706px)': {
      width: '80%',
    },
  },

  regularHeading: {
    fontSize: '24px',
    fontWeight: 800,
    marginBottom: '10px',

    '@media (max-width: 864px)': {
      fontSize: '20px',
    },
  },

  regularSub: {
    fontSize: '15px',
    fontWeight: 400,
    color: '#6E80A3',
    lineHeight: '26px',
    marginBottom: '20px',

    '@media (max-width: 864px)': {
      fontSize: '13px',
      lineHeight: '20px',
    },

    '@media (max-width: 600px)': {
      marginBottom: '10px',
    },
  },

  regularBtn: {
    fontSize: '12px',
    color: '#084622',
    fontWeight: 500,
  },

  regularBtnIcon: {
    fontSize: '100px',
    color: '#084622',
  },

  quickVault: {
    backgroundColor: '#ffffff',
    padding: '100px 120px',

    '@media (max-width: 1034px)': {
      padding: '100px 40px',
    },

    '@media (max-width: 734px)': {
      padding: '100px 25px',
    },
  },

  quickVaultHeading: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#121E31',
    marginBottom: '40px',

    '@media (max-width: 428px)': {
      fontSize: '25px',
      marginBottom: '28px',
    },
  },

  quickVaultDetail: {
    marginBottom: '24px',
    display: 'flex',
    // alignItems: 'flex-start'
  },

  quickVaultRect: {
    height: '34px',
    width: '54px',
    background: '#E2FEEB',
    borderRadius: '5px',
    marginRight: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',

    '@media (max-width: 517px)': {
      height: '34px',
      width: '74px',
    },

    '@media (max-width: 428px)': {
      height: '34px',
      width: '94px',
    },
  },

  quickVaultBody: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#6E80A3',

    '@media (max-width: 428px)': {
      fontSize: '14px',
    },
  },

  vaultBtn: {
    marginTop: '60px',

    '@media (max-width: 600px)': {
      marginTop: '30px',
      marginBottom: '30px'
    },
  },

  vaultMainRect: {
    width: '70%',
    height: '410px',
    borderRadius: '10px',
    background: '#E2FEEB',
  },

  quickVaultLast: {
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    marginBottom: '200px',

    '@media (max-width: 600px)': {
      marginBottom: '100px'
    },

  }

  // safe: {
  //   minHeight: '55vh',
  // },
  // safeTxtBox: {
  //   width: '70%',
  // },
  // safeImgBox: {
  //   backgroundColor: '#E2FEEB',
  //   height: '210px',
  //   width: '210px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: '10px',

  //   '@media (max-width: 959px)': {
  //     height: '160px',
  //     width: '160px',
  //   },

  //   '@media (max-width: 796px)': {
  //     height: '140px',
  //     width: '140px',
  //   },

  //   '@media (max-width: 372px)': {
  //     height: '90px',
  //     width: '9px',
  //   },

  //   '@media (max-width: 677px)': {
  //     height: '110px',
  //     width: '110px',
  //   },

  //   '@media (max-width: 344px)': {
  //     height: '80px',
  //     width: '80px',
  //   },
  // },
  // safeImg: {
  //   width: '40%',
  // },
  // safeHeading: {
  //   fontWeight: 800,
  //   fontSize: '24px',
  //   color: '#121E31',
  //   marginBottom: '10px',

  //   '@media (max-width: 548px)': {
  //     fontSize: '18px',
  //   },

  //   '@media (max-width: 344px)': {
  //     fontSize: '15px',
  //   },
  // },
  // safeSubHeading: {
  //   fontWeight: 400,
  //   fontSize: '12px',
  //   color: '#6E80A3',

  //   '@media (max-width: 548px)': {
  //     fontSize: '10px',
  //   },

  //   '@media (max-width: 344px)': {
  //     fontSize: '9px',
  //   },
  // },
  // lastSafe: {
  //   padding: '70px 0 250px 0',

  //   '@media (max-width: 636px)': {
  //     padding: '70px 0 200px 0',
  //   },

  //   '@media (max-width: 442px)': {
  //     padding: '70px 0 140px 0',
  //   },

  //   '@media (max-width: 364px)': {
  //     padding: '70px 0 120px 0',
  //   },
  // }
}));

export default plansStyles;
