import React, { useEffect } from 'react'
import dashboardHomeStyles from './DashboardHome.component.styles';
import walletIcon from '../../assets/icons/wallet-icon.png';
import balanceIcon from '../../assets/icons/dashboard-vault-icon.png';
import savingsIcon from '../../assets/icons/savings-icon.png';
import DashboardMenu from './../../Components/DashboardMenu/DashboardMenu.component';
import ChartOne from './../../Components/DashboardChart/DashboardChart.component';
import TooltipSlider from './../../Components/TooltipSlider/TooltipSlider.component';
import referralImg from '../../assets/img/referral.png';

const DashboardHome = () => {
  const classes = dashboardHomeStyles();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.balanceContainer}>
        <div className={classes.balance}>
          <div className={classes.balanceTop}>
            <h5 className={classes.balanceTitle}>Wallet Ballance</h5>
            <div className={classes.balanceIconBox}>
              <img src={walletIcon} className={classes.balanceIcon} alt="vaultway wallet icon"/>
            </div>
          </div>
          <div className={classes.balanceBottom}>
            <p className={classes.amount}>
              <span className={classes.naira}>&#x20A6;</span>
                <span className={classes.amountSpan}>200,000</span>
              <span className={classes.kobo}>.00</span>
            </p>
          </div>
        </div>
        <div className={classes.balance}>
          <div className={classes.balanceTop}>
            <h5 className={classes.balanceTitle}>Vault Balance</h5>
            <div className={classes.balanceIconBox}>
              <img src={savingsIcon} className={classes.balanceIcon} alt="vaultway wallet icon"/>
            </div>
          </div>
          <div className={classes.balanceBottom}>
            <p className={classes.amount}>
              <span className={classes.naira}>&#x20A6;</span>
              <span className={classes.amountSpan}>150,000</span>
              <span className={classes.kobo}>.00</span>
            </p>
          </div>
        </div>
        <div className={classes.balance}>
          <div className={classes.balanceTop}>
            <h5 className={classes.balanceTitle}>Vault Created</h5>
            <div className={classes.balanceIconBox}>
              <img src={balanceIcon} className={classes.balanceIcon} alt="vaultway wallet icon"/>
            </div>
          </div>
          <div className={classes.balanceBottom}>
            <p className={classes.amount}>
              <span className={classes.amountSpan}>5</span>
              <span className={classes.kobo}>vault(s)</span>
            </p>
          </div>
        </div>
        <div className={classes.wallet}>
          <div className={classes.walletContent}>
            <div className={classes.walletTop}>
              <div className={classes.walletIconBox}>
                <img src={walletIcon} className={classes.balanceIcon}  alt="vaultway fund wallet icon"/>
              </div>
              <h5 className={classes.walletHeading}>Fund Wallet</h5>
            </div>
            <p className={classes.walletBank}>Wema Bank</p>
            <p className={classes.walletAcct}>0029314394</p>
          </div>
          <button className={classes.walletAction}>+</button>
        </div>
      </div>
      <div className={classes.quick}>
        <h3 className={classes.quickHeading}>Quick Actions</h3>
        <DashboardMenu />
      </div>
      <div className={classes.dashboardDetails}>
        <div className={classes.dashboardChart}>
          <h2 className={classes.chartTitle}>How you are doing so far</h2>
          <ChartOne />
        </div>
        <div className={classes.dashboardPart}>
          <div>
            <h6 className={classes.tooltipHeading}>Tool tip</h6>
            <TooltipSlider />
          </div>
          <div className={classes.referral}>
            <h4 className={classes.referralHeading}>Earn <span className={classes.referralSpan}>&#x20A6;500</span> per referral</h4>
            <figure className={classes.referralImgBox}></figure>
            <img src={referralImg} className={classes.referralImg} alt="earn referral"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
