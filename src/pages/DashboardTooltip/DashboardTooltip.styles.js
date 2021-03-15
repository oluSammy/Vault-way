import { makeStyles } from '@material-ui/core';

const dashboardTooltipStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 30px',

    '@media (max-width: 1231px)': {
      padding: '30px 40px 30px 10px',
    },
  },
  tooltipHeading: {
    color: '#ADB8CD',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  tooltipContainer: {
    marginTop: '40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 300px))',
    gridColumnGap: '50px',
    gridRowGap: '40px',

    '@media (max-width: 1348px)': {
      gridColumnGap: '40px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },

    '@media (max-width: 907px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 300px))',
    },

    '@media (max-width: 714px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },

    '@media (max-width: 607px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    },
  },
  tooltipBox: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0',
    borderRadius: '20px',
  },
  tooltipContent: {
    width: '80%',
    // margin: '0 auto'
  },
  tooltipImg: {
    width: '100%',
  },
  tutorial: {
    color: '#ADB8CD',
    fontSize: '14px',
    margin: 0,
    marginTop: '20px',
  },
  tutorialTitle: {
    color: '#6E80A3',
    fontSize: '16px',
    fontWeight: 'bold',
  },
}));

export default dashboardTooltipStyles;
