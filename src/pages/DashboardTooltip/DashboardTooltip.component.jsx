import React from 'react'
import dashboardTooltipStyles from './DashboardTooltip.styles';
import fundImg from '../../assets/img/tooltip-fund.png';
import acctImg from '../../assets/img/tooltip-accountSafe.png';
import appUpdate from '../../assets/img/tooltip-update.png';

const DashboardTooltip = () => {
  const classes = dashboardTooltipStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.tooltipHeading}>Using Vault way <br/> is just super easy</h1>
      <div className={classes.tooltipContainer}>
        <div className={classes.tooltipBox}>
          <div className={classes.tooltipContent}>
            <div className={classes.tooltipImgBox}>
              <img src={fundImg} className={classes.tooltipImg} alt="fund your vault tutorial"/>
            </div>
            <h6 className={classes.tutorial}>Tutorial</h6>
            <p className={classes.tutorialTitle}>How to fund your Vault way wallet with your card</p>
          </div>
        </div>
        <div className={classes.tooltipBox}>
          <div className={classes.tooltipContent}>
            <div className={classes.tooltipImgBox}>
              <img src={acctImg} className={classes.tooltipImg} alt="fund your vault tutorial"/>
            </div>
            <h6 className={classes.tutorial}>Tutorial</h6>
            <p className={classes.tutorialTitle}>Keep your account safe from fraudsters</p>
          </div>
        </div>
        <div className={classes.tooltipBox}>
          <div className={classes.tooltipContent}>
            <div className={classes.tooltipImgBox}>
              <img src={appUpdate} className={classes.tooltipImg} alt="fund your vault tutorial"/>
            </div>
            <h6 className={classes.tutorial}>Tutorial</h6>
            <p className={classes.tutorialTitle}>App update; <br/> what’s new.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardTooltip
