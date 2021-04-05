import { makeStyles } from "@material-ui/core";

const donateThanksStyles = makeStyles((theme) => ({
  thanks: {
    color: "#ADB8CD",
    fontSize: 30,
    fontWeight: 600,
    margin: 0,
    marginLeft: 25,

    "@media (max-width: 475px)": {
      marginLeft: 0,
      textAlign: 'center'
    },
  },
  linkBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
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
  },
  or: {
    color: "#ADB8CD",
    fontSize: 14,
    fontWeight: 600,
    marginRight: 20,
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
  },
  paddingSpace: {
    height: 10,

  },
  thanksBox: {

    "@media (max-width: 832px)": {
      marginTop: 20,
    },
  },
  linkBox2: {
    display: 'flex',
    alignItems: 'center',
  }
}));

export default donateThanksStyles;
