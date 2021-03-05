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
import Collapse from '@material-ui/core/Collapse';
import { NavHashLink } from 'react-router-hash-link';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import GrainOutlinedIcon from '@material-ui/icons/GrainOutlined';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';


const Sidebar = () => {
  const classes = sidebarStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const navLinks = [
    {
      link: "/",
      icon: <DashboardIcon className={classes.navIcon} />,
      text: 'Dashboard',
      dropDown: false
    },
    {
      link: "/about",
      icon: <InfoIcon className={classes.navIcon} />,
      text: 'About',
      dropDown: false
    },
    {
      link: "/plans",
      icon: <SaveIcon className={classes.navIcon} />,
      text: 'Plans',
      dropDown: true,
      endIcon: open ? <ExpandLessIcon className={classes.endIcon} /> : <ExpandMoreIcon className={classes.endIcon} />
    },
    {
      link: "/faq",
      icon: <HelpIcon className={classes.navIcon} />,
      text: 'Frequently asked questions',
      dropDown: false
    },
    {
      link: "/login",
      icon: <VpnKeyIcon className={classes.navIcon} />,
      text: 'Log in',
      dropDown: false
    },
    {
      link: "/signup",
      icon: <AccountCircleIcon className={classes.navIcon} />,
      text: 'Create Account',
      dropDown: false
    },
  ]
  return (
    <nav className={classes.root}>
      <div className={classes.vaultWayLogoBox}>
        <img src={vaultWayLogo} className={classes.vaultWayLogo} alt="vaultway logo"/>
      </div>
      <div className={classes.navList}>
        <NavLink to="/" className={classes.navItem} >
          <HomeIcon className={classes.navIcon} />
            <span className={classes.navText}>Home</span>
        </NavLink>
        {navLinks.map(link =>
          link.dropDown ?
          <div>
            <div className={classes.navItem} activeClassName={classes.activeNavLink} onClick={handleClick}>
              {link.icon}
              <span className={classes.navText}>Save</span>
              {link.endIcon}
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit style={{marginLeft: '30px'}}>
                <NavHashLink to="/plans#regular" className={classes.navItem} >
                  <GraphicEqOutlinedIcon className={classes.navIcon} />
                    <span className={classes.navText}>Regular Vault</span>
                </NavHashLink>
                <NavHashLink to="/plans#quick" className={classes.navItem} >
                  <GrainOutlinedIcon className={classes.navIcon} />
                    <span className={classes.navText}>Quick Vault</span>
                </NavHashLink>
                <NavHashLink to="/plans#fundMyVault" className={classes.navItem} >
                  <BlurOnOutlinedIcon className={classes.navIcon} />
                    <span className={classes.navText}>FundMyVault</span>
                </NavHashLink>
            </Collapse>
          </div>
             :
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
