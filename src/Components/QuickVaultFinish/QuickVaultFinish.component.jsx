import React from 'react'
import Button from '@material-ui/core/Button';
import fundReasonStyles from '../FundReason/FundReason.styles';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import fundFinishStyles from '../FundMyVaultFIninsh/FundMyVaultFIninsh.styles';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const QuickVaultFinish = ({ values, selectedDate }) => {
  const titleStyles = fundReasonStyles();
  const btnStyles = regularContentStyles();
  const pageStyles = fundFinishStyles();

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
        pathname: '/dashboard/vaults/quick-vault-Success',
        state: {
          amount: values.amount,
          endDate
      }});
    },3000);
  }
  return (
    <div>
     <h1 className={titleStyles.title}>
        Check out what <br/> your vault looks <br/> like
      </h1>
      <div className={pageStyles.fundContent}>
        <div className={pageStyles.fundContentBox}>
          <p className={pageStyles.fundTitle}>Fund my vault name</p>
          <p className={pageStyles.funSubTitle}>{values.reason}</p>
        </div>
        <div className={pageStyles.fundContentBox}>
          <p className={pageStyles.fundTitle}>Start date</p>
          <p className={pageStyles.funSubTitle}>
            {today.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
          </p>
        </div>
        <div className={pageStyles.fundContentBox}>
          <p className={pageStyles.fundTitle}>End date</p>
          <p className={pageStyles.funSubTitle}>
            {endDate.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
          </p>
        </div>
        <div className={pageStyles.fundContentBox}>
          <p className={pageStyles.fundTitle}>Vault goal</p>
          <p className={pageStyles.funSubTitle}>
            NGN <span className={pageStyles.funSubTitleSpan}>{values.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> .00 </p>
        </div>
      </div>
      <div className={pageStyles.finishBtnBox}>
        <p className={pageStyles.finishEmoji}>Looking great👌🏾</p>
        <Button className={clsx(btnStyles.btn, pageStyles.backdrop)} variant="contained" color="primary" onClick={handleSubmit} >
            Finish
        </Button>
        <Backdrop className={pageStyles.backdrop} open={open} onClick={handleClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  )
}

export default QuickVaultFinish
