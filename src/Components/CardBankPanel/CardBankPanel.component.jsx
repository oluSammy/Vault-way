import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import cardBankStyles from './CardBankPanel.styles';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import clsx from 'clsx';
import DebitCardPanel from '../DebitCardPanel/DebitCardPanel.component';
import WithdrawalPanel from '../WithdrawalPanel/WithdrawalPanel.component';

const CardBankPanel = () => {
  const classes = cardBankStyles();

  const [value, setValue] = useState(1);

  const handleTabs = (e, value) => {
      setValue(value)
  }

  return (
    <div>
      <Toolbar className={classes.tabBox}>
        <Tabs value={value} onChange={handleTabs} className={classes.tabContainer} centered
          classes={{indicator: classes.indicator}}
          >
            <Tab icon={<SyncAltIcon className={clsx(classes.tabIcon, classes.rotatedIcon, value === 0 ? classes.activeIcon : '')} />}
              className={clsx(classes.tab, value === 0 ? classes.activeTab : '')} label="Withdrawal Bank" disableRipple
            />
            <Tab icon={<PaymentOutlinedIcon className={clsx(classes.tabIcon, value === 1 ? classes.activeIcon : '')} />}
              className={clsx(classes.tab, value === 1 ? classes.activeTab : '')} label="Funding Debit Card" disableRipple
            />
        </Tabs>
      </Toolbar>
      <hr className={classes.dashedLine} />
      <TabPanel value={value} index={0} > <WithdrawalPanel /> </TabPanel>
      <TabPanel value={value} index={1} > <DebitCardPanel /> </TabPanel>
    </div>
  )
}

const TabPanel = ({children, value, index}) => {
  return(
  <div>
      {value === index && <h1>{children}</h1>}
  </div>)
}

export default CardBankPanel
