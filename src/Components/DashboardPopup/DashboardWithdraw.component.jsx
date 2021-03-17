import React from 'react';
import dashBoardPopupStyles from './DashboardPopup.styles';
import DashboardBtn from '../DashboardBtn/DashboardBtn.component';
import ClearIcon from '@material-ui/icons/Clear';
import cardImg from '../../assets/icons/Mastercard.png';

const DashboardWithdrawPopup = ({ closeModal }) => {
  const classes = dashBoardPopupStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cancelBox} onClick={closeModal}>
        <ClearIcon className={classes.cancel} />
      </div>
      <h3 className={classes.title}>I want to fund my <br/> wallet via bank card</h3>
      <div className={classes.inputContainer}>
        <label htmlFor="amount" className={classes.inputLabel}>Enter amount to add</label>
        <div className={classes.inputBox}>
          <p className={classes.adorn}>NGN</p>
          <input className={classes.inputField} type="number"/>
          <p className={classes.adorn}>.00</p>
        </div>
      </div>
      <p className={classes.destination}>From</p>
      <div className={classes.walletCard}>
        <p className={classes.walletName}>4960 **** **** *519</p>
        <div className={classes.walletFooter}>
          <p className={classes.walletBank}>Access Bank</p>
          <img src={cardImg} alt="fund wallet from acct"/>
        </div>
      </div>
      <div className={classes.dashboardBtnBox}>
        <DashboardBtn text="Top up from card" color="#ffffff" bg="#00A343" />
      </div>
    </div>
  )
}

export default DashboardWithdrawPopup
