import { makeStyles } from '@material-ui/core';

const btnStyles = makeStyles((theme) => ({
  root: {
    fontSize: '10px',
    textTransform: 'capitalize',
    fontWeight: 600,
    borderRadius: '6px',
    lineHeight: '19.5px',

    '@media (max-width: 583px)': {
      // fontSize: '8px'
    },
    '@media (max-width: 400px)': {
      paddingRight: '8px',
      paddingLeft: '8px',
    },
  },
}));

export default btnStyles;
