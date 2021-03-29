import { makeStyles } from "@material-ui/core";

const donateCountdownStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    justifyContent: "center",
    marginTop: 50,
  },
  heading: {
    fontSize: 14,
    fontWeight: 600,
    color: "#00A343",
    margin: 0,
    marginBottom: 30,
    textAlign: 'center',
  },
  fundTitle: {
    fontSize: 35,
    color: "#ADB8CD",
    fontWeight: "bold",
    margin: 0,
    marginBottom: 30,
    textAlign: 'center',
    padding: '0 20px',

    '@media (max-width: 983px)': {
      fontSize: 25,
    },
    '@media (max-width: 443px)': {
      fontSize: 18,
      marginBottom: 20,
    },
  },
  timerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center'
  },
  timerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: 100,
    marginBottom: 50,
    '@media (max-width: 443px)': {
      minWidth: 80,
    },
    '@media (max-width: 384px)': {
      minWidth: 70,
    },
  },
  timerNumber: {
    margin: 0,
    fontSize: 24,
    color: '#6E80A3',
    fontWeight: 'bold',
    marginBottom: 10,

    '@media (max-width: 983px)': {
      fontSize: 16
    }
  },
  timerText: {
    margin: 0,
    fontSize: 14,
    color: '#ADB8CD',
    fontWeight: 'bold'
  },
  progressBox: {
    width: '60vw',

    '@media (max-width: 983px)': {
      width: '80vw'
    },

    '@media (max-width: 581px)': {
      width: '70vw',
      paddingLeft: 40
    },
    '@media (max-width: 487px)': {
      width: '80vw',
      paddingLeft: 40
    },
    '@media (max-width: 426px)': {
      width: '90vw',
    },
    '@media (max-width: 363px)': {
      width: '75vw',
      paddingLeft: 40
    },
  },
  progress: {
    height: 10,
    borderRadius: 40
  }
}));

export default donateCountdownStyles;
