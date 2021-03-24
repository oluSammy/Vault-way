import { makeStyles } from '@material-ui/core';

const savingsAmountStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',

        '@media (max-width: 491px)': {
            flexDirection: 'column'
        },
    },
    amountQuestion: {
        color: '#6E80A3',
        fontSize: 35,
        fontWeight: 'bold',
        lineHeight: '40px',

        '@media (max-width: 702px)': {
            fontSize: 25,
            lineHeight: '30px',
        },

        '@media (max-width: 491px)': {
            fontSize: 17,
            lineHeight: '20px',
        },
    },
    amountInputBox: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #E3EDF3',
        padding: '30px 40px',
        borderRadius: 20,
        width: '70%',

        '@media (max-width: 1136px)': {
            padding: '20px 20px',
        },

        '@media (max-width: 1115px)': {
            width: '90%',
        },

        '@media (max-width: 491px)': {
            width: '100%'
        },
    },
    amountLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#AEBEC7',

        '@media (max-width: 491px)': {
            fontSize: 12
        },
    },
    amountInput: {
        border: 'none',
        background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)',
        outline: 'none',
        color: '#6E80A3',
        fontSize: '35px',
        fontWeight: 'bold',
        width: '60%',

        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
            margin: 0,
            },
            '&[type=number]': {
            '-webkit-appearance': 'textfield',
            '-moz-appearance': 'textfield',
        },

        '@media (max-width: 702px)': {
            fontSize: 25,
        },

        '@media (max-width: 491px)': {
            fontSize: 18,
            width: '100%'
        },
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '35px',
        fontWeight: 'bold',
    },
    inputPrefix: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#B5BED1',
        margin: 0,

        '@media (max-width: 702px)': {
            fontSize: 25,
        },

        '@media (max-width: 491px)': {
            fontSize: 18
        },
    },
    amountDetailBox: {
        marginBottom: '10px',

        '@media (max-width: 491px)': {
            marginRight: '20px'
        },
    },
    amountDetailTitle: {
        margin: 0,
        color: '#6E80A3',
        fontSize: 14,
        textAlign: 'right',

        '@media (max-width: 491px)': {
            fontSize: 12,
            textAlign: 'left'
        },
    },
    amountDetailNumber: {
        margin: 0,
        fontSize: 35,
        color: '#ADB8CD',
        fontWeight: 'bold',
        textAlign: 'right',

        '@media (max-width: 702px)': {
            fontSize: 25,
        },

        '@media (max-width: 491px)': {
            fontSize: 14,
            textAlign: 'left'
        },
    },
    btnBox: {
        marginTop: 30
    },
    amountDetailsFlex: {
        '@media (max-width: 491px)': {
            marginTop: '30px',
            display: 'flex',
            flexWrap: 'wrap'
        },
    }
}));

export default savingsAmountStyles;