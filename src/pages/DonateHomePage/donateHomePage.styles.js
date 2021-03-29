import { makeStyles } from "@material-ui/core";

const donateHomepageStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)",
    minHeight: "95vh",
  },
  fundDetailsBox: {
    paddingBottom: 270,
    padding: "0 200px",
    marginTop: 50,

    '@media (max-width: 1180px)': {
      padding: "0 80px",
    },

    '@media (max-width: 960px)': {
      padding: "0 30px",
    },
  },
  imgBox: {
    width: "100%",
    height: "100%",

  },
  gridImg: {
    '@media (max-width: 960px)': {
      marginBottom: '80px'
    },
  },
  img: {
    height: "100%",
    width: "100%",
    display: "block",
    objectFit: "cover",
    borderRadius: "20px",
  },
  raised: {},
  raisedText: {
    fontSize: 14,
    color: "#6E80A3",
    fontWeight: 600,
    margin: 0,
    marginBottom: 20,

    '@media (max-width: 473px)': {
      marginBottom: 2,
    },
  },
  raisedAmount: {
    margin: 0,
    fontSize: 35,
    fontWeight: "bold",
    color: "#6E80A3",
    marginBottom: 10,

    '@media (max-width: 473px)': {
      marginBottom: 2,
    },
  },
  raisedAmountGoal: {
    margin: 0,
    color: "#6E80A3",
    fontWeight: 600,
  },
  raisedBtn: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    padding: "12px 55px",
    marginTop: 30,
    borderRadius: "30px",

    '@media (max-width: 473px)': {
      marginBottom: 40,
    },
  },
  createdOn: {
    margin: 0,
    color: "#ADB8CD",
    fontSize: 14,
    fontWeight: 600,
  },
  createdBy: {
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    color: "#ADB8CD",
    marginTop: 15,
  },
  donor: {
    fontWeight: "normal",
    color: "#ADB8CD",
    fontSize: 14,
  },
  donorBox: {
    display: "flex",
    alignItems: "center",
  },
  donorImg: {
    "&:not(:first-child)": {
      marginLeft: "-10px",
    },
  },
  share: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  ShareTxt: {
    margin: 0,
    marginRight: 30,
    cursor: "pointer",
  },
  ShareImg: {
    marginRight: 20,
  },
  fundText: {
    margin: 0,
    color: '#6E80A3',
    fontWeight: 'normal',
    fontSize: 14,
    marginLeft: -20,
    marginTop: 30,

    '@media (max-width: 960px)': {
      marginLeft: 0,
    },
  }
}));

export default donateHomepageStyles;
