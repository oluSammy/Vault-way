import React from 'react'
import FundReason from '../FundReason/FundReason.component'
import FundDetail from '../FundDetail/FundDetail.components';
import FundAmount from '../FundAmount/FundAmount.component';
import FundTimeline from '../FundTimeline/FundTimeline.component';
import FundMyVaultFinish from '../FundMyVaultFIninsh/FundMyVaultFIninsh.component';

const FundMyVaultContent = ({ values, step, handleChange, selectedDate, handleDateChange, nextStep }) => {
  switch(step) {
    case 1:
      return(
        <FundReason
        values={values}
        handleChange={handleChange}
        nextStep={nextStep}
        />
      )
    case 2:
      return (
        <FundDetail
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )
    case 3:
      return (
        <FundAmount
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )
    case 4:
      return (
        <FundTimeline
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          nextStep={nextStep}
        />
      )
    default:
      return (
        <FundMyVaultFinish
          values={values}
          selectedDate={selectedDate}
        />
      )
  }
}

export default FundMyVaultContent
