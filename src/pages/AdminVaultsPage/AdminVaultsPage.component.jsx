import React from 'react'
import adminVaultsStyles from './AdminVaultsPage.styles';
import vaultIcon from '../../assets/icons/dashboard-vault-icon.png';
import clsx from 'clsx';
import adminHomeStyles from '../AdminHome/AdminHome.styles';
import ManageVaultsTable from '../../Components/ManageVaultsTable/ManageVaultsTable.component';


const AdminVaultsPage = () => {
  const classes = adminVaultsStyles();
  const tableHeaderStyles = adminHomeStyles()
  return (
    <div className={classes.root}>
      <div className={classes.vaultsTop}>
        <div className={classes.vaultContainer}>
          <div className={classes.vaultContainerTop}>
            <h3 className={classes.vaultsTitle}>All Vaults</h3>
            <img src={vaultIcon} alt="all vaults" className={classes.vaultsImg} />
          </div>
          <p className={classes.vaultNumber}>10,000</p>
          <p className={classes.vaultSub}>20 new</p>
        </div>
        <div className={classes.vaultContainer}>
          <div className={classes.vaultContainerTop}>
            <h3 className={classes.vaultsTitle}>Total amount in vault</h3>
          </div>
          <div className={classes.vaultSpan}>
            <span className={classes.vaultSub}>N</span>
            <p className={clsx(classes.vaultNumber, classes.numberMargin)}>2,100,000</p>
            <span className={classes.vaultSub}>.00</span>
          </div>
        </div>
      </div>
      <div className={tableHeaderStyles.tableHeader}>
        <h2 className={tableHeaderStyles.tableHeading}>Manage Vaults</h2>
        <p className={tableHeaderStyles.tableHeadingSub}>last 7days</p>
      </div>
      <ManageVaultsTable />
    </div>
  )
}

export default AdminVaultsPage
