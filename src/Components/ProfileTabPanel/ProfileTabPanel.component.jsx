import React, { useState } from 'react'
import profileTabPanelStyles from './ProfileTabPanell.styles';
import profileIcon from '../../assets/icons/profile-icon.png';
import clsx from 'clsx';
import DashboardBtn from '../DashboardBtn/DashboardBtn.component';

const ProfileTabPanel = () => {
  const classes = profileTabPanelStyles();
  const [values, setValues] = useState({ name: 'Ayodeji', lastName: 'Osindele', email: 'ao@eoc.ng', mobile: '08073505624',
  address: 'Corner Grove St. Franklin Avenue', gender: 'male', postcode: '1241255'});

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div className={classes.root}>
      <form className={classes.profileForm} onSubmit={handleSubmit}>
        <div className={classes.profileFileUpload}>
          <figure className={classes.profileImgBox}>
            <img src={profileIcon} alt="vaultway profile icon"/>
          </figure>
          <input className={classes.profileFileInput} type="file" name="" id="file-upload" />
          <label className={classes.profileInputLabel} htmlFor="file-upload">Change Profile Picture</label>
        </div>
        <div className={classes.formGroup}>
          <div className={classes.formInput}>
            <label htmlFor="name" className={classes.profileInputLabel}>First Name</label>
            <input value={values.name} onChange={handleChange}
              className={classes.formTextField} type="text" id="name" name="name"
            />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="lastName" className={classes.profileInputLabel}>Last Name</label>
            <input value={values.lastName} onChange={handleChange}
              className={classes.formTextField} type="text" id="lastName" name="lastName"
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <div className={classes.formInput}>
            <label htmlFor="email" className={classes.profileInputLabel}>Email Address</label>
            <input value={values.email} onChange={handleChange}
              className={classes.formTextField} type="email" id="email" name="email"
            />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="mobile" className={classes.profileInputLabel}>Mobile Phone Number</label>
            <input value={values.mobile} onChange={handleChange}
              className={classes.formTextField} type="number" id="mobile" name="mobile"
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <div className={clsx(classes.formInput, classes.formInputVariant)}>
            <label htmlFor="address" className={classes.profileInputLabel}>Address</label>
            <input value={values.address} onChange={handleChange}
              className={classes.formTextField} type="text" id="address" name="address"
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <div className={classes.formInput}>
            <label className={classes.profileInputLabel}>Gender</label>
            <div className={classes.labelBox}>
              <label htmlFor="male"
              className={clsx(classes.radioLabel, values.gender === 'male' ? classes.radioLabelActive : classes.radioLabelInActive )}>
              <input value='male' id="male" onChange={handleChange}  checked={values.gender === 'male'}
                className={clsx(classes.formTextField, classes.radioHidden) } type="radio" name="gender"
              />
                Male
              </label>
              <label htmlFor="female"
                className={clsx(classes.radioLabel, values.gender === 'female' ? classes.radioLabelActive : classes.radioLabelInActive )}>
                Female
              <input value='female' id="female" onChange={handleChange} checked={values.gender === 'female'}
                className={clsx(classes.formTextField, classes.radioHidden) } type="radio" name="gender"
              />
              </label>
            </div>
          </div>
          <div className={classes.formInput}>
            <label htmlFor="postcode" className={classes.profileInputLabel}>Postcode/ZIiP</label>
            <input value={values.postcode} onChange={handleChange}
              className={classes.formTextField} type="number" id="postcode" name="postcode"
            />
          </div>
        </div>
        <div className={classes.btnContainer}>
          <DashboardBtn text="Save" color="#ffffff" bg="#00A343" />
        </div>
      </form>
    </div>
  )
}

export default ProfileTabPanel;
