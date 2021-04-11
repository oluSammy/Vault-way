import React from 'react'
import addAdminStyles from './AddAdmin.styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';

const AddAdmin = () => {
  const classes = addAdminStyles();
  const btnStyles = regularContentStyles();
  return (
    <div className={classes.form}>
      <form className={classes.form} >
        <div className={classes.formGroup}>
          <div className={classes.formInput}>
            <label className={classes.formLabel} htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" className={clsx(classes.inputTxt)} />
          </div>
          <div className={classes.formInput}>
            <label className={classes.formLabel} htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" className={clsx(classes.inputTxt)} />
          </div>
        </div>
        <div className={classes.formGroup}>
          <div className={classes.formInput}>
            <label className={classes.formLabel} htmlFor="email ">Email Address</label>
            <input type="email" id="email" name="email" className={clsx(classes.inputTxt)} />
          </div>
          <div className={classes.formInput}>
            <label className={classes.formLabel} htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className={clsx(classes.inputTxt)} />
          </div>
        </div>
        <div className={classes.formGroup}>
          <div className={classes.formInput}>
            <label className={classes.formLabel} htmlFor="role">Role</label>
            <select className={clsx(classes.inputTxt)} id="role"  style={{backgroundColor: '#F0F0F0'}}>
              <option value="admin">admin </option>
              <option value="super admin">super admin</option>
            </select>
          </div>
        </div>
        <Button
        className={clsx(btnStyles.btn, classes.btn) } variant="contained" color="primary" >
            Add new admin
      </Button>
      </form>
    </div>
  )
}

export default AddAdmin
