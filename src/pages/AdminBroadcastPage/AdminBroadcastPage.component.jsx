import React, { useState } from 'react'
import broadcastStyles from './AdminBroadcastPage.styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import clsx from 'clsx';
import TabPanel from '../../Components/TabPanel/TabPanel.component';
import EmailBroadcast from '../../Components/EmailBroadcast/EmailBroadcast.component';
import NotificationBroadcast from '../../Components/NotificationBroadcast/NotificationBroadcast.component';
import AdminTooltip from '../../Components/AdminTooltip/AdminTooltip.components';

const AdminBroadcastPage = () => {
  const classes = broadcastStyles();
  const [value, setValue] = useState(0);
  const handleTabs = (e, value) => {
    setValue(value)
  }

  return (
    <div className={classes.root}>
      <Toolbar className={classes.tabBox}>
        <Tabs value={value} onChange={handleTabs} className={classes.tabContainer} centered
          classes={{indicator: classes.indicator}}
          >
            <Tab
              className={clsx(classes.tab, value === 0 ? classes.activeTab : classes.inactiveTab)}
              label="Email"
            />
            <Tab
              className={clsx(classes.tab, value === 1 ? classes.activeTab : classes.inactiveTab)}
              label="Notification"
            />
            <Tab
              className={clsx(classes.tab, value === 2 ? classes.activeTab : classes.inactiveTab)}
              label="Tooltip"
            />
        </Tabs>
      </Toolbar>
      <TabPanel value={value} index={0} > <EmailBroadcast /> </TabPanel>
      <TabPanel value={value} index={1} > <NotificationBroadcast /> </TabPanel>
      <TabPanel value={value} index={2} > <AdminTooltip /> </TabPanel>
    </div>
  )
}

export default AdminBroadcastPage
