import React from 'react'
import InterestSavings from '../InterestSavings/InterestSavings.component';
import SavingsReason from '../SavingsReason/SavingsReason.component';
import AutomateSavings from '../AutomateSavings/AutomateSavings.component';
import StartSavingDate from '../StartSavingDate/StartSavingDate.component';
import SavingsAmount from '../SavingsAmount/SavingsAmount.component';
import PaymentPlan from '../PaymentPlan/PaymentPlan.components';
import TyroFreq from '../TyroFreq/TyroFreq.component';
import RegularVaultFinish from '../RegularVaultFinish/RegularVaultFinish.component';

const RegularVaultContent = ({ values, handleChange, nextStep, step, selectedDate, handleDateChange, vaultDetail }) => {
  switch (step) {
    case 1:
      return (
        <SavingsReason
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
          step={step}
          vaultDetail={vaultDetail}
        />
      );
    case 2:
      return (
        <InterestSavings
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
          vaultDetail={vaultDetail}
        />
      )
    case 3:
      return (
        <AutomateSavings
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
          vaultDetail={vaultDetail}
        />
      )
    case 4:
      return (
        <StartSavingDate
          nextStep={nextStep}
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          vaultDetail={vaultDetail}
        />
      )
    case 5:
      return (
        <TyroFreq
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
          vaultDetail={vaultDetail}
        />
      )
    case 6:
      return (
        <SavingsAmount
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
          vaultDetail={vaultDetail}
        />
      )
    case 7:
      return (
        <PaymentPlan
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
          vaultDetail={vaultDetail}
        />
      )
    default:
      return (
       <RegularVaultFinish
        values={values}
        selectedDate={selectedDate}
        vaultDetail={vaultDetail}
      />
      )
  }
}

export default RegularVaultContent
