import React, { useState, useRef, useEffect } from 'react'
import fundSuccessStyles from './FundMyVaultSuccessPage.styles';
import copyIcon from '../../assets/icons/copy-icon.png'
import regularContentStyles from '../../Components/RegularVaultContent/RegularVaultContent.styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




const FundMyVaultSuccessPage = () => {
  const classes = fundSuccessStyles();
  const btnStyles = regularContentStyles();
  const [open, setOpen] = useState(false);
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const { state: { endDate } } = useLocation();

  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date(endDate).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDiff = countDownDate - now;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)/ (1000 * 60 * 60)));
      const mins = Math.floor((timeDiff % (1000 * 60 * 60 )) / (1000 * 60));
      const secs = Math.floor((timeDiff % (1000 * 60) )/ 1000);

      if (timeDiff < 0) {
        // stop timer
        clearInterval(interval.current)
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(mins);
        setTimerSeconds(secs);
      }
    }, 1000)
  }

  useEffect(() => {
    let intervals = interval.current
    startTimer();

    return () => {
      clearInterval(intervals)
    }
  });

  const handleClick = () => {
    navigator.clipboard.writeText('fundayodeji001.vaultway.com');
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <h6 className={classes.type}>FundMyVault</h6>
      <h1 className={classes.title}>
        Your vault was successfully created! <br/>
        <span className={classes.titleSpan}>The time is ticking, share the link to <br/> the people you know.</span>
      </h1>
      <div className={classes.timerContainer}>
        <div className={classes.timerTop}>
          <p className={classes.timerStatus}>Pay my Rent</p>
          <p className={classes.timerStatus}>
            <span className={classes.timerStatusSpan}>0%</span> of your goal
          </p>
        </div>
        <div className={classes.timerContent}>
          <div className={classes.timerBox}>
            <p className={classes.timerNumber}>{timerDays}</p>
            <p className={classes.timerText}>Days</p>
          </div>
          <div className={classes.timerBox}>
            <p className={classes.timerNumber}>{timerHours}</p>
            <p className={classes.timerText}>Hours</p>
          </div>
          <div className={classes.timerBox}>
            <p className={classes.timerNumber}>{timerMinutes}</p>
            <p className={classes.timerText}>Minutes</p>
          </div>
          <div className={classes.timerBox}>
            <p className={classes.timerNumber}>{timerSeconds}</p>
            <p className={classes.timerText}>Seconds</p>
          </div>
        </div>
      </div>
        <div className={classes.copy}>
          <p className={classes.copyText}>Copy the link ✌🏾</p>
          <Tooltip title="Copy to clipboard" placement="top">
              <div className={classes.copyBox} onClick={handleClick}>
                <p className={classes.copyLink}>fundayodeji001.vaultway.com</p>
                <img src={copyIcon} alt=""/>
              </div>
          </Tooltip>
        </div>
      <Button component={Link} to="/dashboard/vaults" className={btnStyles.btn} variant="contained" color="primary" >
        Back to vaults
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message="Link copied to clipboard"
        TransitionComponent={Slide}
      />
    </div>
  )
}

export default FundMyVaultSuccessPage
