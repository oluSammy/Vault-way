import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import regularVaultStyles from './RegularVault.styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LinearProgress from '@material-ui/core/LinearProgress';
import RegularVaultContent from '../../Components/RegularVaultContent/RegularVaultContent.component';
import { useHistory } from "react-router-dom";


const RegularVault = () => {
  let location = useLocation();
  const [values, setValues] =
  useState({ type: location.state.type, reason: '', interest: '', automate: "", date: '', freq: '',
  amount: '', method: '', step: 1 });
  const [selectedDate, setSelectedDate] = React.useState(Date.now());
  const [step, setStep] = useState(1);
  const classes = regularVaultStyles();
  let history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  }

  const handlePrevStep = () => {
    setStep(prevState => prevState - 1);
  }

  const nextStep = () => {
    setStep(prevState => prevState + 1);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>
      <div className={classes.regularTop}>
        <div className={classes.regularTopTop}>
          {step > 1 ?
            <div className={classes.arrowBackBox} onClick={handlePrevStep}>
              <ArrowBackIcon className={classes.arrowBack}/>
            </div> :
            <div className={classes.arrowBackBox} onClick={() => history.goBack()}>
              <ArrowBackIcon className={classes.arrowBack}/>
            </div>
          }
          <div>
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <h6 className={classes.regularTitle}>Create a regular vault</h6>
      </div>
      <div className={classes.regularContent}>
        <RegularVaultContent
          values={values}
          step={step}
          handleChange={handleChange}
          prevStep={handlePrevStep}
          nextStep ={nextStep}
          setStep={setStep}
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
        />
      </div>
    </div>
  )
}

export default RegularVault;