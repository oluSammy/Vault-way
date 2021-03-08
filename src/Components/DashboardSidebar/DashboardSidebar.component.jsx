import React from 'react'
import dashboardSidebarStyles from './DashboardSidebar.styles';
import vaultwayLogo from '../../assets/img/vault-way-logo.png';
import MuiSwitch from '../Switch/Switch.component';
import DashboardNavList from './../DashboardNavList/DashboardNavList.component';

const DashboardSidebar = ({ temporarySidebar, closeSidebar }) => {
  const classes = dashboardSidebarStyles();
  return (
    <div className={classes.root}>
      <figure className={classes.imgContainer}>
        <img src={vaultwayLogo} alt="vaultway logo" className={classes.logo} />
      </figure>
      <h2 className={classes.name}>Hello, Ayodeji 🙂</h2>
      <div className={classes.switch}>
        <MuiSwitch />
      </div>
      <div className={classes.negMargin} />
      <DashboardNavList temporarySidebar={temporarySidebar} closeSidebar={closeSidebar}  />
    </div>
  )
}

export default DashboardSidebar
