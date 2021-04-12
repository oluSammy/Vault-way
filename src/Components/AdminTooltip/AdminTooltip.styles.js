import { makeStyles } from '@material-ui/core';
const adminTooltipStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 100,
  },
  tooltipBox: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gridGap: 40,

    '@media (max-width: 797px)': {
      gridTemplateColumns: '1fr',
    },
  },
  coverBox: {
    border: '1px solid #E3EDF3',
    padding: 20,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileLabel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  coverFileSelected: {
    fontSize: 12,
    fontWeight: 'bold',
    margin: 0,
  },
  coverTxt: {
    margin: 0,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#AEBEC7',
  },
  inputFile: {
    display: 'none',
  },
  uploadImg: {
    margin: '10px 0',
  },
  tooltipTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tooltipIconI: {
    marginTop: 10,
  },
  tooltipFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  openBox: {
    display: 'flex',
    alignItems: 'center',
  },
  tooltipOpenTxt: {
    margin: 0,
    fontSize: 13,
    fontWeight: 500,
    color: '#ADB8CD',
    marginRight: 20
  },
  deleteIcon: {
    cursor: 'pointer',
  }
}));

export default adminTooltipStyles;
