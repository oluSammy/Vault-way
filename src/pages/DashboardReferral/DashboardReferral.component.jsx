import React from 'react'
import dashboardReferralStyles from './DashboardReferral.styles';
import copyIcon from '../../assets/icons/copy-icon.png';
import fbIcon from '../../assets/icons/facebook-btn-icon.png';
import mail from '../../assets/icons/mail-btn-icon.png';
import whatsApp from '../../assets/icons/whatsapp-btn-icon.png';
import twitterIcon from '../../assets/icons/twitter-btn-icon.png';

const DashboardReferral = () => {
  const classes = dashboardReferralStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.referralHeading}>Invite your friends <br/> and family to use <br/> Vault way</h1>
      <h2 className={classes.referralSubHeading}>Earn &#x20A6;500 per referral</h2>
      <div className={classes.copyBox}>
        <h6 className={classes.copyBoxTitle}>Copy the code ✌🏾 </h6>
        <div className={classes.copyBoxAction}>
          <h2 className={classes.copyBoxCode}>AYODE52JI12</h2>
          <img src={copyIcon} alt="copy to clipboard"/>
        </div>
      </div>
      <div className={classes.share}>
        <h6 className={classes.shareTitle}>Sharing the code would go a long</h6>
        <div className={classes.shareBtnBox}>
          <a href="/" className={classes.shareBtn} style={{background: '#1E33E5'}}>
            <img src={fbIcon} alt="facebook share"/>
            <p className={classes.shareText}>Facebook</p>
          </a>
          <a href="/" className={classes.shareBtn} style={{background: '#61C3E2'}}>
            <img src={twitterIcon} alt="twitter share"/>
            <p className={classes.shareText}>Twitter</p>
          </a>
          <a href="/" className={classes.shareBtn} style={{background: '#53C258'}}>
            <img src={whatsApp} alt="whatsapp share"/>
            <p className={classes.shareText}>Whatsapp</p>
          </a>
          <a href="/" className={classes.shareBtn} style={{background: '#AAAAAA'}}>
            <img src={mail} alt="facebook share"/>
            <p className={classes.shareText}>Email &nbsp; &nbsp;</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DashboardReferral
