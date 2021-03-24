import React from 'react'
import InterestSavings from '../InterestSavings/InterestSavings.component';
import SavingsReason from '../SavingsReason/SavingsReason.component';
import AutomateSavings from '../AutomateSavings/AutomateSavings.component';
import StartSavingDate from '../StartSavingDate/StartSavingDate.component';
import SavingsAmount from '../SavingsAmount/SavingsAmount.component';
import PaymentPlan from '../PaymentPlan/PaymentPlan.components';

const RegularVaultContent = ({ values, handleChange, nextStep, step, setStep, selectedDate, handleDateChange }) => {
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
        />
      )
    case 3:
      return (
        <AutomateSavings
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )
    case 4:
      return (
        <StartSavingDate
          nextStep={nextStep}
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
        />
      )
    case 5:
      return (
        <SavingsAmount
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )
    case 6:
      return (
        <PaymentPlan
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )
    default:
      return (
        <h1>Hello world</h1>
      )
  }
}

export default RegularVaultContent
