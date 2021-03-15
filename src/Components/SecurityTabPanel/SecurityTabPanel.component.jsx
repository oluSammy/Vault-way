import React from 'react'
import securityPanelStyles from './SecurityTabPanel.styles';
import profileTabPanelStyles from './../ProfileTabPanel/ProfileTabPanell.styles';
import DashboardBtn from '../DashboardBtn/DashboardBtn.component';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SecurityTabPanel = () => {
  const classes = securityPanelStyles();
  const newClass = profileTabPanelStyles();
  return (
    <div className={classes.root}>
      <form className={clsx(newClass.profileForm, classes.form)}>
        <div className={newClass.formGroup}>
          <div className={newClass.formInput}>
            <input
              className={newClass.formTextField} type="text" id="name" name="name" placeholder="Enter Old Password"
            />
          </div>
          <div className={newClass.formInput}>
            <input
              className={newClass.formTextField} type="text" id="lastName" name="lastName" placeholder="Enter New Password"
            />
          </div>
        </div>
        <div className={classes.btnBox}>
          <DashboardBtn text="Change password" color="#FFFFFF" bg="#CECECE" />
        </div>
        <hr className={classes.line} />
        <FormControlLabel className={classes.switch} classes= {{ label: classes.label }}
          control={
            <Switch
              name="checkedB"
              color="primary"
            />
          }
          label="Two-factor authentication"
          labelPlacement="start"
        />
        <hr className={classes.line} />
      </form>
      <div className={classes.btnBox}>
        <DashboardBtn text="Save" color="#FFFFFF" bg="#00A343" />
      </div>
    </div>
  )
}

export default SecurityTabPanel;
