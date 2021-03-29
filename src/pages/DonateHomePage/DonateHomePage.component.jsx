import React, { useEffect } from 'react'
import DonateCountdown from '../../Components/DonateCountdown/DonateCountdown.component';
import Message from '../../Components/Messgae/Message.component';
import Navbar from '../../Components/Navbar/Navbar.component';
import donateHomepageStyles from './donateHomePage.styles';
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



const DonateHomePage = () => {

  useEffect(() => {
      window.scrollTo(0, 0)
  }, []);

  const classes = donateHomepageStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <Navbar />
      <Message />
      <DonateCountdown />
      <Grid container justify="center" className={classes.fundDetailsBox}>
        <Grid item lg={3} md={matchesSm ? 5 : 3} className={classes.gridImg}>
          <div className={classes.imgBox}>
            <img className={classes.img} src={vaultImg} alt="donate"/>
          </div>
        </Grid>
        <Grid container justify="space-around"  item lg={8} md={8}>
          <Grid item md={5}>
            <div className={classes.raised}>
              <p className={classes.raisedText}>Raised</p>
              <p className={classes.raisedAmount}>180,000 <span className={classes.raisedAmount}>.00</span></p>
              <p className={classes.raisedAmountGoal}>Goal is 200,000.00</p>
              <Button component={Link} to="/"  className={classes.raisedBtn} variant="contained" color="primary" >
                Fund Vault
							</Button>
            </div>
          </Grid>
          <Grid item md={5}>
            <div className={classes.created}>
              <p className={classes.createdOn}>Created March 1, 2021.</p>
              <p className={classes.createdBy}>By Mike Oyekan</p>
              <p className={classes.donor}>25 Donors</p>
              <div className={classes.donorBox}>
                <img className={classes.donorImg} src={groupIcon} alt="img"/>
                <img className={classes.donorImg} src={groupIcon} alt="img"/>
                <img className={classes.donorImg} src={groupIcon} alt="img"/>
                <img className={classes.donorImg} src={groupIcon} alt="img"/>
                <img className={classes.donorImg} src={groupIcon} alt="img"/>
                <img className={classes.donorImg} src={groupIcon} alt="img"/>
              </div>
              <div className={classes.share}>
                <p className={classes.ShareTxt}>Share</p>
                <img className={classes.ShareImg}  src={fbIcon} alt="share on facebook"/>
                <img className={classes.ShareImg}  src={twitter} alt="share on facebook"/>
                <img className={classes.ShareImg}  src={mailIcon} alt="share on facebook"/>
                <img className={classes.ShareImg} src={whatsapp} alt="share on facebook"/>
              </div>
            </div>
          </Grid>
          <Grid item md={10}>
            <p className={classes.fundText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum asperiores voluptates harum non! Itaque delectus atque
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, totam quis perferendis voluptatum ullam nihil praesentium
              harum, excepturi in blanditiis facilis laboriosam enim
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default DonateHomePage
