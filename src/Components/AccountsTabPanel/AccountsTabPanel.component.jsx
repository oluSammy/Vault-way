import React, { useState } from 'react'
import accountsTabPanelStyles from './AccountsTabPanel.styles';
import { Link } from 'react-router-dom';
import DashboardBtn from './../DashboardBtn/DashboardBtn.component';
import profileTabPanelStyles from './../ProfileTabPanel/ProfileTabPanell.styles';
import clsx from 'clsx';

const AccountsTabPanel = () => {
  const classes = accountsTabPanelStyles();
  const newClass = profileTabPanelStyles();
  const [values, setValues] = useState({ bvn: "00900980090" });
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <div className={classes.root}>
      <form className={clsx(newClass.profileForm, classes.form)}>
        <div className={newClass.formGroup}>
          <div className={newClass.formInput}>
            <input className={newClass.formTextField} type="text" id="firstName" name="name" placeholder="First Name" />
          </div>
          <div className={newClass.formInput}>
            <input className={newClass.formTextField} type="text" id="lastName" name="lastName" placeholder="Last Name" />
          </div>
        </div>
        <div className={newClass.formGroup}>
          <div className={newClass.formInput}>
            <input className={newClass.formTextField} type="email" id="email" name="email" placeholder="Email Address" />
          </div>
          <div className={newClass.formInput}>
            <input className={newClass.formTextField} type="number" id="number" name="number" placeholder="Phone Number" />
          </div>
        </div>
        <div className={newClass.formGroup}>
          <div className={newClass.formInput}>
            <div className={classes.labelBox}>
              <label htmlFor="male" className={clsx(newClass.radioLabel, values.gender === 'male' ? newClass.radioLabelActive : newClass.radioLabelInActive )}>
              <input value='male' id="male" onChange={handleChange}  checked={values.gender === 'male'}
                className={clsx(newClass.formTextField, newClass.radioHidden) } type="radio" name="gender"
              />
                Male
              </label>
              <label htmlFor="female" className={clsx(newClass.radioLabel, values.gender === 'female' ? newClass.radioLabelActive : newClass.radioLabelInActive )}>
                Female
              <input value='female' id="female" onChange={handleChange} checked={values.gender === 'female'}
                className={clsx(newClass.formTextField, newClass.radioHidden) } type="radio" name="gender"
              />
              </label>
            </div>
          </div>
          <div className={newClass.formInput}>
            <select className={newClass.formTextField} id="year" style={{backgroundColor: '#F0F0F0'}}>
              <option value="">Relationship</option>
              <option value="lime">Father</option>
              <option value="coconut">Mother</option>
              <option value="mango">Sister</option>
            </select>
          </div>
        </div>
        <DashboardBtn text="Save" color="#F9F9F9" bg="#CECECE" />
      </form>
      <hr className={classes.line} />
      <div className={classes.formGroup}>
        <div className={classes.formTop}>
          <label className={classes.formLabel} htmlFor="bvn">Add BVN</label>
          <Link className={classes.formLink} to="/">why do we need this information?</Link>
        </div>
        <input className={classes.formInput} type="text" onChange={handleChange} value={values.bvn} name="bvn" id="bvn"/>
      </div>
    </div>
  )
}

export default AccountsTabPanel
