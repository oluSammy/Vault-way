import React, { useEffect } from 'react'
import signupStyles from './Signup.styles';
import vaultWayIcon from '../../assets/icons/vault-way-white-icon.png';
import ceoSignature from '../../assets/icons/ceo-signature.png';
import Grid from '@material-ui/core/Grid';
import pattern from '../../assets/icons/Pattern.png'
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
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
        <Grid container justify="space-evenly" alignItems="center" className={classes.signUpContent}>
          <img src={pattern} className={classes.pattern} alt=""/>
          <Grid container item lg={5} md={5} sm={6} direction="column" >
            <div className={classes.signUpTxtBox}>
              <h1 className={classes.signupHeading}>Welcome
                {matchesXS ? '' : <br />}  onboard</h1>
              <p className={classes.signupTxt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <img className={classes.signupImg} src={ceoSignature} alt="ceo signature"/>
              <p className={classes.signupCeo}>CEO, Vault Way</p>
            </div>
          </Grid>
          <Grid container item lg={5} md={5} sm={6}>
            <div className={classes.formContainer}>
              <form >
                <h3 className={classes.formHeading}>Create an account</h3>
                <p className={classes.formSubHeading}>
                  Sign up to start living the Vault Way life
                </p>
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

                <p className={classes.formTerms}>
                  By creating an account, you agree to our <br />
                  <Link className={classes.formLink} to="/">Terms and conditions</Link>
                </p>
                <Button className={classes.formBtn} style={{blendMode: 'normal'}} variant="contained" color="primary">Get Started</Button>
                <p style={{ marginTop: '7px' }} className={classes.help}>Already have an account?
                  <Link className={classes.signinLink} to="/login"> Sign in</Link>
                </p>
                <p className={classes.help}>Need Help?
                  <Link className={classes.helpLink} to="/"> Contact support</Link>
                </p>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
  )
}

export default Signup
