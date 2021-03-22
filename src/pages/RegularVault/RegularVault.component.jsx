import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import regularVaultStyles from './RegularVault.styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LinearProgress from '@material-ui/core/LinearProgress';
import RegularVaultContent from '../../Components/RegularVaultContent/RegularVaultContent.component';


const RegularVault = () => {
  let location = useLocation();
  const [values, setValues] =
  useState({ type: location.state.type, reason: '', interest: true, automate: false, date: '', freq: '',
  amount: '', method: '', step: 1 });
  const classes = regularVaultStyles();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <div className={classes.root}>
      <div className={classes.regularTop}>
        <div className={classes.regularTopTop}>
          <div className={classes.arrowBackBox}>
            <ArrowBackIcon className={classes.arrowBack}/>
          </div>
          <div>
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <h6 className={classes.regularTitle}>Create a regular vault</h6>
      </div>
      <div className={classes.regularContent}>
        <RegularVaultContent values={values} handleChange={handleChange} />
      </div>
    </div>
  )
}

export default RegularVault;