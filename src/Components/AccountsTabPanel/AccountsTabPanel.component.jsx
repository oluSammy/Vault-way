import React, { useState } from 'react'
import accountsTabPanelStyles from './AccountsTabPanel.styles';
import { Link } from 'react-router-dom';
import DashboardBtn from './../DashboardBtn/DashboardBtn.component';

const AccountsTabPanel = () => {
  const classes = accountsTabPanelStyles();
  const [values, setValues] = useState({ bvn: "00900980090" });
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <div className={classes.root}>
      <form className={classes.form}>
         <div className={classes.formGroup}>
           <div className={classes.formTop}>
              <label className={classes.formLabel} htmlFor="bvn">Add BVN</label>
              <Link className={classes.formLink} to="/">why do we need this information?</Link>
           </div>
           <input className={classes.formInput} type="text" onChange={handleChange} value={values.bvn} name="bvn" id="bvn"/>
         </div>
         <DashboardBtn text="Save" color="#ffffff" bg="#00A343" />
      </form>
    </div>
  )
}

export default AccountsTabPanel
