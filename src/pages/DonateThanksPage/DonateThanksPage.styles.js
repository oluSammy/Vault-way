import { makeStyles } from "@material-ui/core";

const donateThanksStyles = makeStyles((theme) => ({
  thanks: {
    color: "#ADB8CD",
    fontSize: 30,
    fontWeight: 600,
    margin: 0,
  },
  linkBox: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    flexWrap: 'wrap',
    "@media (max-width: 428px)": {
      marginTop: 20,
    },
  },
  fundBtn: {
    padding: "10px 30px",
    borderRadius: 30,
    marginRight: 20,

    "@media (max-width: 428px)": {
      marginRight: 7,
    },

    "@media (max-width: 384px)": {
      padding: "8px 20px",
    },
  },
  or: {
    color: "#ADB8CD",
    fontSize: 14,
    fontWeight: 600,
    marginRight: 20,

    "@media (max-width: 428px)": {
      marginRight: 10,
      fontSize: 12,
    },
  },
  homeLink: {
    fontSize: 14,
    fontWeight: 600,
    marginRight: 20,
    textDecoration: "none",
    color: theme.palette.primary.main,

    "@media (max-width: 428px)": {
      fontSize: 12,
    },
    "@media (max-width: 359px)": {
      fontSize: 10,
    },
    "@media (max-width: 346px)": {
      marginTop: 20,
      marginLeft: 50

    },
  },
  paddingSpace: {
    height: 10,
    "@media (max-width: 1180px)": {
      height: 250,
    },
  },
  thanksBox: {
    "@media (max-width: 832px)": {
      marginTop: 20,
    },
  },
}));

export default donateThanksStyles;
