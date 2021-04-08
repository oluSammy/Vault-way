import React from 'react'
import vaultDetailStyles from '../VaultDetail/VaultDetail.styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import tyroIcon from '../../assets/icons/tyro-icon-small.png';
import dot from '../../assets/icons/dot.png';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import adminViewVaultStyles from './AdminViewVault.styles';

const AdminViewVault = () => {
  const classes = vaultDetailStyles();
  const newClass = adminViewVaultStyles();
  let history = useHistory();
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
              </div>
            </div>
            <div className={classes.vaultSummaryTxt}>
              <p className={newClass.interestTxt} >Month 1 interest </p>
              <div>
                <p className={clsx(newClass.interestNumber, classes.marginDetail) }>20,000.00</p>
              </div>
            </div>
            <div className={classes.vaultSummaryTxt}>
              <p className={newClass.interestTxt} >Month 1 interest </p>
              <div>
                <p className={clsx(newClass.interestNumber, classes.marginDetail) }>20,000.00</p>
              </div>
            </div>
            <div className={classes.vaultSummaryTxt}>
              <p className={newClass.interestTxt} >Month 1 interest </p>
              <div>
                <p className={clsx(newClass.interestNumber, classes.marginDetail) }>20,000.00</p>
              </div>
            </div>
            <div className={classes.vaultSummaryTxt}>
              <p className={newClass.interestTxt} >Month 1 interest </p>
              <div>
                <p className={clsx(newClass.interestNumber, classes.marginDetail) }>20,000.00</p>
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

        </div>
      </div>
    </div>
  )
}

export default AdminViewVault
