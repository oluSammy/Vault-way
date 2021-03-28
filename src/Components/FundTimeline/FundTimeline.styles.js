import { makeStyles } from '@material-ui/core';

const fundTimelineStyles = makeStyles(theme => ({
  root: {

  },
  timelineBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '80px',

    '@media (max-width: 410px)': {
      flexDirection: 'column'
    },
  },
  label: {
    fontSize: 14,
    color: '#AEBEC7',
    fontWeight: 'bold',
  },
  today: {
    marginRight: 200,
    border: '1px solid #E3EDF3',
    padding: '10px 60px',
    borderRadius: '20px',

    '@media (max-width: 1065px)': {
      marginRight: 100,
    },
    '@media (max-width: 619px)': {
      marginRight: 50,
    },

    '@media (max-width: 534px)': {
      padding: '10px 30px',
    },

    '@media (max-width: 486px)': {
      padding: '5px 15px',
    },

    '@media (max-width: 410px)': {
      marginBottom: 30,
      padding: '5px 130px 5px 30px',
      marginLeft: 30
    },
  },
  todayDate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6E80A3'
  },
  deadline: {
    border: '1px solid #E3EDF3',
    padding: '25px 30px',
    borderRadius: '20px',

    '@media (max-width: 486px)': {
      padding: '20px 15px',
    },
  }
}));

export default fundTimelineStyles;