import React from 'react'
import fundReasonStyles from '../FundReason/FundReason.styles';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import amountStyles from '../FundAmount/FundAmount.styles';
import Button from '@material-ui/core/Button';

const QuickVaultAmount = ({ values, handleChange, handleNextStep }) => {
  const titleStyles = fundReasonStyles();
  const btnStyles = regularContentStyles();
  const inputStyles = amountStyles();
  return (
    <div>
      <h1 className={titleStyles.title}>How much do you want to save?</h1>
      <div className={inputStyles.inputField}>
        <label htmlFor="amount" className={inputStyles.inputLabel}>Enter an amount</label>
        <div className={inputStyles.textField}>
          <span className={inputStyles.inputSpan}>NGN &nbsp;</span>
          <input
            type="number"
            name="amount"
            id="amount"
            value={values.amount}
            onChange={handleChange}
            className={inputStyles.inputEl}
          />
          <span className={inputStyles.inputSpan}>.00</span>
        </div>
      </div>
      <Button onClick={handleNextStep}
        disabled={values.amount ? false : true}
        className={btnStyles.btn} variant="contained" color="primary" >
            Continue
      </Button>
    </div>
  )
}

export default QuickVaultAmount
