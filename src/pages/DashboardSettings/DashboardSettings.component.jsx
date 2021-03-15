import React, { useEffect, useState } from 'react'
import dashboardSettingsStyles from './DashboardSettings.styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import tabsLogo from '../../assets/icons/diligent-logo.png';
import ProfileTabPanel from '../../Components/ProfileTabPanel/ProfileTabPanel.component';
import AccountsTabPanel from '../../Components/AccountsTabPanel/AccountsTabPanel.component';
import CardBankPanel from '../../Components/CardBankPanel/CardBankPanel.component';
import SecurityTabPanel from './../../Components/SecurityTabPanel/SecurityTabPanel.component';

const DashboardSettings = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const classes = dashboardSettingsStyles();

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
            <Tab className={value === 0 ? classes.activeTab : classes.inactiveTab} label="Profile" disableRipple  />
            <Tab  className={value === 1 ? classes.activeTab : classes.inactiveTab} label="Account" disableRipple />
            <Tab  className={value === 2 ? classes.activeTab : classes.inactiveTab} label="Card and Bank" disableRipple />
            <Tab  className={value === 3 ? classes.activeTab : classes.inactiveTab} label="Security" disableRipple />
        </Tabs>
        <figure className={classes.tabsLogoBox}>
          <img src={tabsLogo} alt="vaultway diligent saver" className={classes.tabsLogo} />
        </figure>
      </Toolbar>
      <TabPanel value={value} index={0} > <ProfileTabPanel /> </TabPanel>
      <TabPanel value={value} index={1} > <AccountsTabPanel /> </TabPanel>
      <TabPanel value={value} index={2} > <CardBankPanel /> </TabPanel>
      <TabPanel value={value} index={3}  > <SecurityTabPanel /> </TabPanel>
    </div>
  )
}

const TabPanel = ({children, value, index}) => {
  return(
  <div>
      {value === index && <h1>{children}</h1>}
  </div>)
}

export default DashboardSettings