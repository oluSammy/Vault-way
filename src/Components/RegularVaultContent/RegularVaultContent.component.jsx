import React from 'react'
import InterestSavings from '../InterestSavings/InterestSavings.component';
import SavingsReason from '../SavingsReason/SavingsReason.component';

const RegularVaultContent = ({ values, handleChange, nextStep, step, setStep }) => {
  switch (step) {
    case 1:
      return (
        <SavingsReason
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
          step={step}
        />
      );
    case 2:
      return (
        <InterestSavings
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
          step={step}
          setStep={setStep}
        />
      )
    default:
      return (
        <h1>Hello world</h1>
      )
  }
}

export default RegularVaultContent
