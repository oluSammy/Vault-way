import React from 'react'
import regularFinishStyles from './RegularVaultFinish.styles';
import Button from '@material-ui/core/Button';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

const RegularVaultFinish = ({ values, selectedDate, vaultDetail }) => {
  const classes = regularFinishStyles();
  const btnStyles = regularContentStyles();
  const date = new Date(selectedDate);
  let history = useHistory();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const { firstMonth, others, months } = vaultDetail[0];
  let firstMonthInterest = (firstMonth / 100) * values.amount;
  let otherMonthsInterest = (others / 100) * values.amount;
  let totalEarnings = +values.amount + firstMonthInterest + ((months - 1) * otherMonthsInterest );
  let maturityDate = new Date(selectedDate);
  maturityDate.setMonth(date.getMonth() + months);

  let FormatDecimalNumberWithCommas = num => {
      let numberArr = num.toString().split('.');
      numberArr[0] = numberArr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return numberArr.join('.');
  }

  const handleSubmit = () => {
    handleToggle();
    setTimeout(() => {
      history.push({
        pathname: '/dashboard/vaults/success',
        state: {
          total: FormatDecimalNumberWithCommas((+values.amount).toFixed(2)),
          type: values.type,
          maturityDate: maturityDate.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
        }});
    },3000);
  }

  return (
    <div className={classes.root}>
      <h1 className={classes.finishHeading}>Check out what your vault looks like</h1>
      <div className={classes.finishContent}>
        <div className={classes.finishBox}>
          <p className={classes.finishTitle}>Safe Name</p>
          <p className={classes.finishSub}>{values.reason}</p>
        </div>
        <div className={classes.finishBox}>
          <p className={classes.finishTitle}>Principal</p>
          <p className={classes.finishSub}>
            {FormatDecimalNumberWithCommas((+values.amount).toFixed(2))}
          </p>
        </div>
        <div className={classes.finishBox}>
          <p className={classes.finishTitle}>Interest P/A </p>
          <p className={classes.finishSub}>xxxxxx</p>
        </div>
        <div className={classes.finishBox}>
          <p className={classes.finishTitle}>Start date</p>
          <p className={classes.finishSub}>{date.toLocaleDateString()}</p>
        </div>
        <div className={classes.finishBox}>
          <p className={classes.finishTitle}>Maturity date</p>
          <p className={classes.finishSub}>{maturityDate.toLocaleDateString()}</p>
        </div>
        <div className={classes.finishBox}>
          <p className={classes.finishTitle}>Frequency</p>
          <p className={classes.finishSub}>{values.freq}</p>
        </div>
        <div className={classes.finishBox}>
          <p className={classes.finishTitle}>Estimated returns</p>
          <p className={classes.finishSub}>
            {FormatDecimalNumberWithCommas(totalEarnings.toFixed(2))}
          </p>
        </div>
      </div>
      <div className={classes.finishBtnBox}>
        <p className={classes.finishEmoji}>Looking great👌🏾</p>
        <Button className={clsx(btnStyles.btn, classes.backdrop)} variant="contained" color="primary" onClick={handleSubmit} >
            Finish
        </Button>
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  )
}

export default RegularVaultFinish
