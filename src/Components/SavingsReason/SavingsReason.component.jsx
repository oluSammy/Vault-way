import React from 'react'
import savingsReasonStyles from './SavingsReason.styles';

const SavingsReason = ({ title, interest }) => {
  const classes = savingsReasonStyles();
  return (
    <div className={classes.root}>
      <h3 className={classes.title}>What are you <br/> saving for?</h3>
      <div className={classes.interestBox}>
        <div className={classes.interestContainer}>
          <p className={classes.interestTitle}>5% interest</p>
          <p className={classes.interestSubTitle}>1st month</p>
        </div>
        <div className={classes.interestContainer}>
          <p className={classes.interestTitle}>1% interest</p>
          <p className={classes.interestSubTitle}>Other month(s)</p>
        </div>
      </div>
    </div>
  )
}

export default SavingsReason
