import React, { useState } from 'react'
import quickVaultStyles from './QuickVault.styles';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LinearProgress from '@material-ui/core/LinearProgress';
import regularVaultStyles from '../RegularVault/RegularVault.styles';
import QuickVaultContent from '../../Components/QuickVaultContent/QuickVaultContent.component';

const QuickVault = () => {
  const classes = quickVaultStyles();
  const topStyles = regularVaultStyles();
  let history = useHistory();
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({ reason: '', amount: 0 , });
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
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
            <LinearProgress variant="determinate" value={(step / 4) * 100} />
          </div>
        </div>
        <h6 className={topStyles.regularTitle}>Create a quick vault</h6>
      </div>
      <QuickVaultContent
        values={values}
        step={step}
        selectedDate={selectedDate}
        handleChange={handleChange}
        handleNextStep={handleNextStep}
        handleDateChange={handleDateChange}
      />
    </div>
  )
}

export default QuickVault
