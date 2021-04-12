import React from 'react'
import adminSettingsStyles from './AdminSettings.styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import addAdminStyles from '../../Components/AddAdmin/AddAdmin.styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import regularContentStyles from '../../Components/RegularVaultContent/RegularVaultContent.styles';

const AdminSettings = () => {
  const classes = adminSettingsStyles();
  const formStyles = addAdminStyles();
  const btnStyles = regularContentStyles();
  return (
    <div className={classes.root}>
      <div className={classes.acctBox}>
        <div className={classes.acctImgBox}>
          <AccountCircleOutlinedIcon className={classes.acctImg} />
        </div>
        <h1 className={classes.title}>Change Profile Picture</h1>
      </div>
      <form className={formStyles.form} >
        <div className={formStyles.formGroup}>
          <div className={formStyles.formInput}>
            <label className={formStyles.formLabel} htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" className={clsx(formStyles.inputTxt)} />
          </div>
          <div className={formStyles.formInput}>
            <label className={formStyles.formLabel} htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" className={clsx(formStyles.inputTxt)} />
          </div>
        </div>
        <div className={formStyles.formGroup}>
          <div className={formStyles.formInput}>
            <label className={formStyles.formLabel} htmlFor="email ">Email Address</label>
            <input type="email" id="email" name="email" className={clsx(formStyles.inputTxt)} />
          </div>
          <div className={formStyles.formInput}>
            <label className={formStyles.formLabel} htmlFor="phone">Mobile Phone Number</label>
            <input type="text" id="phone" name="phone" className={clsx(formStyles.inputTxt)} />
          </div>
        </div>
        <div className={formStyles.formGroup}>
          <div className={formStyles.formInput}>
            <label className={formStyles.formLabel} htmlFor="email ">Change your old password</label>
            <input type="password" id="password" name="password" className={clsx(formStyles.inputTxt)} />
          </div>
          <div className={formStyles.formInput}>
            <label className={formStyles.formLabel} htmlFor="newPassword">.</label>
            <input type="password" id="newPassword" name="newPassword" className={clsx(formStyles.inputTxt)} />
          </div>
        </div>
        <div>
          <Button
            className={clsx(btnStyles.btn, classes.btnChange) } variant="contained" color="primary" style={{background: '#CECECE'}} >
                Change password
          </Button>
        </div>
        <Button
        className={clsx(btnStyles.btn, classes.btn) } variant="contained" color="primary" >
            Update profile
      </Button>
      </form>
    </div>
  )
}

export default AdminSettings
