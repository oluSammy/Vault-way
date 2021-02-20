import React from 'react'
import signupStyles from './Signup.styles';
import vaultWayIcon from '../../assets/icons/vault-way-white-icon.png';
import ceoSignature from '../../assets/icons/ceo-signature.png';
import Grid from '@material-ui/core/Grid';
import pattern from '../../assets/icons/Pattern.png'
import Typography from '@material-ui/core/Typography';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const Signup = () => {
  const classes = signupStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
      <div className={classes.root}>
        <div className={classes.iconBox}>
          <Link to="/">
            <img src={vaultWayIcon} className={classes.vaultWayIcon} alt="vault way icon"/>
          </Link>
        </div>
        <Grid container justify="space-evenly" alignItems="center" direction={matchesXS ? 'column-reverse' : 'row'} className={classes.signUpContent}>
          <img src={pattern} className={classes.pattern} alt=""/>
          <Grid container item lg={5} md={5} sm={6} direction="column" >
            <div className={classes.signUpTxtBox}>
              <Typography className={classes.signupHeading} variant="h1" component="h1">Welcome <br /> onboard</Typography>
              <Typography className={classes.signupTxt} variant="subtitle1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Typography>
              <img className={classes.signupImg} src={ceoSignature} alt="ceo signature"/>
              <Typography className={classes.signupCeo} variant="subtitle1" component="p">CEO, Vault Way</Typography>
            </div>
          </Grid>
          <Grid container item lg={5} md={5} sm={6}>
            <div className={classes.formContainer}>
              <form >
                <Typography className={classes.formHeading} variant="h3" component="h3">Create an account</Typography>
                <Typography className={classes.formSubHeading} variant="subtitle2" component="p">
                  Sign up to start living the Vault Way life
                </Typography>
                <FormControl className={classes.formInput}>
                  <label className={classes.label} htmlFor="name">Full Name</label>
                  <Input
                    id="name"
                    type="text"
                    endAdornment={<InputAdornment position="end">
                      <CheckCircleIcon className={classes.formIcon} /></InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    placeholder="Enter your name"
                    style={{marginBottom: matchesXS ? '30px' : '14px'}}
                  />
                </FormControl>
                <FormControl className={classes.formInput}>
                  <label className={classes.label} htmlFor="email">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    endAdornment={<InputAdornment position="end">
                      <CheckCircleIcon className={classes.formIcon} /></InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    placeholder="Enter your email address"
                    style={{marginBottom: matchesXS ? '30px' : '14px'}}
                  />
                </FormControl>
                <FormControl className={classes.formInput}>
                  <label className={classes.label} htmlFor="password">Password</label>
                  <Input
                    id="password"
                    type="password"
                    endAdornment={<InputAdornment position="end">
                      <VisibilityOffIcon className={classes.formIcon} /></InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    placeholder="Enter your Password"
                    style={{marginBottom: matchesXS ? '30px' : '14px'}}
                  />
                </FormControl>
                <FormControl className={classes.formInput}>
                  <label className={classes.label} htmlFor="confirm-pass">Confirm Password</label>
                  <Input
                    id="confirm-pass"
                    type="password"
                    endAdornment={<InputAdornment position="end">
                      <VisibilityIcon className={classes.formIcon} /></InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    placeholder="Confirm password"
                    style={{marginBottom: matchesXS ? '30px' : '14px'}}
                  />
                </FormControl>

                <Typography className={classes.formTerms} variant="subtitle2" component="a">
                  By creating an account, you agree to our <br />
                  <Link className={classes.formLink} to="/">Terms and conditions</Link>
                </Typography>
                <Button className={classes.formBtn} style={{blendMode: 'normal'}} variant="contained" color="primary">Get Started</Button>
                <Typography style={{ marginTop: '7px' }} className={classes.help} variant="subtitle2" component="p">Already have an account?
                  <Link className={classes.signinLink} to="/login"> Sign in</Link>
                </Typography>
                <Typography className={classes.help} variant="subtitle2" component="p">Need Help?
                  <Link className={classes.helpLink} to="/"> Contact support</Link>
                </Typography>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
  )
}

export default Signup
