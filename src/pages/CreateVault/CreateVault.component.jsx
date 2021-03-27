import React from 'react'
import createVaultStyles from './CreateVault.styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from "react-router-dom";
import regularIcon from '../../assets/icons/regular-valut-icon.png';
import tyroIcon from '../../assets/icons/tyro-icon-small.png';
import reaperIcon from '../../assets/icons/reaper-number-icon.png';
import aceIcon from '../../assets/icons/ace-number-icon.png';
import stellarIcon from '../../assets/icons/stellar-number-icon.png';
import fundIcon from '../../assets/icons/fund-tree-icon.png';
import quickVault from '../../assets/icons/fund-vault-icon.png';
import quickLock from '../../assets/icons/quick-lock.png';
import fundFrame from '../../assets/icons/fund-lock.png';
import clsx from 'clsx';

const CreateVault = () => {
  const classes = createVaultStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.arrowBox} onClick={() => history.goBack()}>
        <ArrowBackIcon className={classes.arrowBack} />
      </div>
      <h6 className={classes.vaultQuestion}>What vault plan would you choose?</h6>
      <div className={classes.vaultTitleBox}>
        <img className={classes.vaultIcon} src={regularIcon} alt="regular vaults"/>
        <h5 className={classes.vaultTitle}>Regular Vaults</h5>
      </div>
      <div className={classes.regularContainer}>
        <Link to={{
          pathname:'/dashboard/vault/regular-vault',
          state: {
            type: 'Tyro'
          }
        }} className={classes.regularVault}>
          <div className={classes.vaultTop}>
            <h4 className={classes.vaultTopText}>Tyro Vault</h4>
            <img className={classes.vaultTopIcon} src={tyroIcon} alt="Tyro vault"/>
          </div>
          <ul className={classes.vaultList}>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>Duration</p>
              <p className={classes.vaultListNumber}>2 months</p>
            </li>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>1st month</p>
              <p className={classes.vaultListNumber}>5% interest</p>
            </li>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>Other</p>
              <p className={classes.vaultListNumber}>1% interest</p>
            </li>
          </ul>
        </Link>
        <Link to={{
          pathname:'/dashboard/vault/regular-vault',
          state: {
            type: 'Reaper'
          }
        }} className={classes.regularVault}>
          <div className={classes.vaultTop}>
            <h4 className={classes.vaultTopText}>Reaper Vault</h4>
            <img className={classes.vaultTopIcon} src={reaperIcon} alt="Reaper vault"/>
          </div>
          <ul className={classes.vaultList}>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>Duration</p>
              <p className={classes.vaultListNumber}>4 months</p>
            </li>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>1st month</p>
              <p className={classes.vaultListNumber}>10% interest</p>
            </li>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>Other</p>
              <p className={classes.vaultListNumber}>2% interest</p>
            </li>
          </ul>
        </Link>
        <Link to={{
          pathname:'/dashboard/vault/regular-vault',
          state: {
            type: 'Ace'
          }
        }} className={classes.regularVault}>
          <div className={classes.vaultTop}>
            <h4 className={classes.vaultTopText}>Ace Vault</h4>
            <img className={classes.vaultTopIcon} src={aceIcon} alt="Ace vault"/>
          </div>
          <ul className={classes.vaultList}>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>Duration</p>
              <p className={classes.vaultListNumber}>6 months</p>
            </li>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>1st month</p>
              <p className={classes.vaultListNumber}>15% interest</p>
            </li>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>Other</p>
              <p className={classes.vaultListNumber}>3% interest</p>
            </li>
          </ul>
        </Link>
        <Link to={{
            pathname:'/dashboard/vault/regular-vault',
            state: {
              type: 'Stellar'
            }
          }}
          className={classes.regularVault}>
          <div className={classes.vaultTop}>
            <h4 className={classes.vaultTopText}>Stellar Vault</h4>
            <img className={classes.vaultTopIcon} src={stellarIcon} alt="Stellar vault"/>
          </div>
          <ul className={classes.vaultList}>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>Duration</p>
              <p className={classes.vaultListNumber}>12 months</p>
            </li>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>1st month</p>
              <p className={classes.vaultListNumber}>20% interest</p>
            </li>
            <li className={classes.vaultListItem}>
              <p className={classes.vaultListText}>Other</p>
              <p className={classes.vaultListNumber}>4% interest</p>
            </li>
          </ul>
        </Link>
      </div>
      <div className={classes.irregularVaultContainer}>
        <Link to="/dashboard/vaults/fundmyvault" className={clsx(classes.irregularVaultBox) }>
          <div className={classes.vaultTitleBox}>
            <img className={classes.vaultIcon} src={fundIcon} alt="fund my vault"/>
            <h5 className={classes.vaultTitle}>FundMyVault</h5>
          </div>
          <div className={classes.irregularContent}>
            <div>
              <h6 className={classes.irregularContentTitle}>Receive donations directly <br/> from friends and families</h6>
              <p className={classes.irregularContentText}>
                Create Vaults for big goals or projects that are highly important to you and
                set targets for amounts and completion dates.
              </p>
            </div>
            <img className={classes.irregularContentFrame} src={fundFrame} alt="fund my vault"/>
          </div>
        </Link>
        <Link to="/dashboard/vaults/quickvault" className={classes.irregularVaultBox}>
          <div className={classes.vaultTitleBox}>
            <img className={classes.vaultIcon} src={quickVault} alt="quick vaults"/>
            <h5 className={classes.vaultTitle}>Quick Vault</h5>
          </div>
          <div className={classes.irregularContent}>
            <div className={classes.irregularPli}>
              <h6 className={classes.irregularContentTitle}>Stop yourself from spending <br/> without a budget</h6>
              <p className={classes.irregularContentText}>
                Lock your funds away for short periods<br />  of time - from as brief as 48 hours to as <br /> extended as 30 days.
              </p>
            </div>
            <img className={classes.irregularContentFrame} src={quickLock} alt="quick vault"/>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CreateVault
