import { makeStyles } from '@material-ui/core';
const vaultDetailStyles = makeStyles((theme) => ({
  root: {
    minHeight: '86vh',
    paddingTop: '20px',
    marginRight: '50px',
    paddingBottom: '120px',

    '@media (max-width: 706px)': {
      marginRight: '20px',
    },
  },
  arrowBack: {
    cursor: 'pointer',
    height: '50px',
    width: '50px',
    background: '#FEFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    boxShadow: '0px 0px 24px rgba(0, 81, 33, 0.16)',
  },
  arrowBackIcon: {
    color: theme.palette.primary.main,
  },
  vaultOverview: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 1145px)': {
      flexWrap: 'wrap',
    },
  },
  completeBox: {
    textAlign: 'center',
    background: '#ffffff',
    width: '88%',
    height: '88%',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeText: {
    margin: 0,
    color: '#ADB8CD',
  },
  completePercent: {
    fontSize: '28px',
    fontWeight: 'bold',
  },
  vaultTitleBox: {
    marginLeft: '80px',
    marginRight: 'auto',

    '@media (max-width: 1043px)': {
      marginLeft: 'auto',
      marginRight: 0,
    },

    '@media (max-width: 960px)': {
      marginLeft: '80px',
      marginRight: 'auto',
    },

    '@media (max-width: 811px)': {
      marginLeft: 'auto',
      marginRight: 40,
    },

    '@media (max-width: 767px)': {
      marginLeft: 'auto',
      // marginRight: 20,
    },

    '@media (max-width: 676px)': {
      marginLeft: 'auto',
      marginRight: 0,
    },
  },
  vaultTitle: {
    margin: 0,
    fontSize: '30px',
    color: '#6E80A3',
    fontWeight: 'bold',
    marginBottom: '7px',

    '@media (max-width: 392px)': {
      fontSize: '25px',
    },
  },
  vaultDot: {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  vaultTitleStatus: {
    fontSize: 14,
    fontWeight: 600,
    color: '#6E80A3',

    '@media (max-width: 392px)': {
      fontSize: 12,
    },
  },
  vaultTitleDot: {
    marginRight: '10px',
  },
  vaultTitleIconBox: {
    display: 'flex',
    alignItems: 'center',
  },
  vaultTitleIcon: {
    marginRight: '10px',
  },
  vaultTitleText: {
    margin: 0,
    color: '#ADB8CD',
    fontSize: 20,
    fontWeight: 'bold',

    '@media (max-width: 392px)': {
      fontSize: 18,
    },
  },
  balance: {
    border: '1px solid #E3EDF3',
    padding: '30px 30px 40px 30px',
    borderRadius: '20px',

    '@media (max-width: 1038px)': {
      marginTop: '30px',
    },

    '@media (max-width: 392px)': {
      padding: '20px 20px 30px 20px',
      width: 'max-content',
      margin: '0 auto',
      marginTop: 30,
    },
  },
  balanceTitle: {
    margin: 0,
    fontSize: 14,
    color: '#6E80A3',
    fontWeight: 'bold',
    marginBottom: 15,

    '@media (max-width: 1038px)': {
      fontSize: 12,
    },
  },
  balanceAmount: {
    margin: 0,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#6E80A3',

    '@media (max-width: 392px)': {
      fontSize: 28,
    },
  },
  balanceSpan: {
    color: '#B5BED1',
  },
  balanceMargin: {
    marginRight: '8px',
  },
  vaultSummary: {
    marginTop: '30px',

    '@media (max-width: 567px)': {
      marginLeft: '20px',
    },
  },
  vaultSummaryTitle: {
    margin: 0,
    color: '#ADB8CD',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  vaultSummaryContainer: {
    display: 'flex',

    '@media (max-width: 1142px)': {
      flexDirection: 'column',
    },
  },
  summaryContent: {
    marginRight: 'auto',
  },
  vaultSummaryTxt: {
    marginBottom: '25px',
    display: 'grid',
    gridTemplateColumns: '.7fr 1fr',

    '@media (max-width: 1253px)': {
      gridTemplateColumns: '.5fr 1fr',
    },

    '@media (max-width: 1142px)': {
      gridTemplateColumns: '.8fr 1fr',
    },

    '@media (max-width: 632px)': {
      gridTemplateColumns: '.6fr 1fr',
    },

    '@media (max-width: 568px)': {
      gridTemplateColumns: '.4fr 1fr',
    },
  },
  summaryTitle: {
    margin: 0,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6E80A3',
  },
  summaryDetail: {
    fontSize: 24,
    fontWeight: 600,
    color: '#ADB8CD',
  },
  summaryNumber: {
    margin: 0,
    fontSize: 24,

    '@media (max-width: 472px)': {
      fontSize: 20,
    },

    '@media (max-width: 410px)': {
      fontSize: 18,
    },

    '@media (max-width: 393px)': {
      fontSize: 14,
    },
  },
  vaultSummaryBtn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media (max-width: 1141px)': {
      flexDirection: 'row',
    },

    '@media (max-width: 537px)': {
      flexDirection: 'column',
    },
  },
  summaryWithdraw: {
    margin: 0,
    fontSize: 14,
    color: '#ADB8CD',
    marginTop: '10px',
  },
  btnWithdraw: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    marginTop: '20px',

    '@media (max-width: 499px)': {
      marginLeft: '-89px',
    },
  },
  marginDetail: {
    '@media (max-width: 390px)': {
      marginLeft: '10px',
    },
  },
  subBtn: {
    backgroundColor: '#EAF1F5',
    padding: '10px',
    borderRadius: '20px',
    fontSize: 18,
    fontWeight: 500,
    color: '#6E80A3',
    marginRight: '15px',

    '@media (max-width: 390px)': {
      fontSize: 14,
    },
  },
  subBtnKb: {
    color: '#ADB8CD',
    marginRight: '15px',
  },
  btnText: {
    color: '#ADB8CD',
    fontSize: 16,
    fontWeight: 500,

    '@media (max-width: 390px)': {
      fontSize: 14,
    },
  },
  btnLightTxt: {
    color: '#E8EDEA',
    fontSize: 16,
    fontWeight: 500,
  },
  withdrawBtn: {
    border: 'none',
    color: '#F9F9F9',
    fontSize: 16,
    fontWeight: 600,
    padding: '20px 35px',
    background: '#CECECE',
    borderRadius: '35px',
    marginTop: '-50px',
    cursor: 'pointer',

    '@media (max-width: 1142px)': {
      marginTop: '10px',
    },

    '@media (max-width: 537px)': {
      marginBottom: '30px',
      padding: '15px 25px',
    },
  },
  addMoneyBtn: {
    background: '#E3EDF3',
    color: '#6E80A3',
    border: 'none',
    width: 'max-content',
    padding: '1px 0 0 50px',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    borderRadius: '28px',
  },
  iconBox: {
    marginLeft: '10px',
    height: '60px',
    width: '60px',
    backgroundColor: '#6E80A3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',

    '@media (max-width: 537px)': {
      height: '45px',
      width: '45px',
    },
  },
  spanText: {
    marginRight: '20px',
  },
}));

export default vaultDetailStyles;
