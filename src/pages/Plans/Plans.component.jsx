import React from 'react'
import Message from '../../Components/Messgae/Message.component';
import Navbar from '../../Components/Navbar/Navbar.component';
import NavMargin from '../../Components/NavMargin/NavMargin.component';
import plansStyles from './plans.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import vaultImg from '../../assets/img/vault-green.png'
import flexibleImg from '../../assets/icons/flexible-vault-icon.png'
import safeImg from '../../assets/icons/safe-icon.png'
import ButtonCta from '../../Components/ButtonCta/ButtonCta.component';
import regularVault from '../../assets/icons/recurring-safe.png'
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from '../../Components/Footer/Footer.component';

const Plans = () => {
  const classes = plansStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const navLinks =[
    {
        title: 'Plans',
        link: '/plans',
        routerLink: true
    },
    {
        title: 'About',
        link: '/about',
        routerLink: true,
    },
    {
        title: 'FAQ',
        link: '/faq',
        routerLink: true,
    },
  ]
  return (
    <div className={classes.root}>
      <Navbar navLinks={navLinks} />
      <NavMargin />
      <Message />
      <Grid container className={classes.hero} justify="space-evenly" alignItems="center">
        <Grid className={classes.heroText} container item justify="center" lg={4} md={3} sm={5}>
          <div className={classes.heroTextContainer}>
            <Typography variant="h1" component="h1" className={classes.heroHeading}>
              Save on your <br/> own terms
            </Typography>
            <Typography variant="subtitle1" component="h6" className={classes.heroSubHeading}>
              Achieve greater financial goals and amazing interest rate when you save for the future.
            </Typography>
            <ButtonCta type="contained" bgColor="primary" text="Start Saving Now" shadow />
          </div>
        </Grid>
        <Grid className={classes.heroImg} container item justify="space-around" lg={4} md={3} sm={5}>
          <img src={vaultImg} className={classes.vaultImg} alt="vault way save pic"/>
        </Grid>
      </Grid>
      <Grid container className={classes.safe} justify={matchesXS ? 'center' : 'space-evenly'}
        alignItems="center" style={{ backgroundColor: '#FFF' }}>
        <Grid container justify="center" item lg={4} md={5} sm={6} xs={8} >
          <div className={classes.safeTxtBox}>
            <Typography className={classes.safeHeading} variant="h4" component="h4">Recurring Safe <br/> at 7%-15%</Typography>
            <Typography className={classes.safeSubHeading} variant="subtitle1" component="p">
              Securing your money for the rainy day could be just as easy as it is.
              Vaultway provides state of the heart security technology to ensure that you are never left stranded
            </Typography>
          </div>
        </Grid>
        <Grid container justify="center" item lg={4} md={3} sm={2} xs={3} >
          <div className={classes.safeImgBox}>
            <img className={classes.safeImg} src={regularVault} alt="vault way plan"/>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.safe} justify={matchesXS ? 'center' : 'space-evenly'}
        alignItems="center" style={{ background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)' }}>
        <Grid container justify="center" item lg={4} md={3} sm={2} xs={3} >
            <div className={classes.safeImgBox}>
              <img className={classes.safeImg} src={flexibleImg} alt="vault way plan"/>
            </div>
        </Grid>
        <Grid container justify="center" item lg={4} md={5} sm={6} xs={8} >
          <div className={classes.safeTxtBox}>
            <Typography className={classes.safeHeading} variant="h4" component="h4">Flexible Safe <br/> at 7%-15%</Typography>
            <Typography className={classes.safeSubHeading} variant="subtitle1" component="p">
              Securing your money for the rainy day could be just as easy as it is.
              Vaultway provides state of the heart security technology to ensure that you are never left stranded
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container className={`${classes.safe}, ${classes.lastSafe}`} justify={matchesXS ? 'center' : 'space-evenly'} alignItems="center" style={{ backgroundColor: '#FFF' }}>
        <Grid container justify="center" item lg={4} md={5} sm={6} xs={8} >
          <div className={classes.safeTxtBox}>
            <Typography className={classes.safeHeading} variant="h4" component="h4">Fixed Safe <br/> at 20%</Typography>
            <Typography className={classes.safeSubHeading} variant="subtitle1" component="p">
              Securing your money for the rainy day could be just as easy as it is.
              Vaultway provides state of the heart security technology to ensure that you are never left stranded
            </Typography>
          </div>
        </Grid>
        <Grid container justify="center" item lg={4} md={3} sm={2} xs={3} >
          <div className={classes.safeImgBox}>
            <img className={classes.safeImg} src={safeImg} alt="vault way plan"/>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Plans
