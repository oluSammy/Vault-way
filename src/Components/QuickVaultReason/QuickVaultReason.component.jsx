import React from 'react'
import fundReasonStyles from '../FundReason/FundReason.styles';
import Button from '@material-ui/core/Button';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';

const QuickVaultReason = ({ values, handleChange, handleNextStep }) => {
  const titleStyles = fundReasonStyles();
  const btnStyles = regularContentStyles();
  return (
    <div >
      <h1 className={titleStyles.title}>What is this <br/> money for?</h1>
      <div className={titleStyles.inputField}>
        <label className={titleStyles.inputLabel} htmlFor="reason">Give your vault a customized name</label>
        <input
          className={titleStyles.input}
          type="text"
          name="reason"
          id="reason"
          onChange={handleChange}
          placeholder="Pay my rent"
          value={values.reason}
        />
      </div>
      <Button onClick={handleNextStep}
        disabled={values.reason ? false : true}
        className={btnStyles.btn} variant="contained" color="primary" >
            Continue
      </Button>
    </div>
  )
}

export default QuickVaultReason
