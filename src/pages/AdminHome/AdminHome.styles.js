import { makeStyles } from '@material-ui/core';
const adminHomeStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 200
  },
  overview: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: '20px',
    [theme.breakpoints.up('xl')]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 350px))',
    },
    '@media (max-width: 421px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    },

    '@media (max-width: 557px)': {
      gridGap: '10px',
    },
  },
  overviewBox: {
    padding: 17,
    border: '1px solid #E3EDF3',
    borderRadius: 20,

    '@media (max-width: 557px)': {
      padding: '15px',
    },
  },
  overviewTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,

    '@media (max-width: 745px)': {
      marginBottom: 10,
    },
    '@media (max-width: 391px)': {
      marginBottom: 7
    },
  },
  overviewTxt: {
    margin: 0,
    fontSize: 14,
    color: '#6E80A3',
    fontWeight: 'normal'
  },
  overViewAmount: {
    margin: 0,
    marginBottom: 10
  },
  realMoney: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: '0 4px',

    '@media (max-width: 557px)': {
      fontSize: '20px',
    },

    '@media (max-width: 391px)': {
      fontSize: '17px',
    },
  },
  purple: {
    color: '#5B5A99',
  },
  grey: {
    color: '#6E80A3'
  },
  green: {
    color: '#00A343'
  },
  red: {
    color: '#EF6E4B'
  },
  overviewCurrency: {
    color: '#6E80A3',
    fontSize: 14,
    fontWeight: 'normal'
  },
  overviewSub: {
    color: '#6E80A3',
    fontSize: 12,
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center'
  },
  overviewIcon: {
    color: theme.palette.primary.main,
    marginLeft: 10,
  },
  status: {
    margin: '30px 0',
    display: 'flex',

    '@media (max-width: 540px)': {
      flexDirection: 'column'
    },
  },
  statusTxt: {
    marginRight: 'auto',
    color: '#6E80A3',
    fontWeight: 600,
    fontSize: 14,
    margin: 0,

    '@media (max-width: 540px)': {
      marginBottom: 15
    },
  },
  statusColorBox: {
    display: 'flex',
  },
  statusContainer: {
    '&:not(:last-child)': {
      marginRight: 40,

      '@media (max-width: 684px)': {
        marginRight: 20,
      },
      '@media (max-width: 572px)': {
        marginRight: 10,
      },
    },
    display: 'flex',
    alignItems: 'center'
  },
  color: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    marginRight: 15
  },
  colorTxt: {
    color: '#6E80A3'
  },
  purpleBg: {
    backgroundColor: '#4745B8',
  },
  greyBg: {
    backgroundColor: '#6E80A3',
  },
  greenBg: {
    backgroundColor: '#00A343',
  },
  redBg: {
    backgroundColor: '#EF6E4B',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: '18px 35px',
    borderRadius: '20px 20px 0 0',

    '@media (max-width: 487px)': {
      padding: '18px 20px'
    },
  },
  tableHeading: {
    color: '#ADB8CD',
    fontSize: 14,
    fontWeight: 600,

    '@media (max-width: 365px)': {
      fontSize: 12
    },
  },
  tableHeadingSub: {
    color: '#ADB8CD',
    fontSize: 14,
    fontWeight: 500,
    opacity: .7,

    '@media (max-width: 365px)': {
      fontSize: 12
    },
  },
  indicator: {
    backgroundColor: 'white !important',
    display: 'none !important',
    opacity: '0 !important',
  },
  tab: {
    color: '#ADB8CD',
    fontSize: 14,
    fontWeight: 'normal',
    padding: '10px 10px',
    minWidth: '80px !important',

    '@media (max-width: 498px)': {
      fontSize: 12,
      minWidth: '60px !important',
    },

    '@media (max-width: 422px)': {
      fontSize: 10,
      minWidth: '40px !important',
      minHeight: '15px !important',
    },

    '@media (max-width: 357px)': {
      fontSize: 8,
      minWidth: '30px !important',
      minHeight: '8px !important',
    },
  },
  activeTab: {
    backgroundColor: '#6E80A3',
    borderRadius: 10,
    color: '#ffffff',
    fontWeight: 700,
  },
  inactiveTab: {

  }
}));

export default adminHomeStyles;
