import React from 'react'
import dashBoardPopupStyles from './DashboardPopup.styles';
import DashboardBtn from '../DashboardBtn/DashboardBtn.component';
import ClearIcon from '@material-ui/icons/Clear';

const DashboardFundPopup = ({ closeModal }) => {
  const classes = dashBoardPopupStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cancelBox} onClick={closeModal}>
        <ClearIcon className={classes.cancel} />
      </div>
      <h3 className={classes.title}>I want to withdraw to <br/> my bank account</h3>
      <div className={classes.inputContainer}>
        <label htmlFor="amount" className={classes.inputLabel}>Enter amount to withdraw</label>
        <div className={classes.inputBox}>
          <p className={classes.adorn}>NGN</p>
          <input className={classes.inputField} type="number"/>
          <p className={classes.adorn}>.00</p>
        </div>
      </div>
      <p className={classes.destination}>Destination Account</p>
      <p className={classes.name}>Ayodeji Osindele</p>
      <p className={classes.acct}>0029314394</p>
      <p className={classes.bank}>Gt bank</p>
      <div className={classes.dashboardBtnBox}>
        <DashboardBtn text="Withdraw to bank account" color="#ffffff" bg="#00A343" />
      </div>
    </div>
  )
}

export default DashboardFundPopup
