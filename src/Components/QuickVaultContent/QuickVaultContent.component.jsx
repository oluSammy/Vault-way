import React from 'react'
import QuickVaultAmount from '../QuickVaultAmount/QuickVaultAmount.component';
import QuickVaultFinish from '../QuickVaultFinish/QuickVaultFinish.component';
import QuickVaultReason from '../QuickVaultReason/QuickVaultReason.component'
import QuickVaultTimeline from '../QuickVaultTimeline/QuickVaultTimeline.component';

const QuickVaultContent = ({ values, step, selectedDate, handleChange, handleNextStep, handleDateChange }) => {
  switch (step) {
    case 1:
      return (
        <QuickVaultReason
          values={values}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
        />
      )
    case 2:
      return (
        <QuickVaultTimeline
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          handleNextStep={handleNextStep}
        />
      )
    case 3:
      return (
        <QuickVaultAmount
          values={values}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
        />
      )
    default:
      return (
        <QuickVaultFinish
          values={values}
          selectedDate={selectedDate}
        />
      )
  }
}

export default QuickVaultContent
