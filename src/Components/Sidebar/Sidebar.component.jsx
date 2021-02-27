import React from 'react'
import sidebarStyles from './Sidebar.styles';
import vaultWayLogo from '../../assets/icons/vault-way-white-icon.png';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import SaveIcon from '@material-ui/icons/Save';
import HelpIcon from '@material-ui/icons/Help';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Sidebar = () => {
  const classes = sidebarStyles();
  const navLinks = [
    {
      link: "/plans",
      icon: <DashboardIcon className={classes.navIcon} />,
      text: 'Dashboard'
    },
    {
      link: "/about",
      icon: <InfoIcon className={classes.navIcon} />,
      text: 'About'
    },
    {
      link: "/plans",
      icon: <SaveIcon className={classes.navIcon} />,
      text: 'Plans'
    },
    {
      link: "/faq",
      icon: <HelpIcon className={classes.navIcon} />,
      text: 'Frequently asked questions'
    },
    {
      link: "/login",
      icon: <VpnKeyIcon className={classes.navIcon} />,
      text: 'Log in'
    },
    {
      link: "/signup",
      icon: <AccountCircleIcon className={classes.navIcon} />,
      text: 'Create Account'
    },
  ]
  return (
    <nav className={classes.root}>
      <div className={classes.vaultWayLogoBox}>
        <img src={vaultWayLogo} className={classes.vaultWayLogo} alt="vault way logo"/>
      </div>
      <div className={classes.navList}>
        <NavLink to="/" className={classes.navItem} >
          <HomeIcon className={classes.navIcon} />
              <span className={classes.navText}>Home</span>
          </NavLink>
        {navLinks.map(link =>
          <NavLink to={link.link} className={classes.navItem} activeClassName={classes.activeNavLink} key={link.text}>
            {link.icon}
            <span className={classes.navText}>{link.text}</span>
          </NavLink>
          )}
      </div>
    </nav>
  )
}

export default Sidebar;
