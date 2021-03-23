import { makeStyles } from '@material-ui/core';

const interestSavingsStyles = makeStyles(theme => ({
	root: {
		paddingBottom: 30,
	},
	interestForm: {
		display: 'flex',
		alignItems: 'center',

		'@media (max-width: 518px)': {
			justifyContent: 'space-between'
    },
	},
	interestOption: {
		background: '#ffffff',
		width: 230,
		cursor: 'pointer',
		borderRadius: 20,

		'@media (max-width: 518px)': {
			width: 200
    },
	},
	interestMargin: {
		marginRight: 20,
	},
	optionLabel: {
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '30px 0',
	},
	optionsInput: {
		display: 'none'
	},
	activeOption: {
		border: '1px solid #00A343',
	},
	btnBox: {
		margin: '30px 0',
		display: 'flex',
		justifyContent: 'flex-end'
	},
	optionsText: {
		color: '#6E80A3',
		fontSize: 18,
		fontWeight: 'bold',
		margin: 0,

		'@media (max-width: 324px)': {
      fontSize: 16
    },
	},
	optionsIcon: {

		'@media (max-width: 518px)': {
      width: '70%'
    },

		'@media (max-width: 346px)': {
      width: '50%',
			marginLeft: '30%'
    },
	}
}));

export default interestSavingsStyles;