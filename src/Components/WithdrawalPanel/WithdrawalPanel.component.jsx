import React from 'react'
import withdrawalPanelStyles from './WithdrawalPanel.styles';
import clsx from 'clsx';
import DashboardBtn from '../DashboardBtn/DashboardBtn.component';

const WithdrawalPanel = () => {
  const classes = withdrawalPanelStyles();
  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <div className={classes.formInput}>
          <label className={classes.formLabel} htmlFor="acct">Enter Your Account Number</label>
          <input type="text" className={classes.inputField} id="acct" />
        </div>
        <div className={classes.formInput}>
          <label className={classes.formLabel} htmlFor="bank">Select Bank</label>
          <select className={clsx(classes.inputField, classes.select) } id="month">
              <option value="">January</option>
              <option value="lime">February</option>
              <option value="coconut">March</option>
              <option value="mango">April</option>
            </select>
        </div>
        <div className={classes.formBtnBox}>
          <DashboardBtn text="verify Account" bg="#CECECE" color="#F9F9F9" />
        </div>
      </form>

      <div className={classes.saveAcct}>
        <p className={classes.saveAcctName}>Ayodeji Osindele</p>
        <p className={classes.saveAcctTxt}>0029314394</p>
        <p className={classes.saveAcctTxt}>Gt bank</p>
        <form className={classes.formAcct} >
        <div className={classes.formInput}>
          <label className={classes.formLabel} htmlFor="pass">Enter your password to confirm ***</label>
          <input type="password" className={classes.inputField} id="pass" />
        </div>
        <div className={classes.formBtnBox}>
          <DashboardBtn text="Save Withdrawal account" bg="#00A343" color="#F9F9F9" />
        </div>
        </form>
      </div>

      <div className={classes.withdrawalCard}>
        <div className={classes.withdrawalCardDotsBox} >
          <p  className={classes.withdrawalCardDots}>...</p>
        </div>
        <p  className={classes.withdrawalCardName}>Ayodeji Osindele</p>
        <p  className={classes.withdrawalCardNumber}>0029314394</p>
        <p  className={classes.withdrawalCardNumber}>Gt bank</p>
      </div>
    </div>
  )
}

export default WithdrawalPanel
