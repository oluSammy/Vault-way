import React, { useState } from 'react'
import fundMyVaultStyles from './FundMyVault.styles';
import FundMyVaultContent from '../../Components/FundMyVaultContent/FundMyVaultContent.components';
import regularVaultStyles from '../RegularVault/RegularVault.styles';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LinearProgress from '@material-ui/core/LinearProgress';

const FundMyVault = () => {
  const classes = fundMyVaultStyles();
  const topStyles = regularVaultStyles();
  let history = useHistory();
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({ reason: '', amount: 0, photo: '', details: '' });
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  }

  const handlePrevStep = () => {
    setStep(prevState => prevState - 1);
  }

  const handleNextStep = () => {
    setStep(prevState => prevState + 1);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className={classes.root}>
      <div className={topStyles.regularTop}>
        <div className={topStyles.regularTopTop}>
          {step > 1 ?
            <div className={topStyles.arrowBackBox} onClick={handlePrevStep} >
              <ArrowBackIcon className={topStyles.arrowBack}/>
            </div> :
            <div className={topStyles.arrowBackBox} onClick={() => history.goBack()}>
              <ArrowBackIcon className={topStyles.arrowBack}/>
            </div>
          }
          <div>
            <LinearProgress variant="determinate" value={(step/5)*100} />
          </div>
        </div>
        <h6 className={topStyles.regularTitle}>FundMyVault</h6>
      </div>
      <FundMyVaultContent
        values={values}
        step={step}
        handleChange={handleChange}
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
        nextStep={handleNextStep}
      />
    </div>
  )
}

export default FundMyVault
