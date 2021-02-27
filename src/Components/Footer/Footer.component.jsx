import React from 'react'
import footerStyles from './footer.styles';
import Typography from '@material-ui/core/Typography';
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
            <Typography  className={classes.footerHeading} variant="h6" component="h6">
              Join Our community of <br/> savers today.
            </Typography>
            <Typography  className={classes.footerSubHeading} variant="body1" component="p">
                Take a big leap towards more <br/> financial freedom.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.footerContent}>
        <Grid container justify={matchesXS ? 'flex-start' : 'space-evenly'} >
          <Grid item lg={2} md={2}>
            <div className={classes.test}>
              <img src={vaultWayLogo} className={classes.footerLogo} alt="vault way logo"/>
            </div>
          </Grid>
          <Grid item lg={2} md={2} xs={4}>
            <Typography className={classes.footerListHeading} variant="h6" component="h6">Products</Typography>
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
            <Typography className={classes.footerListHeading} variant="h6" component="h6">Company</Typography>
            <div className={classes.footerList}>
                <Link to="/about#" className={classes.footerLink}>About</Link>
                <Link to="/faq" className={classes.footerLink}>FAQ</Link>
                <Link to="/" className={classes.footerLink}>Blog</Link>
                <Link to="/" className={classes.footerLink}>Partners</Link>
              </div>
          </Grid>
          <Grid item lg={2} md={2} xs={4}>
            <Typography className={classes.footerListHeading} variant="h6" component="h6">Legal</Typography>
            <div className={classes.footerList}>
                <Link to="/about#" className={classes.footerLink}>About</Link>
                <Link to="/" className={classes.footerLink}>Privacy</Link>
                <Link to="/" className={classes.footerLink}>Terms</Link>
                <Link to="/" className={classes.footerLink}>Dispute</Link>
              </div>
          </Grid>
          <Grid item lg={2} md={2} xs={4}>
            <Typography className={classes.footerListHeading} variant="h6" component="h6">Reach Us</Typography>
            <div className={classes.footerList}>
                <Link to="/" className={classes.footerLink}>Dispute</Link>
                <Link to="/" className={classes.footerLink}>+234 807 3505 624</Link>
                <Link to="/" className={classes.footerLink}>10, Vaultway street, <br/> VI, Lagos</Link>
              </div>
          </Grid>
        </Grid>
        <div className={classes.extras}>
          <div className={classes.divider} />
          <div className={classes.extraContainer}>
            <Typography className={clsx(classes.extraText, classes.followText)} variant="body2" component="p">Also Follow Us</Typography>
            <div className={classes.extraIcons}>
              <a className={classes.extraIconsLink} href="google.com">
                <img className={classes.extraIcon} src={twitterIcon} alt="vault way twitter link"/>
              </a>
              <a className={classes.extraIconsLink} href="google.com">
                <img className={classes.extraIcon} src={fbIcon} alt="vault way facebook link"/>
              </a>
              <a className={classes.extraIconsLink} href="google.com">
                <img className={classes.extraIcon} src={IGIcon} alt="vault way instagram icon"/>
              </a>
            </div>
            <Typography className={clsx(classes.extraText, classes.copyText)} variant="body2" component="p">
              Copyright &copy; {year.getFullYear()}, All Right Reserved
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
