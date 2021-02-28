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
    borderRadius: '0 0 10px 10px',

    '@media (max-width: 1032px)': {
      padding: '10px 10px 40px 10px',
    },
  },
  accordionIcon: {
    color: theme.palette.common.white,
  },
  AccordionTitleTxt: {
    fontSize: '15px',
    fontWeight: 500,
    margin: 0,

    '@media (max-width: 1032px)': {
      fontSize: '13px',
    },
  },
  accordionDetailsTxt: {
    color: '#6E80A3',
    fontSize: '15px',
    margin: 0,

    '@media (max-width: 1032px)': {
      fontSize: '13px',
    },
  }
}));

export default acordionStyles;