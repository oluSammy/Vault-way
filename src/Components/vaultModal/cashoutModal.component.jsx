import React from 'react'
import modalStyles from './modal.styles';
import diligentSaverImg from '../../assets/img/diligent-saver-img.png';
import DashboardBtn from '../DashboardBtn/DashboardBtn.component';
import ClearIcon from '@material-ui/icons/Clear';

const CashOutModal = ({ closeModal }) => {
  const classes = modalStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cancelBox} onClick={closeModal}>
        <ClearIcon className={classes.cancel} />
      </div>
      <div className={classes.imgContainer}>
        <img className={classes.imgContainer} src={diligentSaverImg} alt="vaultway diligent saver"/>
      </div>
      <p className={classes.mainText}>
        Shoutout to you Ayodeji, 👍🏾
        you have sucessfully completed your 2months Tyro vault. &nbsp;
        <span className={classes.mainSpan}>We award you “diligent saver”</span>
      </p>
      <div className={classes.balanceBox}>
        <p className={classes.balanceTitle}>Withdraw current vault balance</p>
        <p className={classes.balanceAmount}>
          <span className={classes.balanceTitleSpan}>NGN &nbsp;</span>
          224,000
          <span className={classes.balanceTitleSpan}>.00</span>
        </p>
      </div>
      <DashboardBtn text="Cashout to wallet" bg="#00A343" color="#ffffff" />
    </div>
  )
}

export default CashOutModal
