import React from 'react'
import fundReasonStyles from '../FundReason/FundReason.styles';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import Button from '@material-ui/core/Button';
import amountStyles from './FundAmount.styles';

const FundAmount = ({ values, handleChange, nextStep }) => {
  const titleStyles = fundReasonStyles();
  const btnStyles = regularContentStyles();
  const classes = amountStyles();
  return (
    <div className={classes.root}>
      <h1 className={titleStyles.title}>
        How much does <br/>  <span className={titleStyles.titleSpan}>“{values.reason}”</span> <br/> cost?
      </h1>
      <div className={classes.inputField}>
        <label htmlFor="amount" className={classes.inputLabel}>Enter an amount</label>
        <div className={classes.textField}>
          <span className={classes.inputSpan}>NGN &nbsp;</span>
          <input
            type="number"
            name="amount"
            id="amount"
            value={values.amount}
            onChange={handleChange}
            className={classes.inputEl}
          />
          <span className={classes.inputSpan}>.00</span>
        </div>
      </div>
      <Button onClick={nextStep}
        disabled={values.amount ? false : true}
        className={btnStyles.btn} variant="contained" color="primary" >
            Continue
      </Button>
    </div>
  )
}

export default FundAmount
