import React from 'react'
import vaultWayIcon from '../../assets/icons/vault-way-white-icon.png';
import Grid from '@material-ui/core/Grid';
import pattern from '../../assets/icons/Pattern.png'
import Typography from '@material-ui/core/Typography';
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
              <Typography className={classes.signupHeading} variant="h1" component="h1"
                style={{ marginBottom: matchesXS ?  '2px' : '' }}
              >Welcome Back</Typography>
              <Typography className={classes.signupTxt} variant="subtitle1" component="p"
                style={{ marginBottom: matchesXS ?  '2px' : '' }}
              >
              Glad to have you back, keep making money moves
              </Typography>
            </div>
          </Grid>
          <Grid container item lg={5} md={5} sm={6}>
            <div className={classes.formContainer}>
              <form >
                <Typography className={classes.formHeading} variant="h3" component="h3">Sign in to continue</Typography>
                <Typography className={classes.formSubHeading} variant="subtitle2" component="p">
                  The Vault’s high level security protects you
                </Typography>
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
                <Typography className={classes.formTerms} variant="subtitle2" component="p">
                  <Link className={classes.formLink} to="/">Forgot Password</Link>
                </Typography>
                <Button className={classes.formBtn} style={{blendMode: 'normal'}} variant="contained" color="primary">Sign In</Button>
                <Typography style={{ marginTop: '7px', opacity: .9991, fontWeight: '600' }} className={classes.help}
                  variant="subtitle2" component="p">New User?
                  <Link className={classes.signinLink} to="/signup"> Create an account</Link>
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
