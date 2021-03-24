import { makeStyles } from '@material-ui/core';

const savingDateStyles = makeStyles(theme => ({
    root: {

    },
    savingsTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px'
    },
    savingsTopTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ADB8CD',

        '@media (max-width: 466px)': {
            fontSize: 18
        },
        '@media (max-width: 378px)': {
            fontSize: 14,
            marginRight: 10
        },
    }
}));

export default savingDateStyles;