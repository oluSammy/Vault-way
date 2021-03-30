import React, { useEffect } from 'react'
import donateFormStyles from './DonateForm.styles';
import DonateCountdown from '../../Components/DonateCountdown/DonateCountdown.component';
import Message from '../../Components/Messgae/Message.component';
import Navbar from '../../Components/Navbar/Navbar.component';
import donateHomepageStyles from '../DonateHomePage/donateHomePage.styles';
import Grid from '@material-ui/core/Grid';
import vaultImg from '../../assets/img/fundMyVault.png';
import Button from '@material-ui/core/Button';
import groupIcon from '../../assets/img/Group 4158.png'
// import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from '../../Components/Footer/Footer.component';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const DonateForm = () => {
  const classes = donateFormStyles();
  const donateStyles = donateHomepageStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  let history = useHistory();
  // const [values, setValues] = useState({ firstName: '', lastName: '', email: '', phoneNo: '', cardNo: '',  })

  useEffect(() => {
      window.scrollTo(0, 0)
  }, []);
  return (
    <div className={donateStyles.root}>
      <Navbar />
      <Message />
      <DonateCountdown />
      <Grid container justify="center" className={donateStyles.fundDetailsBox}>
        <Grid item md={11} sm={12} xs={12}>
          <div className={classes.arrowBox} onClick={() => history.goBack()}>
            <ArrowBackIcon className={classes.arrowIcon} />
          </div>
        </Grid>
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
            </div>
          </Grid>
          <Grid item md={10}>
            <div className={classes.amountBox}>
              <p className={classes.label}>Enter An Amount</p>
              <div className={classes.amount}>
                <p className={classes.amountCurrency}>NGN</p>
                <input className={classes.amountInput} type="number" name="amount" id="amount" />
                <p className={classes.amountCurrency}>.00</p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container item md={11} className={classes.formBox} justify="space-between">
          <Grid className={classes.formGroup} item md={5} sm={12} xs={12}>
            <div className={classes.inputBox}>
              <label className={classes.formLabel} htmlFor="name">First Name</label>
              <input type="text" className={classes.formInput} />
            </div>
          </Grid>
          <Grid className={classes.formGroup} item md={5} sm={12} xs={12}>
            <div className={classes.inputBox}>
                <label className={classes.formLabel} htmlFor="name">Last Name</label>
                <input type="text" className={classes.formInput} />
            </div>
          </Grid>
          <Grid className={classes.formGroup} item md={5} sm={12} xs={12}>
            <div className={classes.inputBox}>
                <label className={classes.formLabel} htmlFor="name">Email</label>
                <input type="email" className={classes.formInput} />
            </div>
          </Grid>
          <Grid className={classes.formGroup} item md={5} sm={12} xs={12}>
            <div className={classes.inputBox}>
                <label className={classes.formLabel} htmlFor="name">Mobile Phone Number</label>
                <input type="text" className={classes.formInput} />
            </div>
          </Grid>
          <Grid className={classes.formGroup} item md={12} sm={12} xs={12}>
            <div className={classes.inputBox}>
                <label className={classes.formLabel} htmlFor="name">Debit Card Number</label>
                <input type="text" className={classes.formInput} />
            </div>
          </Grid>
          <Grid className={classes.formGroup} item md={5} sm={12} xs={12}>
            <div className={classes.inputBox}>
              <label className={classes.formLabel} htmlFor="name">Expire</label>
              <input type="text" className={classes.formInput} />
            </div>
          </Grid>
          <Grid className={classes.formGroup} item md={5} sm={12} xs={12}>
            <div className={classes.inputBox}>
              <label className={classes.formLabel} htmlFor="name">CVV</label>
              <input type="text" className={classes.formInput} />
            </div>
          </Grid>
          <Grid className={classes.formGroup} item md={12} sm={12} xs={12}>
            <Button className={classes.btn} variant="contained" color="primary">
              Fund Vault
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default DonateForm
