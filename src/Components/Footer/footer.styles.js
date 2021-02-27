import { makeStyles } from '@material-ui/core';

const footerStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F5F7FA',
    paddingTop: '30px',
  },
  footerGreen: {
    backgroundColor: theme.palette.primary.main,
    width: '78%',
    margin: '0 auto',
    marginBottom: '140px',
    borderRadius: '20px',
    position: 'relative',
    boxShadow: '0px 15px 40px rgba(0, 163, 67, 0.25)',
    marginTop: '-150px',

    '@media (max-width: 572px)': {
      marginBottom: '120px',
      marginTop: '-120px',
    },

    '@media (max-width: 452px)': {
      marginBottom: '90px',
      marginTop: '-100px',
    },

    '@media (max-width: 418px)': {
      width: '85%',
      borderRadius: '10px',
    },
  },
  footerGreener: {
    display: 'flex',
    alignItems: 'center',
    padding: '40px 80px',
    backgroundColor: '#084622',
    clipPath: 'polygon(0 1%, 70% 0%, 55% 100%, 0% 100%)',
    borderRadius: '20px',

    '@media (max-width: 766px)': {
      padding: '30px 40px',
    },

    '@media (max-width: 546px)': {
      padding: '20px 20px',
    },

    '@media (max-width: 478px)': {
      clipPath: 'polygon(0 1%, 65% 0%, 47% 100%, 0% 100%)',
    },

    '@media (max-width: 418px)': {
      borderRadius: '10px',
      padding: '15px 15px',
    },
  },
  footerTxt: {
    flexGrow: 1,
  },
  footerBtn: {
    position: 'absolute',
    top: '45%',
    right: '10%',

    '@media (max-width: 632px)': {
      right: '5%',
    },

    '@media (max-width: 418px)': {
      right: '3%',
      top: '38%',
    },
  },
  btn: {
    '@media (max-width: 632px)': {
      padding: '15px 7px',
    },
  },
  footerHeading: {
    color: theme.palette.common.white,
    fontSize: '30px',
    lineHeight: '35px',

    fontWeight: 700,
    marginBottom: '10px',
    textTransform: 'capitalize',

    '@media (max-width: 888px)': {
      fontSize: '22px',
      lineHeight: '25px',
    },

    '@media (max-width: 766px)': {
      fontSize: '18px',
      lineHeight: '20px',
    },

    '@media (max-width: 478px)': {
      fontSize: '14px',
      lineHeight: '18px',
    },

    '@media (max-width: 428px)': {
      fontSize: '12px',
      lineHeight: '15px',
    },

    '@media (max-width: 370px)': {
      fontSize: '10px',
      lineHeight: '11px',
    },
  },
  footerSubHeading: {
    color: theme.palette.common.white,
    fontSize: '20px',
    lineHeight: '30px',

    fontWeight: 400,

    '@media (max-width: 888px)': {
      fontSize: '18px',
      lineHeight: '25px',
    },

    '@media (max-width: 766px)': {
      fontSize: '14px',
      lineHeight: '16px',
    },

    '@media (max-width: 478px)': {
      fontSize: '10px',
      lineHeight: '12px',
    },

    '@media (max-width: 418px)': {
      fontSize: '10px',
      lineHeight: '10px',
    },

    '@media (max-width: 370px)': {
      fontSize: '8px',
      lineHeight: '11px',
    },
  },
  footerContent: {
    width: '82%',
    margin: '0 auto',
    paddingBottom: '50px',

    // '@media (max-width: 432px)': {
    //   width: '82%',
    //   marginLeft: '5px',
    // },
  },
  footerLogo: {
    width: '50%',
  },
  footerListHeading: {
    color: '#084622',
    fontSize: '15px',
    lineHeight: '30px',

    fontWeight: 700,
    marginBottom: '10px',
  },
  footerList: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerLink: {
    textDecoration: 'none',
    marginBottom: '5px',
    color: '#6E80A3',
    fontSize: '12px',
    lineHeight: '20px',

    fontWeight: 400,
    width: 'max-content',

    '&:hover': {
      textDecoration: 'underline',
    },

    '@media (max-width: 432px)': {
      fontSize: '10px',
    },
  },
  extras: {
    marginTop: '40px',
  },
  divider: {
    width: '100%',
    margin: '0 auto',
    height: '1px',
    backgroundColor: '#6E80A3',
    marginBottom: '10px',
  },
  extraContainer: {
    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 519px)': {
      flexWrap: 'wrap',
    },
  },
  followText: {
    marginRight: '180px',

    '@media (max-width: 1001px)': {
      marginRight: '80px',
    },

    '@media (max-width: 719px)': {
      marginRight: '50px',
    },

    '@media (max-width: 519px)': {
      marginRight: 'auto',
    },
  },
  extraIcons: {
    marginRight: 'auto',

    '@media (max-width: 519px)': {
      marginRight: '0',
    },
  },
  extraIcon: {
    marginRight: '15px',
  },
  extraIconsLink: {
    textDecoration: 'none',
  },
  extraText: {
    color: '#6E80A3',

    fontWeight: 400,
    fontSize: '12px',
  },

  copyText: {
    '@media (max-width: 519px)': {
      flexGrow: 1,
      textAlign: 'center',
      marginTop: '20px',
    },
  },
}));

export default footerStyles;
