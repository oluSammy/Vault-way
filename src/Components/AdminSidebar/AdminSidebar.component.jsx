import React from 'react'
import dashboardSidebarStyles from '../DashboardSidebar/DashboardSidebar.styles';
import vaultwayLogo from '../../assets/img/vault-way-logo.png';
import AdminNavList from '../AdminNavList/AdminNavList.component';

const AdminSidebar = ({ temporarySidebar, closeSidebar }) => {
  const classes = dashboardSidebarStyles();
  return (
    <div className={classes.root}>
      <figure className={classes.imgContainer}>
        <img src={vaultwayLogo} alt="vaultway logo" className={classes.logo} />
      </figure>
      <h2 className={classes.name}>Hello, Ayodeji 🙂</h2>
      <div className={classes.negMargin} />
      <AdminNavList temporarySidebar={temporarySidebar} closeSidebar={closeSidebar}  />
    </div>
  )
}

export default AdminSidebar
