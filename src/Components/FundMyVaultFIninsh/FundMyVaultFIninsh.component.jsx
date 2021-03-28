import React from 'react'
import fundReasonStyles from '../FundReason/FundReason.styles';
import fundFinishStyles from './FundMyVaultFIninsh.styles';
import Button from '@material-ui/core/Button';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

const FundMyVaultFinish = ({ values, selectedDate }) => {
  const titleStyles = fundReasonStyles();
  const classes = fundFinishStyles();
  const btnStyles = regularContentStyles();
  const today = new Date(Date.now());
  const endDate = new Date(selectedDate);
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleSubmit = () => {
    handleToggle();
    setTimeout(() => {
      history.push({
        pathname: '/dashboard/vaults/fund-my-vault-Success',
        state: {
          endDate,
      }});
    },3000);
  }
  return (
    <div className={classes.root}>
      <h1 className={titleStyles.title}>
        Check out what <br/> your vault looks <br/> like
      </h1>
      <div className={classes.fundContent}>
        <div className={classes.fundContentBox}>
          <p className={classes.fundTitle}>Fund my vault name</p>
          <p className={classes.funSubTitle}>{values.reason}</p>
        </div>
        <div className={classes.fundContentBox}>
          <p className={classes.fundTitle}>Start date</p>
          <p className={classes.funSubTitle}>
            {today.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
          </p>
        </div>
        <div className={classes.fundContentBox}>
          <p className={classes.fundTitle}>End date</p>
          <p className={classes.funSubTitle}>
            {endDate.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
          </p>
        </div>
        <div className={classes.fundContentBox}>
          <p className={classes.fundTitle}>Vault goal</p>
          <p className={classes.funSubTitle}>
            NGN <span className={classes.funSubTitleSpan}>{values.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> .00 </p>
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

export default FundMyVaultFinish;
