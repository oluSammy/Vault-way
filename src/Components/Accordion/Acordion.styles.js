import { makeStyles } from '@material-ui/core';

const acordionStyles = makeStyles(theme => ({
  accordionContainer: {
    marginBottom: '40px',
  },
  AccordionTitle: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: '10px 10px 0 0'
  },
  accordionDetails: {
    backgroundColor: '#ECF2FE',
    padding: '20px 20px 50px 20px',
    borderRadius: '0 0 10px 10px'
  },
  accordionIcon: {
    color: theme.palette.common.white,
  }
}));

export default acordionStyles;