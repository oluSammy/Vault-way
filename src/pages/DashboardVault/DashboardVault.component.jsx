import React from 'react'
import dashboardHomeStyles from '../DashboardHome/DashboardHome.component.styles';
import dashboardVaultStyles from './DashboardVault.styles';
import walletIcon from '../../assets/icons/wallet-icon.png';
import balanceIcon from '../../assets/icons/dashboard-vault-icon.png';
import savingsIcon from '../../assets/icons/savings-icon.png';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const DashboardVault = () => {
  const classes = dashboardVaultStyles();
  const newClass = dashboardHomeStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <div className={newClass.balanceContainer}>
        <div className={newClass.balance}>
          <div className={newClass.balanceTop}>
            <h5 className={newClass.balanceTitle}>Total Vault Balance</h5>
            <div className={newClass.balanceIconBox}>
              <img src={walletIcon} className={newClass.balanceIcon} alt="vaultway wallet icon"/>
            </div>
          </div>
          <div className={newClass.balanceBottom}>
            <p className={newClass.amount}>
              <span className={newClass.naira}>&#x20A6;</span>
                <span className={newClass.amountSpan}>152,500</span>
              <span className={newClass.kobo}>.00</span>
            </p>
          </div>
        </div>
        <div className={newClass.balance}>
          <div className={newClass.balanceTop}>
            <h5 className={newClass.balanceTitle}>Principal</h5>
            <div className={newClass.balanceIconBox}>
              <img src={savingsIcon} className={newClass.balanceIcon} alt="vaultway wallet icon"/>
            </div>
          </div>
          <div className={newClass.balanceBottom}>
            <p className={newClass.amount}>
              <span className={newClass.naira}>&#x20A6;</span>
              <span className={newClass.amountSpan}>150,000</span>
              <span className={newClass.kobo}>.00</span>
            </p>
          </div>
        </div>
        <div className={newClass.balance}>
          <div className={newClass.balanceTop}>
            <h5 className={newClass.balanceTitle}>Interest earned</h5>
            <div className={newClass.balanceIconBox}>
              <img src={balanceIcon} className={newClass.balanceIcon} alt="vaultway wallet icon"/>
            </div>
          </div>
          <div className={newClass.balanceBottom}>
            <p className={newClass.amount}>
              <span className={newClass.naira}>&#x20A6;</span>
              <span className={newClass.amountSpan}>2,500</span>
              <span className={newClass.kobo}>.00</span>
            </p>
          </div>
        </div>
        <div className={clsx(newClass.wallet, classes.new)} >
          <p className={classes.createIcon}>+</p>
          <p className={classes.createText}>Create New Vault</p>
        </div>
      </div>
      <h6 className={classes.myVaultHeading}>My Vaults</h6>
      <div className={classes.myVaultBox}>
        <Link to="/dashboard/vaults/carId" className={classes.myVaultContainer}>
          <div className={classes.myVaultWrapper}>
            <div className={classes.myVaultContent}>
              <div className={classes.myVaultName}>
                <h5 className={clsx(classes.myVaultTitle, classes.titleMargin) }>Buy A Car</h5>
                <p className={classes.myVaultType}>Regular Vault- Tyro Vault</p>
              </div>
              <div className={classes.myVaultStatus}>
                <h5 className={clsx(classes.myVaultType, classes.titleMargin)}>Current  Balance</h5>
                <p className={classes.myVaultTitle}>&#x20A6; 240,000</p>
              </div>
            </div>
            <p className={classes.myVaultCashOut}>Cashout on 25th January, 2021</p>
            <div>
              {matchesMd ?
              <div>
                <LinearProgress variant="determinate" value={70} className={classes.myVaultProgress} />
                <p className={classes.myVaultComplete}>70% complete</p>
              </div> :
              <Box display="flex" alignItems="center">
                <Box width="90%" mr={1}>
                  <LinearProgress variant="determinate" value={70} className={classes.myVaultProgress} />
                </Box>
                <Box minWidth={35}>
                  <p className={classes.myVaultComplete}>70% complete</p>
                </Box>
              </Box>}
            </div>
          </div>
        </Link>
        <Link to="/dashboard/vaults/npmId" className={classes.myVaultContainer}>
          <div className={classes.myVaultWrapper}>
            <div className={classes.myVaultContent}>
              <div className={classes.myVaultName}>
                <h5 className={clsx(classes.myVaultTitle, classes.titleMargin) }>Pay my rent</h5>
                <p className={classes.myVaultType}>Quick Vault</p>
              </div>
              <div className={classes.myVaultStatus}>
                <h5 className={clsx(classes.myVaultType, classes.titleMargin)}>Current  Balance</h5>
                <p className={classes.myVaultTitle}>&#x20A6; 100,000</p>
              </div>
            </div>
            <p className={classes.myVaultCashOut}>Cashout on 25th January, 2021</p>
            <div>
              {matchesMd ?
              <div>
                <LinearProgress variant="determinate" value={90} className={classes.myVaultProgress} />
                <p className={classes.myVaultComplete}>90% complete</p>
              </div> :
              <Box display="flex" alignItems="center">
                <Box width="90%" mr={1}>
                  <LinearProgress variant="determinate" value={90} className={classes.myVaultProgress} />
                </Box>
                <Box minWidth={35}>
                  <p className={classes.myVaultComplete}>90% complete</p>
                </Box>
              </Box>}
            </div>
          </div>
        </Link>
        <Link to="/dashboard/vaults/yarnId" className={classes.myVaultContainer}>
          <div className={classes.myVaultWrapper}>
            <div className={classes.myVaultContent}>
              <div className={classes.myVaultName}>
                <h5 className={clsx(classes.myVaultTitle, classes.titleMargin) }>Pay my school fees</h5>
                <p className={classes.myVaultType}>Fund my vault</p>
              </div>
              <div className={classes.myVaultStatus}>
                <h5 className={clsx(classes.myVaultType, classes.titleMargin)}>Current  Balance</h5>
                <p className={classes.myVaultTitle}>&#x20A6; 27,500</p>
              </div>
            </div>
            <p className={classes.myVaultCashOut}>Cashout on 25th January, 2021</p>
            <div>
              {matchesMd ?
              <div>
                <LinearProgress variant="determinate" value={56} className={classes.myVaultProgress} />
                <p className={classes.myVaultComplete}>56% complete</p>
              </div> :
              <Box display="flex" alignItems="center">
                <Box width="90%" mr={1}>
                  <LinearProgress variant="determinate" value={56} className={classes.myVaultProgress} />
                </Box>
                <Box minWidth={35}>
                  <p className={classes.myVaultComplete}>56% complete</p>
                </Box>
              </Box>}
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DashboardVault
