import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import createVaultSuccessStyles from './CreateVaultSuccess.styles';
import regularContentStyles from '../../Components/RegularVaultContent/RegularVaultContent.styles';
import Button from '@material-ui/core/Button';

const CreateVaultSuccess = () => {
  let location = useLocation();
  const { total, type, maturityDate } = location.state;

  const classes = createVaultSuccessStyles();
  const btnStyles = regularContentStyles();
  return (
    <div className={classes.root}>
      <h3 className={classes.vaultType}>{type}</h3>
      <h1 className={classes.pageTitle}>Your vault was successfully created!</h1>

      <p className={classes.amount}>
        <span className={classes.amountSpan}>NGN</span>
          &nbsp; {total}
      </p>
      <p className={classes.amountSaved}>saved amount</p>
      <p className={classes.amountLock}>
        Your vault will be locked till
        <span className={classes.amountLockSpan}>{maturityDate}</span>
      </p>

      <Button component={Link} to="/dashboard/vaults" className={btnStyles.btn} variant="contained" color="primary">
            Back to vaults
        </Button>
    </div>
  )
}

export default CreateVaultSuccess
