import React from 'react';
import { Switch, useRouteMatch, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import logo from '../../assets/img/vault-way-logo.png';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import adminDashboardStyles from './AdminDashboard.styles';
import dashboardStyles from '../Dashboard/dashboard.styles';
import SearchIcon from '@material-ui/icons/Search';
import AdminNavList from '../../Components/AdminNavList/AdminNavList.component';
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar.component';
import AdminHome from '../AdminHome/AdminHome.component';
import AdminUsersPage from '../AdminUsersPage/AdminUsersPage.component';
import AdminVaultsRoutePage from '../AdminVaultsRoutePage/AdminVaultsRoutePage.component';
import AdminBroadcastPage from '../AdminBroadcastPage/AdminBroadcastPage.component';
import AdminRoles from '../AdminRoles/AdminRoles.component';
import AdminSettings from '../AdminSettings/AdminSettings.component';

const AdminDashboard = () => {
  const classes = dashboardStyles();
  let { path } = useRouteMatch();
  const adminStyles = adminDashboardStyles();
  const [openTemporaryDrawer, setOpenTemporaryDrawer] = React.useState(false);
  const [open, setOpen] = React.useState(true);
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
    <div className={adminStyles.root}>
      <CssBaseline />
      <AppBar position="sticky" className={classes.appBar} >
        <SwipeableDrawer variant="temporary"
          open={openTemporaryDrawer}
          onClose={() => setOpenTemporaryDrawer(false)}
          onOpen={() => setOpenTemporaryDrawer(true)}
          classes={{ paper: classes.swipeableDrawer }}
        >
          <AdminSidebar closeSidebar={() => setOpenTemporaryDrawer(false)} temporarySidebar={true} />
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
          <form className={adminStyles.searchBox}>
            <label htmlFor="search" className={adminStyles.SearchIcon}>
              <SearchIcon  />
            </label>
            <input type="text" name="search" id="search" placeholder="Quick Search.." className={adminStyles.searchInput}/>
          </form>
          <h2 className={classes.name}>Hello, Ayodeji</h2>
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
          <AdminNavList />
        </Drawer>
      </Hidden>
      <main style={{ marginLeft: open ? marginOpen : marginClosed }} className={clsx(classes.mainContent, adminStyles.main) }>
        <Switch>
          <Route exact path={path} component={AdminHome} />
          <Route exact path={`${path}/users`} component={AdminUsersPage} />
          <Route path={`${path}/vaults`} component={AdminVaultsRoutePage} />
          <Route path={`${path}/broadcast`} component={AdminBroadcastPage} />
          <Route path={`${path}/roles`} component={AdminRoles} />
          <Route path={`${path}/settings`} component={AdminSettings} />
        </Switch>
      </main>
    </div>
  )
}

export default AdminDashboard;
