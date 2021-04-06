import React, { useState } from 'react'
import adminHomeStyles from './AdminHome.styles';
import peopleIcon from '../../assets/icons/people-icon.png';
import vaultIcon from '../../assets/icons/dashboard-vault-icon.png';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import clsx from 'clsx';
import AdminChart from '../../Components/AdminChart/AdminChart.component';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ActivityTablePanel from '../../Components/ActivityTablePanel/ActivityTablePanel.component';

const AdminHome = () => {
  const classes = adminHomeStyles();
  const [value, setValue] = useState(0);

  const handleTabs = (e, value) => {
      setValue(value)
  }
  return (
    <div className={classes.root}>
      <div className={classes.overview}>
        <div className={classes.overviewBox}>
          <div className={classes.overviewTop}>
            <h5 className={classes.overviewTxt}>All Users</h5>
            <img src={peopleIcon} alt="people icon"/>
          </div>
          <p className={classes.overViewAmount}>
            <span className={classes.overviewCurrency}>&#x20A6;</span>
            <span className={clsx(classes.realMoney, classes.purple) }>200,000</span>
            <span className={classes.overviewCurrency}>.00</span>
          </p>
          <p className={classes.overviewSub}>20 new</p>
        </div>
        <div className={classes.overviewBox}>
          <div className={classes.overviewTop}>
            <h5 className={classes.overviewTxt}>All Vaults</h5>
            <img src={vaultIcon} alt="people icon"/>
          </div>
          <p className={classes.overViewAmount}>
            <span className={classes.overviewCurrency}>&#x20A6;</span>
            <span className={clsx(classes.realMoney, classes.grey) }>200,000</span>
            <span className={classes.overviewCurrency}>.00</span>
          </p>
          <p className={classes.overviewSub}>5 new</p>
        </div>
        <div className={classes.overviewBox}>
          <div className={classes.overviewTop}>
            <h5 className={classes.overviewTxt}>Inflow</h5>
          </div>
          <p className={classes.overViewAmount}>
            <span className={classes.overviewCurrency}>&#x20A6;</span>
            <span className={clsx(classes.realMoney, classes.green) }>200,000</span>
            <span className={classes.overviewCurrency}>.00</span>
          </p>
          <p className={classes.overviewSub}>last 7 days
            <span><ArrowUpwardIcon className={classes.overviewIcon} /></span>
          </p>
        </div>
        <div className={classes.overviewBox}>
          <div className={classes.overviewTop}>
            <h5 className={classes.overviewTxt}>Outflow</h5>
          </div>
          <p className={classes.overViewAmount}>
            <span className={classes.overviewCurrency}>&#x20A6;</span>
            <span className={clsx(classes.realMoney, classes.red) }>200,000</span>
            <span className={classes.overviewCurrency}>.00</span>
          </p>
          <p className={classes.overviewSub}>last 7 days
            <span><ArrowUpwardIcon className={classes.overviewIcon} /></span>
          </p>
        </div>
      </div>
      <div className={classes.status}>
        <h3 className={classes.statusTxt}>How you are doing so far</h3>
        <div className={classes.statusColorBox}>
          <div className={classes.statusContainer}>
            <div className={clsx(classes.color, classes.purpleBg)}></div>
            <p className={classes.colorTxt}>Users</p>
          </div>
          <div className={classes.statusContainer}>
            <div className={clsx(classes.color, classes.greyBg)}></div>
            <p className={classes.colorTxt}>Vaults</p>
          </div>
          <div className={classes.statusContainer}>
            <div className={clsx(classes.color, classes.greenBg)}></div>
            <p className={classes.colorTxt}>Inflow</p>
          </div>
          <div className={classes.statusContainer}>
            <div className={clsx(classes.color, classes.redBg)}></div>
            <p className={classes.colorTxt}>Outflow</p>
          </div>
        </div>
      </div>
      <AdminChart />
      <div className={classes.tableHeader}>
        <h2 className={classes.tableHeading}>Recent Activity in Vaultway</h2>
        <p className={classes.tableHeadingSub}>last 7days</p>
      </div>
      <Toolbar className={classes.tabBox}>
        <Tabs value={value} onChange={handleTabs} className={classes.tabContainer} centered
          classes={{indicator: classes.indicator}}
          >
            <Tab
              className={clsx(classes.tab, value === 0 ? classes.activeTab : classes.inactiveTab)} label="All" disableRipple
            />
            <Tab
              className={clsx(classes.tab, value === 1 ? classes.activeTab : classes.inactiveTab)} label="Vaults" disableRipple
            />
            <Tab
              className={clsx(classes.tab, value === 2 ? classes.activeTab : classes.inactiveTab)} label="Users" disableRipple
            />
            <Tab
              className={clsx(classes.tab, value === 3 ? classes.activeTab : classes.inactiveTab)} label="Inflow" disableRipple
            />
            <Tab
              className={clsx(classes.tab, value === 4 ? classes.activeTab : classes.inactiveTab)} label="Outflow" disableRipple
            />
        </Tabs>
      </Toolbar>
      <TabPanel value={value} index={0} ><ActivityTablePanel /> </TabPanel>
      <TabPanel value={value} index={1} > <h1>Tab Panel 2</h1> </TabPanel>
      <TabPanel value={value} index={2} > <h1>Tab Panel 3</h1> </TabPanel>
      <TabPanel value={value} index={3} > <h1>Tab Panel 4</h1> </TabPanel>
      <TabPanel value={value} index={4} > <h1>Tab Panel 5</h1> </TabPanel>
    </div>
  )
}

const TabPanel = ({children, value, index}) => {
  return(
  <div>
      {value === index && <h1>{children}</h1>}
  </div>)
}

export default AdminHome
