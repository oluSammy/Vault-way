import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import clsx from 'clsx';
import TabPanel from '../../Components/TabPanel/TabPanel.component';
import rolesStyles from './AdminRoles.styles';
import broadcastStyles from '../AdminBroadcastPage/AdminBroadcastPage.styles';
import AllAdmin from '../../Components/AllAdmin/AllAdmin.component';
import AddAdmin from '../../Components/AddAdmin/AddAdmin.component';

const AdminRoles = () => {
  const classes = rolesStyles();
  const tabStyles = broadcastStyles();
  const [value, setValue] = useState(0);
  const handleTabs = (e, value) => {
    setValue(value)
  }
  return (
    <div className={classes.root}>
      <Toolbar className={tabStyles.tabBox}>
        <Tabs value={value} onChange={handleTabs} className={tabStyles.tabContainer} centered
          classes={{indicator: tabStyles.indicator}}
          >
            <Tab
              className={clsx(tabStyles.tab, value === 0 ? tabStyles.activeTab : tabStyles.inactiveTab)}
              label="All Admins"
            />
            <Tab
              className={clsx(tabStyles.tab, value === 1 ? tabStyles.activeTab : tabStyles.inactiveTab)}
              label="Add new admins"
            />
        </Tabs>
      </Toolbar>
      <TabPanel value={value} index={0} > <AllAdmin /> </TabPanel>
      <TabPanel value={value} index={1} > <AddAdmin /> </TabPanel>
    </div>
  )
}

export default AdminRoles
