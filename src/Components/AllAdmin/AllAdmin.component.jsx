import React from 'react'
import allAdminStyles from './AllAdmin.styles';
import adminHomeStyles from '../../pages/AdminHome/AdminHome.styles';
import clsx from 'clsx';
import funnelIcon from '../../assets/icons/funnel-icon.png';
import adminUsersStyles from '../../pages/AdminUsersPage/AdminUsersPage.styles';
import AdminTable from '../AdminTable/AdminTable.component';

const AllAdmin = () => {
  const classes = allAdminStyles();
  const tableHeaderStyles = adminHomeStyles();
  const tableIconStyles = adminUsersStyles();
  return (
    <div className={classes.root}>
      <div className={tableHeaderStyles.tableHeader}>
        <h2 className={tableHeaderStyles.tableHeading}>Manage Admins</h2>
        <div className={tableIconStyles.tableFlex}>
          <p className={clsx(tableHeaderStyles.tableHeadingSub) } >Date</p>
          <img src={funnelIcon} alt="Date" className={tableIconStyles.dateIcon} />
        </div>
      </div>
      <AdminTable />
    </div>
  )
}

export default AllAdmin
