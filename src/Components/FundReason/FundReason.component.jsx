import React from 'react'
import fundReasonStyles from './FundReason.styles';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import Button from '@material-ui/core/Button';


const FundReason = ({ values, handleChange, nextStep }) => {
  const classes = fundReasonStyles();
  const btnStyles = regularContentStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>What do you <br/> need funds for?</h1>
      <div className={classes.inputField}>
        <label className={classes.inputLabel} htmlFor="reason">Give your vault a customized name</label>
        <input
          className={classes.input}
          type="text"
          name="reason"
          id="reason"
          onChange={handleChange}
          placeholder="Pay my rent"
          value={values.reason}
        />
      </div>
      <Button onClick={nextStep}
        disabled={values.reason ? false : true}
        className={btnStyles.btn} variant="contained" color="primary" >
            Continue
      </Button>
    </div>
  )
}

export default FundReason
