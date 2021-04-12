import { makeStyles } from '@material-ui/core';

const adminSettingsStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 100,
  },
  acctBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
  },
  acctImgBox: {
    border: '1px solid #ADB8CD',
    padding: 10,
    borderRadius: '50%',
    marginRight: 30,
  },
  acctImg: {
    fontSize: 80,
    color: '#ADB8CD',
  },
  title: {
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    color: '#6E80A3',
  },
  btn: {
    marginTop: 100,
  },
}));

export default adminSettingsStyles;
