import { makeStyles } from '@material-ui/core';

const adminVaultsStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 120
  },
  vaultsTop: {
    display: 'flex',
    marginBottom: 40,
  },
  vaultContainer: {
    border: '1px solid #E3EDF3',
    width: 370,
    padding: 15,
    borderRadius: 20,

    '&:not(:last-child)': {
      marginRight: 20,
    },
  },
  vaultContainerTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  vaultsTitle: {
    margin: 0,
    color: '#6E80A3',
    fontSize: 14,
    fontWeight: 'normal',
  },
  vaultNumber: {
    margin: 0,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6E80A3',
  },
  vaultSub: {
    fontSize: 12,
    margin: 0,
    color: '#6E80A3',
    marginTop: 10
  },
  vaultSpan: {
    display: 'flex',
    alignItems: 'center',
  },
  numberMargin: {
    margin: '0 5px'
  }
}));

export default adminVaultsStyles;
