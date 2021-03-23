import { makeStyles } from '@material-ui/core';

const regularVaultDetailStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '@media (max-width: 671px)': {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingLeft: '30px'
        },
      },
      title: {
        fontSize: 35,
        fontWeight: 700,
        color: '#6E80A3',
        margin: 0,
        lineHeight: '43px',
        whiteSpace: 'pre',

        '@media (max-width: 467px)': {
          fontSize: 25,
          lineHeight: '30px',
        },
      },
      interestBox: {
        color: '#ADB8CD',

        '@media (max-width: 671px)': {
          display: 'flex',
          marginTop: 20
        },
      },

      marginInterest: {
        '@media (max-width: 671px)': {
          marginRight: 60,
        },
      },
      interestTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 0,

        '@media (max-width: 467px)': {
          fontSize: 20
        },

        '@media (max-width: 351px)': {
          fontSize: 14
        },
      },
      interestSubTitle: {
        margin: 0,
        color: '#6E80A3',
        textAlign: 'right',
      },
      interestContainer: {
        marginBottom: '15px',
        fontSize: 14,
      },
}));

export default regularVaultDetailStyles;