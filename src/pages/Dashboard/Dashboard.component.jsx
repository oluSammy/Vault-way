import React from 'react'
import { Switch, useRouteMatch, Route, Link, NavLink } from 'react-router-dom';
import DashboardHome from './../DashboardHome/DashboardHome.component';
import Vault from './../Vault/Vault.component';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import dashboardStyles from './dashboard.styles';
import logo from '../../assets/img/vault-way-logo.png';
import MuiSwitch from './../../Components/Switch/Switch.component';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


const Dashboard = () => {
  let { path } = useRouteMatch();

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
    marginOpen = '0px';
    marginClosed = '0px';
  }

  const navLinks = [
    {
      icon: <HomeOutlinedIcon className={classes.listIcon} />,
      text: 'Home',
      route: '/dashboard'
    },
    {
      icon: <VerifiedUserOutlinedIcon className={classes.listIcon} />,
      text: 'Vaults',
      route: '/dashboard/vaults'
    },
    {
      icon: <FolderOpenOutlinedIcon className={classes.listIcon} />,
      text: 'Tooltip',
      route: '/dashboard/tooltip'
    },
    {
      icon: <FlightTakeoffOutlinedIcon className={classes.listIcon} />,
      text: 'Referral',
      route: '/dashboard/referral'
    },
    {
      icon: <SettingsOutlinedIcon className={classes.listIcon} />,
      text: 'Settings',
      route: '/dashboard/settings'
    }

  ]

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
            <h2>Hello Sidebar</h2>
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
          <h2 className={classes.name}>Hello, Ayodeji 🙂</h2>
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
          <List className={classes.navList} style={{ marginRight: '10px', marginLeft: '10px' }}>
            {navLinks.map(listItem =>
              <ListItem button className={classes.listItem} component={NavLink} to={listItem.route}
                activeClassName={classes.activeNavLink} exact={true} key={listItem.text}>
                  <ListItemIcon> {listItem.icon} </ListItemIcon>
                  <ListItemText primary={listItem.text} className={classes.listText}
                    classes= {{ primary: classes.listText }}
                  />
              </ListItem>
              ) }
          </List>
        </Drawer>
      </Hidden>
      <main className={classes.mainContent} style={{ marginLeft: open ? marginOpen : marginClosed }}>
        <Switch>
          <Route exact path={path} component={DashboardHome} />
          <Route path={`${path}/vaults`} component={Vault} />
          <Route path={`${path}/tooltip`} component={Vault} />
          <Route path={`${path}/referral`} component={Vault} />
          <Route path={`${path}/settings`} component={Vault} />
        </Switch>
      </main>
    </div>
  )
}

export default Dashboard
