import React, { useEffect } from 'react'
import { Switch, useRouteMatch, Route, Link } from 'react-router-dom';
import DashboardHome from './../DashboardHome/DashboardHome.component';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import dashboardStyles from './dashboard.styles';
import logo from '../../assets/img/vault-way-logo.png';
import MuiSwitch from './../../Components/Switch/Switch.component';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DashboardSidebar from './../../Components/DashboardSidebar/DashboardSidebar.component';
import DashboardNavList from './../../Components/DashboardNavList/DashboardNavList.component';
import DashboardTooltip from './../DashboardTooltip/DashboardTooltip.component';
import DashboardReferral from './../DashboardReferral/DashboardReferral.component';
import DashboardSettings from './../DashboardSettings/DashboardSettings.component';
import DashboardWallet from './../DashboardWallet/DashboardWallet.component';
import VaultsRoutesPage from './../VaultsRoutesPage/VaultsRoutesPage.component';
import CreateVault from './../CreateVault/CreateVault.component';
import RegularVault from './../RegularVault/RegularVault.component';


const Dashboard = () => {
  let { path } = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const [open, setOpen] = React.useState(true);
  const classes = dashboardStyles();

  const [openTemporaryDrawer, setOpenTemporaryDrawer] = React.useState(false);

  const handleTemporaryDrawer = () => {
    setOpenTemporaryDrawer(true);
  }

  const handleDrawer = () => {
    setOpen(!open);
  };

  let marginOpen = '340px';
  let marginClosed = '120px';

  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  if (matchesSm) {
    marginOpen = '3vw';
    marginClosed = '3vw';
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="sticky" className={classes.appBar} >
        <SwipeableDrawer variant="temporary"
            open={openTemporaryDrawer}
            onClose={() => setOpenTemporaryDrawer(false)}
            onOpen={() => setOpenTemporaryDrawer(true)}
            classes={{ paper: classes.swipeableDrawer }}
        >
            <DashboardSidebar closeSidebar={() => setOpenTemporaryDrawer(false)} temporarySidebar={true} />
        </SwipeableDrawer>
        <Toolbar className={classes.toolbarStyles}>
          <Hidden smDown>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawer}
                edge="start"
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleTemporaryDrawer}
                edge="start"
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Hidden>
          <Link to="/" className={classes.logoContainer}>
            <img src={logo} className={classes.logo} alt="vaultway logo"/>
          </Link>
          <h2 className={classes.name}>Hello, Ayodeji 🌞</h2>
          <div className={classes.switch}>
            <MuiSwitch />
          </div>
          <AccountCircleOutlinedIcon className={classes.navIcon} />
        </Toolbar>
      </AppBar>
      <Hidden smDown>
        <Drawer variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <DashboardNavList />
        </Drawer>
      </Hidden>
      <main className={classes.mainContent} style={{ marginLeft: open ? marginOpen : marginClosed }}>
        <Switch>
          <Route exact path={path} component={DashboardHome} />
          <Route path={`${path}/vaults`} component={VaultsRoutesPage} />
          <Route path={`${path}/vault/create`} component={CreateVault} />
          <Route path={`${path}/vault/regular-vault`} component={RegularVault} />
          <Route path={`${path}/wallet`} component={DashboardWallet} />
          <Route path={`${path}/tooltip`} component={DashboardTooltip} />
          <Route path={`${path}/referral`} component={DashboardReferral} />
          <Route path={`${path}/settings`} component={DashboardSettings} />
        </Switch>
      </main>
    </div>
  )
}

export default Dashboard
