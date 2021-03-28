import React from 'react';
import fundTimelineStyles from './FundTimeline.styles';
import fundReasonStyles from '../FundReason/FundReason.styles';
import Button from '@material-ui/core/Button';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const FundTimeline = ({ selectedDate, handleDateChange, nextStep, }) => {
  const classes = fundTimelineStyles();
  const titleStyles = fundReasonStyles();
  const btnStyles = regularContentStyles();

  const now = Date.now()
  const date = new Date(now)
  return (
    <div className={classes.root}>
      <h1 className={titleStyles.title}>
        What’s your <br/> timeline for this <br/> vault?
      </h1>
      <div className={classes.timelineBox}>
        <div className={classes.today}>
          <p className={classes.label}>From</p>
          <p className={classes.todayDate}>{date.toLocaleDateString()}</p>
        </div>

        <div className={classes.deadline}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
              <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="To"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                      'aria-label': 'change date',
                  }}
                  minDate={new Date()}
              />
          </MuiPickersUtilsProvider>
        </div>
      </div>
      <Button onClick={nextStep}
        disabled={new Date(selectedDate) > Date.now() ? false : true}
        className={btnStyles.btn} variant="contained" color="primary" >
            Continue
      </Button>
    </div>
  )
}

export default FundTimeline
