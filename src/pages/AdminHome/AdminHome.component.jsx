import React from 'react'
import adminHomeStyles from './AdminHome.styles';
import peopleIcon from '../../assets/icons/people-icon.png';
import vaultIcon from '../../assets/icons/dashboard-vault-icon.png';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import clsx from 'clsx';

const AdminHome = () => {
  const classes = adminHomeStyles();
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

    </div>
  )
}

export default AdminHome
