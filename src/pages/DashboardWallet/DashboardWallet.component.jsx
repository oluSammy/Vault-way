import React, { useState } from 'react'
import dashboardWalletStyles from './DashboardWallet.styles';
import clsx from 'clsx';
import withdrawIcon from '../../assets/icons/withdraw-icon.png';
import copyIcon from '../../assets/icons/copy-icon-green.png';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import bankCardIcon from '../../assets/icons/bank-card-icon.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DashboardFundPopup from '../../Components/DashboardPopup/DashboardFundPopup.component';
import DashboardWithdrawPopup from './../../Components/DashboardPopup/DashboardWithdraw.component';



const DashboardWallet = () => {
  const classes = dashboardWalletStyles();
  const [open, setOpen] = useState(false);
  const [openFUndModal, setOpenFUndModal] = useState(false);
  const [openWithdrawalModal, setOpenWithdrawalModal] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText('0029314394');
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleOpenFUndModal = () => {
    setOpenFUndModal(true);
  };

  const handleCloseFUndModal = () => {
    setOpenFUndModal(false);
  };

  const handleOpenWithdrawalModal = () => {
    setOpenWithdrawalModal(true);
  };

  const handleCloseWithdrawalModal = () => {
    setOpenWithdrawalModal(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.walletTop}>
        <div className={classes.balance}>
          <h3 className={classes.balanceHeading}> Total Wallet Ballance</h3>
          <div className={classes.balanceFooter}>
            <span className={classes.balanceNaira}>&#x20A6;</span>
            <span className={classes.balanceAmount}>152,500</span>
            <span className={classes.balanceNaira}>.00</span>
          </div>
        </div>
        <div className={classes.withdraw} onClick={handleOpenWithdrawalModal}>
          <h6 className={classes.withdrawTitle}>Withdraw to bank</h6>
          <img src={withdrawIcon} alt="withdraw fund"/>
        </div>
      </div>
      <div className={clsx(classes.walletTop, classes.fund)}>
        <div className={classes.balance}>
          <h4 className={classes.bankTransfer}>Fund Wallet via bank transfer</h4>
          <div className={classes.transferContainer}>
            <div className={classes.transferBox}>
              <h6 className={classes.transferTitle}>Wema Bank</h6>
              <p className={classes.transferSubTitle}>Bank name</p>
            </div>
            <div className={classes.transferBox}>
              <Tooltip title="Copy to clipboard" placement="top">
                <div className={classes.transferBoxTop} onClick={handleClick}>
                  <h6 className={clsx(classes.transferTitle, classes.transferTitleGreen)}>0029314394</h6>
                  <img src={copyIcon} className={classes.transferIcon} alt="copy account number"/>
                </div>
              </Tooltip>
              <p className={classes.transferSubTitle}>Account number</p>
            </div>
            <div className={classes.transferBox}>
              <h6 className={classes.transferTitle}>Ayodeji Osindele</h6>
              <p className={classes.transferSubTitle}>Account name</p>
            </div>
          </div>
        </div>
        <div className={classes.bankCard} onClick={handleOpenFUndModal}>
          <h6 className={classes.bankCardTitle}>Fund Wallet via <br/> bank Card</h6>
          <div className={classes.bankCardIcons}>
            <img src={bankCardIcon} alt="Fund Wallet via bank Card"/>
            <ArrowForwardIcon className={classes.bankCardArrow} />
          </div>
        </div>
      </div>
      <div className={classes.historyBox}>
        <h3 className={classes.historyTitle}>History</h3>
        <div className={classes.historyContainer}>
          <CallMadeIcon className={clsx(classes.historyIcon, classes.historyIconUp)} />
          <div className={classes.historyNameBox}>
            <p className={classes.historyName}>Withdraw to Osindele Ayodeji</p>
            <p className={classes.historyStatus}>Completed</p>
          </div>
          <div className={classes.historyDateBox}>
            <p className={classes.historyDate}>Jan 05, 2021</p>
            <p className={classes.historyAmount}>&#x20A6; 50,000</p>
          </div>
        </div>
        <div className={classes.historyContainer}>
          <CallReceivedIcon className={clsx(classes.historyIcon, classes.historyIconDown)} />
          <div className={classes.historyNameBox}>
            <p className={classes.historyName}>Withdraw to Osindele Ayodeji</p>
            <p className={classes.historyStatus}>From Card</p>
          </div>
          <div className={classes.historyDateBox}>
            <p className={classes.historyDate}>Jan 05, 2021</p>
            <p className={classes.historyAmount}>&#x20A6; 50,000</p>
          </div>
        </div>
        <div className={classes.historyContainer}>
          <CallReceivedIcon className={clsx(classes.historyIcon, classes.historyIconDown)} />
          <div className={classes.historyNameBox}>
            <p className={classes.historyName}>Withdraw to Osindele Ayodeji</p>
            <p className={classes.historyStatus}>From Card</p>
          </div>
          <div className={classes.historyDateBox}>
            <p className={classes.historyDate}>Jan 05, 2021</p>
            <p className={classes.historyAmount}>&#x20A6; 50,000</p>
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message="Account Number copied to clipboard"
        TransitionComponent={Slide}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openFUndModal}
        onClose={handleCloseFUndModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openFUndModal}>
          <DashboardFundPopup closeModal={handleCloseFUndModal} />
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openWithdrawalModal}
        onClose={handleCloseWithdrawalModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openWithdrawalModal}>
          <DashboardWithdrawPopup closeModal={handleCloseWithdrawalModal}  />
        </Fade>
      </Modal>
    </div>
  )
}

export default DashboardWallet
