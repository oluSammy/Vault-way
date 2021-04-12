import { makeStyles } from '@material-ui/core';

const fundDetailStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '80px',
  },
  fileContainer: {
    border: '1px solid #E3EDF3',
    width: 'max-content',
    padding: '30px 40px',
    borderRadius: '20px',

    '@media (max-width: 453px)': {
      width: '100%',
      padding: '20px 30px',
    },
  },
  fileLabelInput: {
    display: 'none',
  },
  fileLabelText: {
    margin: 0,
    marginBottom: '20px',
    fontSize: 14,
    color: '#AEBEC7',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  fileLabelBox: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    maxWidth: 350
  },
  fileImageIcon: {
    margin: 0,
    marginRight: '40px',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#E1E9ED',
    borderRadius: '50%',

    '@media (max-width: 453px)': {
      width: '40px',
      height: '40px',
    },
  },
  fileLabelName: {
    margin: 0,
    fontSize: '30px',
    color: '#E1E9EE',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '@media (max-width: 453px)': {
      fontSize: '20px',
    },
  },
  fileLabel1: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px',
    border: '1px solid #E3EDF3',
    padding: '30px',
    borderRadius: '30px',
    maxWidth: '60vw',
    marginBottom: '40px',

    '@media (max-width: 943px)': {
      maxWidth: '100%',
    },

    '@media (max-width: 511px)': {
      padding: '15px',
    },
  },
  detailLabel: {
    marginBottom: '20px',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#AEBEC7',
  },
  textArea: {
    border: 'none',
    background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
    padding: '20px',
    fontSize: '23px',
    color: '#737588',

    '@media (max-width: 511px)': {
      fontSize: 16,
      padding: '10px',
    },
  },
}));

export default fundDetailStyles;
