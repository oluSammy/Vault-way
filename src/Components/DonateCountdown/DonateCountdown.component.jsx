import React, { useState, useRef, useEffect } from 'react'
import donateCountdownStyles from './DonateCountdown.styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

const DonateCountdown = () => {
  const classes = donateCountdownStyles();

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');


  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date(2021, 11, 24, 10, 33, 30).getTime();

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
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>FundMyVault</h1>
      <h4 className={classes.fundTitle}>My mother’s medical bill</h4>
      <div className={classes.timerBox}>
        <div className={classes.timerContainer}>
          <p className={classes.timerNumber}>{timerDays}</p>
          <p className={classes.timerText}>Days</p>
        </div>
        <div className={classes.timerContainer}>
          <p className={classes.timerNumber}>{timerHours}</p>
          <p className={classes.timerText}>Hours</p>
        </div>
        <div className={classes.timerContainer}>
          <p className={classes.timerNumber}>{timerMinutes}</p>
          <p className={classes.timerText}>Minutes</p>
        </div>
        <div className={classes.timerContainer}>
          <p className={classes.timerNumber}>{timerSeconds}</p>
          <p className={classes.timerText}>Seconds</p>
        </div>
      </div>
      <div className={classes.progressBox} >
        <Box display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" value={80} className={classes.progress} />
          </Box>
          <Box minWidth={35}>
            <p>80%</p>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default DonateCountdown
