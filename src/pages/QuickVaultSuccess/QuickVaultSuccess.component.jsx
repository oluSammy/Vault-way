import React from 'react'
import quickVaultSuccessStyle from './QuickVaultSuccess.styles';
import regularContentStyles from '../../Components/RegularVaultContent/RegularVaultContent.styles';
import fundReasonStyles from '../../Components/FundReason/FundReason.styles';
import Button from '@material-ui/core/Button';
import { useLocation, Link } from 'react-router-dom';


const QuickVaultSuccess = () => {
  const classes = quickVaultSuccessStyle();
  const btnStyles = regularContentStyles();
  const titleStyles = fundReasonStyles();
  const { state: { amount, endDate } } = useLocation();
  return (
    <div>
      <h1 className={titleStyles.title}>
      Your vault was <br/> successfully created!
      </h1>
      <p className={classes.amount}>
        NGN <span className={classes.amountSpan}>{amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</span> .00
      </p>
      <p className={classes.saved}>Saved amount</p>
      <p className={classes.locked}>Your vault will be locked till
        <span className={classes.lockedSpan}> &nbsp;
           {endDate.toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
        </span>
      </p>
      <Button component={Link} to="/dashboard/vaults"
        className={btnStyles.btn} variant="contained" color="primary" > Continue
      </Button>
    </div>
  )
}

export default QuickVaultSuccess
