import React, { useEffect } from 'react'
import donateThanksStyles from './DonateThanksPage.styles';
import DonateCountdown from '../../Components/DonateCountdown/DonateCountdown.component';
import Message from '../../Components/Messgae/Message.component';
import Navbar from '../../Components/Navbar/Navbar.component';
import Grid from '@material-ui/core/Grid';
import vaultImg from '../../assets/img/fundMyVault.png';
import Button from '@material-ui/core/Button';
import groupIcon from '../../assets/img/Group 4158.png'
import { Link } from 'react-router-dom';
import mailIcon from '../../assets/icons/mail-green.png';
import fbIcon from '../../assets/icons/fb-grey.png';
import twitter from '../../assets/icons/twitter-grey.png';
import whatsapp from '../../assets/icons/whatsapp-grey.png';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from '../../Components/Footer/Footer.component';
import donateHomepageStyles from '../DonateHomePage/donateHomePage.styles';

const DonateThanksPage = () => {
  const classes = donateThanksStyles();
  const donateStyles = donateHomepageStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className={donateStyles.root}>
      <Navbar />
      <Message />
      <DonateCountdown />
      <Grid container justify="center" className={donateStyles.fundDetailsBox}>
        <Grid item lg={3} md={matchesSm ? 5 : 3} className={donateStyles.gridImg}>
          <div className={donateStyles.imgBox}>
            <img className={donateStyles.img} src={vaultImg} alt="donate"/>
          </div>
        </Grid>
        <Grid container justify="space-around"  item lg={8} md={8}>
          <Grid item md={5}>
            <div className={donateStyles.raised}>
              <p className={donateStyles.raisedText}>Raised</p>
              <p className={donateStyles.raisedAmount}>180,000 <span className={donateStyles.raisedAmount}>.00</span></p>
              <p className={donateStyles.raisedAmountGoal}>Goal is 200,000.00</p>
            </div>
          </Grid>
          <Grid item md={5}>
            <div className={donateStyles.created}>
              <p className={donateStyles.createdOn}>Created March 1, 2021.</p>
              <p className={donateStyles.createdBy}>By Mike Oyekan</p>
              <p className={donateStyles.donor}>25 Donors</p>
              <div className={donateStyles.donorBox}>
                <img className={donateStyles.donorImg} src={groupIcon} alt="img"/>
                <img className={donateStyles.donorImg} src={groupIcon} alt="img"/>
                <img className={donateStyles.donorImg} src={groupIcon} alt="img"/>
                <img className={donateStyles.donorImg} src={groupIcon} alt="img"/>
                <img className={donateStyles.donorImg} src={groupIcon} alt="img"/>
                <img className={donateStyles.donorImg} src={groupIcon} alt="img"/>
              </div>
              <div className={donateStyles.share}>
                <p className={donateStyles.ShareTxt}>Share</p>
                <img className={donateStyles.ShareImg}  src={fbIcon} alt="share on facebook"/>
                <img className={donateStyles.ShareImg}  src={twitter} alt="share on facebook"/>
                <img className={donateStyles.ShareImg}  src={mailIcon} alt="share on facebook"/>
                <img className={donateStyles.ShareImg} src={whatsapp} alt="share on facebook"/>
              </div>
            </div>
          </Grid>
          <Grid item md={11} container className={classes.thanksBox} justify="flex-start" direction="column">
            <p className={classes.thanks}>Thanks for <br/> donating 🙏🏾</p>
            <div className={classes.linkBox}>
              <Button component={Link} to="/donate/id/pay"  className={classes.fundBtn} variant="contained" color="primary" >
                Fund Vault again
              </Button>
              <p className={classes.or}>OR</p>
              <Link className={classes.homeLink} to="/">GO HOME</Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.paddingSpace}></div>
      <Footer />
    </div>
  )
}

export default DonateThanksPage;
