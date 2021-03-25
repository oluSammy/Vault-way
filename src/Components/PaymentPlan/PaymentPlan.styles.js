import { makeStyles } from '@material-ui/core';

const paymentPlanStyles = makeStyles(theme => ({
    root: {
        paddingBottom: 50
    },
    form: {
        marginTop: 30,

        '@media (max-width: 490px)': {
            marginLeft: '25%'
        },

        '@media (max-width: 454px)': {
            marginLeft: '20%'
        },

        '@media (max-width: 412px)': {
            marginLeft: '15%'
        },

        '@media (max-width: 400px)': {
            marginLeft: '10%'
        },

        '@media (max-width: 370px)': {
            marginLeft: '6%'
        },

        '@media (max-width: 348px)': {
            marginLeft: '4%'
        },
    },
    paymentOption: {
        background: '#ffffff',
        width: '400px',
        borderRadius: 20,
        padding: '20px',
        cursor: 'pointer',
        marginBottom: 15,

        '@media (max-width: 677px)': {
            width: '300px',
        },

        '@media (max-width: 542px)': {
            width: '250px',
        },

        '@media (max-width: 490px)': {
            width: '300px',
        },

        '@media (max-width: 330px)': {
            width: '280px',
        },
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
        marginBottom: 15,

        '@media (max-width: 677px)': {
            fontSize: 18,
        },

        '@media (max-width: 542px)': {
            fontSize: 12,
        },
    },
    walletNumber: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#6E80A3',
        margin: 0,

        '@media (max-width: 677px)': {
            fontSize: 22,
        },

        '@media (max-width: 542px)': {
            fontSize: 16,
        },


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
    },
}));

export default paymentPlanStyles;