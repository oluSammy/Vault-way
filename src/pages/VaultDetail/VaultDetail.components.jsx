import React from 'react';
// import { useParams } from 'react-router-dom';
import vaultDetailStyles from './VaultDetail.styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import tyroIcon from '../../assets/icons/tyro-icon-small.png';
import dot from '../../assets/icons/dot.png';
import clsx from 'clsx';
import btnArrow from '../../assets/icons/withdraw-arrow.png';
import addIcon from '../../assets/icons/add-money-icon.png';
import { useHistory } from "react-router-dom";

const VaultDetail = () => {
  // let { id } = useParams();
  let history = useHistory();
  const classes = vaultDetailStyles();
  return (
    <div className={classes.root}>
      <div className={classes.arrowBack} onClick={() => history.goBack()}>
        <ArrowBackIcon className={classes.arrowBackIcon} />
      </div>
      <div className={classes.vaultOverview}>
        <Box position="relative" display="inline-flex">
          <CircularProgress variant="determinate" value={70} size={150} thickness={1} />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <div className={classes.completeBox}>
              <p className={classes.completeText}>
                <span className={classes.completePercent}>70%</span>  <br /> Complete
              </p>
            </div>
          </Box>
        </Box>
        <div className={classes.vaultTitleBox}>
          <h1 className={classes.vaultTitle}>Buy a Car</h1>
          <p className={classes.vaultDot}>
            <img className={classes.vaultTitleDot} src={dot} alt="active vault"/>
            <span className={classes.vaultTitleStatus}>You vault is active</span>
          </p>
          <div className={classes.vaultTitleIconBox}>
            <img className={classes.vaultTitleIcon} src={tyroIcon} alt="tyro vault"/>
            <p className={classes.vaultTitleText}>Tyro Vault</p>
          </div>
        </div>
        <div className={classes.balance}>
          <h6 className={classes.balanceTitle}>Current vault balance</h6>
          <p className={classes.balanceAmount}>
            <span className={clsx(classes.balanceSpan, classes.balanceMargin) }>NGN</span>
              200,000
            <span className={classes.balanceSpan}>.00</span>
          </p>
        </div>
      </div>
      <div className={classes.vaultSummary}>
        <h5 className={classes.vaultSummaryTitle}>Summary</h5>
        <div className={classes.vaultSummaryContainer}>
          <div className={classes.summaryContent}>
            <div className={classes.vaultSummaryTxt}>
              <p className={classes.summaryTitle}>Principal</p>
              <div className={classes.summaryDetail}>
                <p className={classes.summaryNumber}>200,000.00</p>
              </div>
            </div>
            <div className={classes.vaultSummaryTxt}>
              <p className={classes.summaryTitle}>Interest P/A </p>
              <div className={classes.summaryDetail}>
                <p className={clsx(classes.summaryNumber, classes.marginDetail) }>24,000.00</p>
                <p className={clsx(classes.summaryWithdraw, classes.marginDetail) }>You can withdraw your next <br/> interest on february 24, 2021 </p>
                <button className={classes.btnWithdraw}>
                  <div className={classes.subBtn}>20.000<span className={classes.subBtnKb}>.00</span>
                  <img src={btnArrow} alt="withdraw"/> </div>
                  <span className={classes.btnText}>1,000</span>
                  <span className={classes.btnLightTxt}>.00 x 4 months</span>
                </button>
              </div>
            </div>
            <div className={classes.vaultSummaryTxt}>
              <p className={classes.summaryTitle}>Start date</p>
              <div className={classes.summaryDetail}>
                <p className={classes.summaryNumber}>Febuary 24, 2021</p>
              </div>
            </div>
            <div className={classes.vaultSummaryTxt}>
              <p className={classes.summaryTitle}>Maturity date</p>
              <div className={classes.summaryDetail}>
                <p className={classes.summaryNumber}>Febuary 24, 2022 | 12:00 am</p>
              </div>
            </div>
            <div className={classes.vaultSummaryTxt}>
              <p className={classes.summaryTitle}>Frequency</p>
              <div className={classes.summaryDetail}>
                <p className={classes.summaryNumber}>Monthly</p>
              </div>
            </div>
            <div className={classes.vaultSummaryTxt}>
              <p className={classes.summaryTitle}>Funding Method</p>
              <div className={classes.summaryDetail}>
                <p className={classes.summaryNumber}>*******5678***</p>
              </div>
            </div>
          </div>
          <div className={classes.vaultSummaryBtn}>
            <button className={classes.withdrawBtn}>Withdraw from vault</button>
            <button className={classes.addMoneyBtn}>
              <span className={classes.spanText}>Add money</span>
              <div className={classes.iconBox}> <img src={addIcon} alt="add money"/> </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VaultDetail
