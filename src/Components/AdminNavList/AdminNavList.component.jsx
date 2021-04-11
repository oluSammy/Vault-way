import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import navListStyles from '../DashboardNavList/DashboardNavList.styles';

const AdminNavList = ({ temporarySidebar, closeSidebar }) => {
  const navStyles = navListStyles();
  const handleCloseSidebar = () => {
    if(temporarySidebar) {
      closeSidebar()
    }
  }
  const navLinks = [
    {
      icon: <DashboardIcon />,
      text: 'Dashboard',
      route: '/admin'
    },
    {
      icon: <PeopleAltOutlinedIcon />,
      text: 'Users',
      route: '/admin/users'
    },
    {
      icon: <VerifiedUserOutlinedIcon />,
      text: 'Vaults',
      route: '/admin/vaults'
    },
    {
      icon: <MailOutlinedIcon />,
      text: 'Broadcast',
      route: '/admin/broadcast'
    },
    {
      icon: <BusinessOutlinedIcon />,
      text: 'Admin Roles',
      route: '/admin/roles'
    },
    {
      icon: <SettingsOutlinedIcon />,
      text: 'Settings',
      route: '/admin/settings'
    }

  ]
  return (
    <List className={navStyles.navList} style={{}}>
      {navLinks.map(listItem =>
        <ListItem button className={navStyles.listItem} component={NavLink} to={listItem.route}
          activeClassName={navStyles.activeNavLink} exact={true} key={listItem.text}
          onClick={handleCloseSidebar}
          >
            <ListItemIcon className={navStyles.listIcon}> {listItem.icon} </ListItemIcon>
            <ListItemText primary={listItem.text} className={navStyles.listText}
              classes= {{ primary: navStyles.listText }}
            />
        </ListItem>
        ) }
    </List>
  )
}

export default AdminNavList
