import { makeStyles } from '@material-ui/core';

const paymentPlanStyles = makeStyles(theme => ({
    root: {
        paddingBottom: 50
    },
    paymentOption: {
        background: '#ffffff',
        width: '400px',
        borderRadius: 20,
        padding: '20px',
        cursor: 'pointer',
        marginBottom: 15
    },
    paymentLabel: {
        cursor: 'pointer'
    },
    input: {
        display: 'none',
    },
    walletBalance: {
        margin: 0,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6E80A3',
        marginBottom: 15
    },
    walletNumber: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#6E80A3',
        margin: 0,
    },
    walletBank: {
        color: '#6E80A3',
        fontSize: 20,
        fontWeight: 500
    },
    cardFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    expires: {
        color: '#6E80A3',
        fontSize: 15,
        fontWeight: 500
    },
    activeLabel: {
        border: '1px solid #00A343',
    }
}));

export default paymentPlanStyles;