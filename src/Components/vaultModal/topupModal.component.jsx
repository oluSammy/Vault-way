import React, { useState } from 'react';
import modalStyles from './modal.styles';
import DashboardBtn from '../DashboardBtn/DashboardBtn.component';
import ClearIcon from '@material-ui/icons/Clear';
import dashBoardPopupStyles from './../DashboardPopup/DashboardPopup.styles';
import vaultWayIcon from '../../assets/icons/vaultway-icon-small.png';
import masterCardIcon from '../../assets/icons/Mastercard.png';
import clsx from 'clsx';

const TopUpModal = ({ closeModal }) => {
  const classes = modalStyles();
  const inputStyles = dashBoardPopupStyles();
  const [values, setValues] = useState({topUp: '', amount: ''});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <div className={classes.root}>
      <div className={classes.cancelBox} onClick={closeModal}>
        <ClearIcon className={classes.cancel} />
      </div>
      <h2 className={classes.modalHeading}>I Want to top up the money in my vault</h2>
      <form action="#">
        <div className={inputStyles.inputContainer}>
          <label htmlFor="amount" className={inputStyles.inputLabel}>Enter amount to add</label>
          <div className={inputStyles.inputBox}>
            <p className={inputStyles.adorn}>NGN</p>
            <input className={inputStyles.inputField} name="amount" type="number" value={values.amount} onChange={handleChange} />
            <p className={inputStyles.adorn}>.00</p>
          </div>
        </div>
        <div className={classes.topUpBox}>
          <p className={classes.topUpTitle}>From</p>
          <div className={classes.labelBox}>
            <label className={clsx(classes.label, values.topUp === 'wallet' ? classes.activeLabel : '')} htmlFor="wallet">
              <input value="wallet" onChange={handleChange} className={classes.topUpInput} type="radio" name="topUp" id="wallet" />
              <p className={classes.labelBalance}>Wallet Balance</p>
              <div className={classes.labelBalanceBox}>
                <p className={classes.labelBalanceBank}>&#x20A6; 500,000.00</p>
                <img src={vaultWayIcon} alt="vaultway vault balance"/>
              </div>
            </label>
            <label className={clsx(classes.label, values.topUp === 'bank' ? classes.activeLabel : '')} htmlFor="bank">
              <input value="bank" onChange={handleChange} className={classes.topUpInput} type="radio" name="topUp" id="bank" />
              <p className={classes.labelBalance}>4960 **** **** *519</p>
              <div className={classes.labelBalanceBox}>
                <p className={classes.labelBalanceBank}>Access Bank</p>
                <img src={masterCardIcon} alt="vaultway vault balance"/>
              </div>
            </label>
          </div>
        </div>
        <div className={classes.btnContainer}>
          <DashboardBtn text="Top up from wallet" bg="#00A343" color="#ffffff" />
        </div>
      </form>
    </div>
  )
}

export default TopUpModal
