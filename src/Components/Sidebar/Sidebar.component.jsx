import React from 'react'
import sidebarStyles from './Sidebar.styles';
import vaultWayLogo from '../../assets/icons/vault-way-white-icon.png';
import Divider from '@material-ui/core/Divider';

const Sidebar = () => {
  const classes = sidebarStyles()
  return (
    <div className={classes.root}>
      <div className={classes.vaultWayLogoBox}>
        <img src={vaultWayLogo} className={classes.vaultWayLogo} alt="vault way logo"/>
      </div>
      <Divider style={{ backgroundColor: '#ffffff' }} />
    </div>
  )
}

export default Sidebar;
