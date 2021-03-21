import { makeStyles } from '@material-ui/core';

const createVaultStyles = makeStyles((theme) => ({
  root: {
    minHeight: '85vh',
    paddingTop: 30,
    paddingRight: 40,
    paddingBottom: 150,

    '@media (max-width: 557px)': {
      paddingRight: 20,
    },
  },
  arrowBox: {
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ffffff',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0px 0px 24px rgba(0, 81, 33, 0.16)',
  },

  arrowBack: {
    color: '#00A343',
  },

  vaultQuestion: {
    fontSize: 14,
    fontWeight: 600,
    color: '#6E80A3',
  },

  vaultTitleBox: {
    display: 'flex',
    alignItems: 'center',
    margin: '40px 0 20px 0',
  },
  vaultIcon: {
    marginRight: 20,
  },
  vaultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00A343',
    margin: 0,
  },
  regularContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gridRowGap: '20px',
    gridColumnGap: 20,
  },
  regularVault: {
    textDecoration: 'none',
    background: '#ffffff',
    padding: '25px 30px',
    borderRadius: 25,

    '&:hover': {
      border: '1px solid #00A343',
    },
  },
  vaultTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vaultTopText: {
    margin: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00612E',
  },
  vaultList: {
    listStyle: 'none',
    padding: 0,
  },
  vaultListItem: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    marginTop: 20,
  },
  vaultListText: {
    margin: 0,
    fontSize: 12,
    fontWeight: '500',
    color: '#737588',
  },
  vaultListNumber: {
    margin: 0,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6E80A3',
    textAlign: 'center',
  },
  irregularVaultContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@media (max-width: 1199px)': {
      flexDirection: 'column',
    },
  },
  irregularVaultBox: {
    width: '45%',
    textDecoration: 'none',

    '@media (max-width: 1210px)': {
      width: '48%',
    },

    '@media (max-width: 1199px)': {
      width: '60%',
    },

    '@media (max-width: 1029px)': {
      width: '70%',
    },

    '@media (max-width: 637px)': {
      width: '80%',
    },

    '@media (max-width: 549px)': {
      width: '90%',
    },
  },
  irregularContent: {
    display: 'flex',
    alignItems: 'center',
    background: '#E8EDEA',
    borderRadius: 20,
    padding: '30px',

    '@media (max-width: 469px)': {
      padding: 15,
    },

    '&:hover': {
      border: '1px solid #00A343',
    },
  },
  vaultMargin: {
    marginRight: '40px',
  },
  irregularContentTitle: {
    margin: 0,
    color: '#6E80A3',
    fontSize: 14,
    fontWeight: 'bold',

    '@media (max-width: 426px)': {
      fontSize: 12,
    },
  },
  irregularContentText: {
    margin: 0,
    color: '#6E80A3',
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: 15,

    '@media (max-width: 426px)': {
      fontSize: 12,
    },
  },
  irregularPli: {
    marginRight: 'auto',
    paddingBottom: '10px',
    paddingTop: '10px',
  },

  irregularContentFrame: {
    '@media (max-width: 426px)': {
      width: '20%',
    },
  },
}));

export default createVaultStyles;
