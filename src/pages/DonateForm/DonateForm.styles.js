import { makeStyles } from "@material-ui/core";

const donateFormStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)",
    minHeight: "95vh",
  },
  amountBox: {
    border: "1px solid #E3EDF3",
    padding: 20,
    borderRadius: 20,

    "@media (max-width: 960px)": {
      marginTop: 40,
    },
  },
  label: {
    color: "#AEBEC7",
    fontSize: 14,
    fontWeight: "bold",
  },
  amount: {
    display: "flex",
    alignItems: "center",
  },
  amountInput: {
    background: "linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)",
    fontSize: 35,
    border: "none",
    color: "#B5BED1",
    marginLeft: 10,
    fontWeight: "bold",

    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      margin: 0,
    },
    "&[type=number]": {
      "-webkit-appearance": "textfield",
      "-moz-appearance": "textfield",
    },

    "@media (max-width: 960px)": {
      width: '200px',
    },

    "@media (max-width: 465px)": {
      fontSize: 25,
    },

    "@media (max-width: 385px)": {
      fontSize: 20,
      width: '160px',
    },
  },
  amountCurrency: {
    color: "#B5BED1",
    fontSize: 35,
    margin: 0,
    fontWeight: 'bold',

    "@media (max-width: 465px)": {
      fontSize: 25,
    },
    "@media (max-width: 385px)": {
      fontSize: 20,
    },
  },
  formBox: {
    marginTop: 50,
    paddingBottom: 60,

    "@media (max-width: 993px)": {
      paddingBottom: 220,
    },
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'column'
  },
  formLabel: {
    fontSize: 14,
    color: '#6E80A3',
    fontWeight: 600,
    marginBottom: 7
  },
  formInput: {
    width: '100%',
    border: 'none',
    fontSize: 16,
    color: '#ADB8CD',
    padding: '12px 10px',
    marginBottom: 15,
    background: '#ffffff',
    borderRadius: 10
  },
  btn: {
    width: '100%',
    marginTop: 30,
    padding: '10px 0',
    borderRadius: 23
  },
  arrowBox: {
    width: 50,
    height: 50,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    marginBottom: 20,
    cursor: 'pointer'
  },
  arrowIcon: {
    color: theme.palette.primary.main
  }
}));

export default donateFormStyles;
