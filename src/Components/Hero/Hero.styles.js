import { makeStyles } from '@material-ui/core';
import hero from '../../assets/img/BG.png';

const height = '87vh';

const heroStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${hero})`,
    height: height,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Montserrat',

    '@media (max-width: 560px)': {
      height: '70vh',
    },

    '@media (max-width: 568px)': {
      height: height,
    },
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    justifyContent: 'space-around',
    justifyItems: 'center',
    padding: '0 10% 0 10%',
    alignContent: 'center',

    '@media (max-width: 936px)': {
      padding: '0 5% 0 5%',
    },

    '@media (max-width: 628px)': {
      padding: '0 3% 0 3%',
    },

    '@media (max-width: 568px)': {
      paddingTop: '17%',
      gridTemplateColumns: '1fr',
    },
  },
  heroText: {
    '@media (max-width: 568px)': {
      marginLeft: '-30px',
    },

    '@media (max-width: 346px)': {
      // marginLeft: '20px'
    },
  },
  heading: {
    color: '#121E31',
    fontWeight: 800,
    fontSize: '40px',
    fontFamily: 'Montserrat',
    lineHeight: '60px',
    letterSpacing: '1px',
    marginBottom: '20px',

    '@media (max-width: 800px)': {
      fontSize: '30px',
      lineHeight: '40px',
      marginBottom: '10px',
      letterSpacing: '.7px',
    },

    '@media (max-width: 511px)': {
      fontSize: '20px',
      lineHeight: '25px',
    },
  },
  headingSpan: {
    color: theme.palette.primary.main,
  },
  subHeading: {
    fontSize: '15px',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    letterSpacing: '.5',
    color: '#6E80A3',
    marginBottom: '15px',

    '@media (max-width: 800px)': {
      fontSize: '11px',
      marginBottom: '10px',
    },
  },
  heroImg: {
    height: '86vh',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 832px)': {
      height: '60vh',
    },

    // '@media (max-width: 564px)': {
    //   height: '40vh',
    // },

    '@media (max-width: 560px)': {
      height: '70vh',
    },

    '@media (max-width: 568px)': {
      justifySelf: 'end',
      height: '45vh',
      justifyContent: 'center',
      marginTop: '30px',
      marginLeft: '10px',
      transition: 'all .2s',
    },
  },
  img: {
    height: 'auto',
    maxWidth: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'all .2s',
  },
}));

export default heroStyles;
