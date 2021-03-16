import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import navListStyles from './DashboardNavList.styles';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';

const DashboardNavList = ({ temporarySidebar, closeSidebar }) => {
  const classes = navListStyles();

  const handleCloseSidebar = () => {
    if(temporarySidebar) {
      closeSidebar()
    }
  }
  const navLinks = [
    {
      icon: <HomeOutlinedIcon />,
      text: 'Home',
      route: '/dashboard'
    },
    {
      icon: <VerifiedUserOutlinedIcon />,
      text: 'Vaults',
      route: '/dashboard/vaults'
    },
    {
      icon: <AccountBalanceWalletOutlinedIcon />,
      text: 'Wallet',
      route: '/dashboard/wallet'
    },
    {
      icon: <FolderOpenOutlinedIcon />,
      text: 'Tooltip',
      route: '/dashboard/tooltip'
    },
    {
      icon: <TimelineOutlinedIcon />,
      text: 'Referral',
      route: '/dashboard/referral'
    },
    {
      icon: <SettingsOutlinedIcon />,
      text: 'Settings',
      route: '/dashboard/settings'
    }

  ]

  return (
    <List className={classes.navList} style={{}}>
      {navLinks.map(listItem =>
        <ListItem button className={classes.listItem} component={NavLink} to={listItem.route}
          activeClassName={classes.activeNavLink} exact={true} key={listItem.text}
          onClick={handleCloseSidebar}
          >
            <ListItemIcon className={classes.listIcon}> {listItem.icon} </ListItemIcon>
            <ListItemText primary={listItem.text} className={classes.listText}
              classes= {{ primary: classes.listText }}
            />
        </ListItem>
        ) }
    </List>
  )
}


export default DashboardNavList
