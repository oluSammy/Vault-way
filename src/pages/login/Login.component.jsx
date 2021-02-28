import React from 'react'
import vaultWayIcon from '../../assets/icons/vault-way-white-icon.png';
import Grid from '@material-ui/core/Grid';
import pattern from '../../assets/icons/Pattern.png'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import VisibilityIcon from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import signupStyles from './../Signup/Signup.styles';



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
        <Grid container justify="space-evenly" alignItems="center" className={classes.signUpContent}>
          <img src={pattern} className={classes.pattern} alt=""/>
          <Grid container item lg={5} md={5} sm={6} direction="column" >
            <div className={classes.signUpTxtBox}>
              <h1 className={classes.signupHeading}
                style={{ marginBottom: matchesXS ?  '2px' : '' }}
              >Welcome Back</h1>
              <p className={classes.signupTxt}
                style={{ marginBottom: matchesXS ?  '2px' : '' }}
              >
              Glad to have you back, keep making money moves
              </p>
            </div>
          </Grid>
          <Grid container item lg={5} md={5} sm={6}>
            <div className={classes.formContainer}>
              <form >
                <h3 className={classes.formHeading}>Sign in to continue</h3>
                <p className={classes.formSubHeading}>
                  The Vault’s high level security protects you
                </p>
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
                <p className={classes.formTerms} >
                  <Link className={classes.formLink} to="/">Forgot Password</Link>
                </p>
                <Button className={classes.formBtn} style={{blendMode: 'normal'}} variant="contained" color="primary">Sign In</Button>
                <p style={{ marginTop: '7px', opacity: .9991, fontWeight: '600' }} className={classes.help}>New User?
                  <Link className={classes.signinLink} to="/signup"> Create an account</Link>
                </p>
                <p className={classes.help} >Need Help?
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
