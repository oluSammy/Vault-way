import React from 'react'
import adminUsersStyles from './AdminUsersPage.styles';
import peopleIcon from '../../assets/icons/dash-people-icon.png';
import funnelIcon from '../../assets/icons/funnel-icon.png';
import adminHomeStyles from '../AdminHome/AdminHome.styles';
import clsx from 'clsx';
import AdminUsersTable from '../../Components/AdminUsersTable/AdminUsersTable.component';

const AdminUsersPage = () => {
  const classes = adminUsersStyles();
  const tableHeaderStyles = adminHomeStyles();
  return (
    <div className={classes.root}>
      <div className={classes.usersContainer}>
        <div className={classes.containerTop}>
          <h1 className={classes.usersHeading}>All Users</h1>
          <img src={peopleIcon} alt="all users" className={classes.peopleIcon} />
        </div>
        <p className={classes.usersNo}>200,000</p>
        <p className={classes.usersNew}>20 new</p>
      </div>
      <div className={tableHeaderStyles.tableHeader}>
        <h2 className={tableHeaderStyles.tableHeading}>Manage users</h2>
        <div className={classes.tableFlex}>
          <p className={clsx(tableHeaderStyles.tableHeadingSub) } >Date</p>
          <img src={funnelIcon} alt="Date" className={classes.dateIcon} />
        </div>
      </div>
      <AdminUsersTable />
    </div>
  )
}

export default AdminUsersPage
