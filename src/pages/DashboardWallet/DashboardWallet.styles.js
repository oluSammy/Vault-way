import { makeStyles } from '@material-ui/core';

const dashboardWalletStyles = makeStyles((theme) => ({
  root: {
    minHeight: '87vh',
    paddingTop: '50px',
    marginRight: '50px',
    paddingBottom: '80px',

    '@media (max-width: 490px)': {
      marginRight: '20px',
    },
  },
  walletTop: {
    display: 'grid',
    gridTemplateColumns: '2.8fr 1fr',
    gridColumnGap: '30px',
    marginBottom: '30px',

    '@media (max-width: 690px)': {
      gridTemplateColumns: '2fr 1fr',
    },

    '@media (max-width: 581px)': {
      gridTemplateColumns: '1.5fr 1fr',
    },

    '@media (max-width: 490px)': {
      gridColumnGap: '15px',
    },

    '@media (max-width: 384px)': {
      gridTemplateColumns: '1.2fr 1fr',
    },
  },
  balance: {
    border: '1px solid #E3EDF3',
    padding: '25px 25px',
    borderRadius: '15px',

    '@media (max-width: 490px)': {
      padding: '15px',
    },

    '@media (max-width: 346px)': {
      padding: '12px',
    },
  },
  balanceHeading: {
    margin: 0,
    fontSize: '16px',
    color: '#6E80A3',
    fontWeight: 'normal',

    '@media (max-width: 384px)': {
      fontSize: '13px',
    },
  },
  balanceFooter: {
    margin: '15px 0 5px 0',
  },
  balanceNaira: {
    color: '#6E80A3',
    fontSize: '12px',
    marginRight: '5px',
  },
  balanceAmount: {
    fontSize: '28px',
    color: '#6E80A3',
    fontWeight: 'bold',
    marginRight: '5px',

    '@media (max-width: 415px)': {
      fontSize: '16px',
    },
  },
  withdraw: {
    backgroundColor: '#6E80A3',
    color: '#ffffff',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  withdrawTitle: {
    margin: 0,
    fontSize: '16px',
    marginBottom: '15px',

    '@media (max-width: 450px)': {
      fontSize: '12px',
    },
  },
  bankTransfer: {
    margin: 0,
    fontSize: '14px',
    color: '#6E80A3',
    fontWeight: 600,

    '@media (max-width: 541px)': {
      fontSize: '12px',
    },
  },
  transferContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '30px',

    '@media (max-width: 690px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },

    '@media (max-width: 408px)': {
      marginTop: '15px',
    },
  },
  transferBox: {},
  transferTitle: {
    margin: 0,
    fontSize: '20px',
    color: '#ADB8CD',

    '@media (max-width: 1161px)': {
      fontSize: '17px',
    },

    '@media (max-width: 1068px)': {
      fontSize: '15px',
    },

    '@media (max-width: 999px)': {
      fontSize: '13px',
    },

    '@media (max-width: 408px)': {
      fontSize: '12px',
      marginBottom: '2px',
    },
  },
  transferSubTitle: {
    margin: 0,
    fontSize: '14px',
    color: '#6E80A3',
    fontWeight: 'normal',
    marginTop: '20px',

    '@media (max-width: 690px)': {
      display: 'none',
    },
  },
  transferBoxTop: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  bankCard: {
    border: '1px solid #E3EDF3',
    borderRadius: '15px',
    padding: '20px',
    cursor: 'pointer',

    '@media (max-width: 408px)': {
      padding: '14px',
    },
  },
  transferIcon: {
    marginLeft: '15px',
  },
  transferTitleGreen: {
    color: '#00A343',
  },
  bankCardTitle: {
    fontSize: 14,
    margin: 0,
    fontWeight: 600,
    color: '#6E80A3',

    '@media (max-width: 437px)': {
      fontSize: 12,
    },

    '@media (max-width: 346px)': {
      fontSize: 10,
    },
  },
  bankCardIcons: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  bankCardArrow: {
    color: '#00A343',
  },
  historyTitle: {
    color: '#6E80A3',
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 30,
  },
  historyContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: '20px',
    padding: '25px',
    borderRadius: '20px',

    '@media (max-width: 618px)': {
      padding: '15px',
    },

    '@media (max-width: 381px)': {
      borderRadius: '13px',
    },
  },
  historyIcon: {
    marginRight: '30px',

    '@media (max-width: 598px)': {
      marginRight: '15px',
    },

    '@media (max-width: 434px)': {
      fontSize: '12px',
      marginRight: '10px'
    },
  },
  historyIconUp: {
    color: '#6E80A3',
  },
  historyIconDown: {
    color: '#00A343',
  },
  historyNameBox: {
    marginRight: 'auto',
  },
  historyName: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#6E80A3',
    marginBottom: '10px',

    '@media (max-width: 598px)': {
      fontSize: '15px',
    },
    '@media (max-width: 434px)': {
      fontSize: '12px',
    },
    '@media (max-width: 341px)': {
      fontSize: '10px',
    },
  },
  historyStatus: {
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#6E80A3',

    '@media (max-width: 434px)': {
      fontSize: '10px',
    },
  },
  historyDateBox: {},
  historyDate: {
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#737588',
    marginBottom: '10px',

    '@media (max-width: 434px)': {
      fontSize: '10px',
    },
  },
  historyAmount: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#6E80A3',

    '@media (max-width: 598px)': {
      fontSize: '15px',
    },

    '@media (max-width: 434px)': {
      fontSize: '12px',
    },

    '@media (max-width: 341px)': {
      fontSize: '10px',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default dashboardWalletStyles;
