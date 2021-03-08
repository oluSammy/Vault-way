import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import navListStyles from './DashboardNavList.styles';

const DashboardNavList = ({ temporarySidebar, closeSidebar }) => {
  const classes = navListStyles();

  const handleCloseSidebar = () => {
    if(temporarySidebar) {
      closeSidebar()
    }
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
    <List className={classes.navList} style={{ marginRight: '10px', marginLeft: '10px' }}>
      {navLinks.map(listItem =>
        <ListItem button className={classes.listItem} component={NavLink} to={listItem.route}
          activeClassName={classes.activeNavLink} exact={true} key={listItem.text}
          onClick={handleCloseSidebar}
          >
            <ListItemIcon> {listItem.icon} </ListItemIcon>
            <ListItemText primary={listItem.text} className={classes.listText}
              classes= {{ primary: classes.listText }}
            />
        </ListItem>
        ) }
    </List>
  )
}


export default DashboardNavList
