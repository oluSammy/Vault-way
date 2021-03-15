import { makeStyles } from '@material-ui/core';

const securityPanelStyles = makeStyles((theme) => ({
  root: {},
  form: {
    marginBottom: '40px',
  },
  line: {
    border: '1px solid #EAF1F5',
    marginRight: '5%',
  },
  switch: {
    margin: '20px 0',
  },
  label: {
    color: '#6E80A3',
    fontSize: '14px',
    fontWeight: 600,
    marginRight: '100px',
  },
  btnBox: {
    marginBottom: '50px'
  }
}));

export default securityPanelStyles;
