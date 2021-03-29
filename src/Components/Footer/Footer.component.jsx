import React from 'react'
import footerStyles from './footer.styles';
import Grid from '@material-ui/core/Grid';
import ButtonCta from '../ButtonCta/ButtonCta.component';
import vaultWayLogo from '../../assets/icons/vault-way-logo.svg'
import { Link } from 'react-router-dom';
import twitterIcon from '../../assets/icons/twitter.png';
import fbIcon from '../../assets/icons/fb-icon.png';
import IGIcon from '../../assets/icons/instagram-icon.png';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Footer = () => {
  const classes = footerStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const year = new Date();
  return (
    <div className={classes.root}>
      <div className={classes.footerGreen}>
        <div className={classes.footerBtn}>
            <ButtonCta className={classes.btn} type="contained"
            text="Start Saving Now" paddingSide={matchesXS ? '12px' : '20px'} paddingX={matchesXS ? '5px' : '10px'}  />
          </div>
        <div className={classes.footerGreener}>
          <div className={classes.footerTxt}>
            <h6  className={classes.footerHeading} >
              Join Our community of <br/> savers today.
            </h6>
            <p  className={classes.footerSubHeading} >
                Take a big leap towards more <br/> financial freedom.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.footerContent}>
        <Grid container justify={matchesXS ? 'flex-start' : 'space-evenly'} >
          <Grid item lg={2} md={2} xs={4}>
            <div className={classes.test}>
              <img src={vaultWayLogo} className={classes.footerLogo} alt="vaultway logo"/>
            </div>
            <div className={classes.footerList}>
              <Link to="/dashboard" className={classes.footerLink}>Dashboard</Link>
              <Link to="/donate/id" className={classes.footerLink}>Donate</Link>
            </div>
          </Grid>
          <Grid item lg={2} md={2} xs={4}>
            <h6 className={classes.footerListHeading} >Products</h6>
              <div className={classes.footerList}>
                <Link to="/" className={classes.footerLink}>Tyro Vault</Link>
                <Link to="/" className={classes.footerLink}>Reaper Vault</Link>
                <Link to="/" className={classes.footerLink}>Ace Vault</Link>
                <Link to="/" className={classes.footerLink}>Stellar Vault</Link>
                <Link to="/" className={classes.footerLink}>Quick Vault</Link>
                <Link to="/" className={classes.footerLink}>FundMyVault</Link>
              </div>
          </Grid>
          <Grid item lg={2} md={2} xs={4}>
            <h6 className={classes.footerListHeading}>Company</h6>
            <div className={classes.footerList}>
                <Link to="/about#" className={classes.footerLink}>About</Link>
                <Link to="/faq" className={classes.footerLink}>FAQ</Link>
                <Link to="/" className={classes.footerLink}>Blog</Link>
                <Link to="/" className={classes.footerLink}>Partners</Link>
                <Link to="/" className={classes.footerLink}>Careers</Link>
              </div>
          </Grid>
          <Grid item lg={2} md={2} xs={4}>
            <h6 className={classes.footerListHeading}>Legal</h6>
            <div className={classes.footerList}>
                <Link to="/" className={classes.footerLink}>Privacy</Link>
                <Link to="/" className={classes.footerLink}>Terms</Link>
                <Link to="/" className={classes.footerLink}>Dispute</Link>
              </div>
          </Grid>
          <Grid item lg={2} md={2} xs={4}>
            <h6 className={classes.footerListHeading} >Reach Us</h6>
            <div className={classes.footerList}>
                <Link to="/" className={classes.footerLink}>vaultway@hello.com</Link>
                <Link to="/" className={classes.footerLink}>+234 807 3505 624</Link>
                <Link to="/" className={classes.footerLink}>10, Vaultway street, <br/> VI, Lagos</Link>
              </div>
          </Grid>
        </Grid>
        <div className={classes.extras}>
          <div className={classes.divider} />
          <div className={classes.extraContainer}>
            <p className={clsx(classes.extraText, classes.followText)} >Also Follow Us</p>
            <div className={classes.extraIcons}>
              <a className={classes.extraIconsLink} href="google.com">
                <img className={classes.extraIcon} src={twitterIcon} alt="vaultway twitter link"/>
              </a>
              <a className={classes.extraIconsLink} href="google.com">
                <img className={classes.extraIcon} src={fbIcon} alt="vaultway facebook link"/>
              </a>
              <a className={classes.extraIconsLink} href="google.com">
                <img className={classes.extraIcon} src={IGIcon} alt="vaultway instagram icon"/>
              </a>
            </div>
            <p className={clsx(classes.extraText, classes.copyText)} >
              Copyright &copy; {year.getFullYear()}, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
