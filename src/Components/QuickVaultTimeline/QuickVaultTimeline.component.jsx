import React from 'react'
import fundReasonStyles from '../FundReason/FundReason.styles';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import fundTimelineStyles from '../FundTimeline/FundTimeline.styles';
import Button from '@material-ui/core/Button';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const QuickVaultTimeline = ({ selectedDate, handleDateChange, handleNextStep }) => {
  const titleStyles = fundReasonStyles();
  const btnStyles = regularContentStyles();
  const dateStyles = fundTimelineStyles();

  const now = Date.now()
  const date = new Date(now)
  return (
    <div>
      <h1 className={titleStyles.title}>What’s your  timeline<br/> for this vault?</h1>
      <div className={dateStyles.timelineBox}>
        <div className={dateStyles.today}>
          <p className={dateStyles.label}>From</p>
          <p className={dateStyles.todayDate}>{date.toLocaleDateString()}</p>
        </div>

        <div className={dateStyles.deadline}>
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
      <Button onClick={handleNextStep}
      disabled={new Date(selectedDate) > Date.now() ? false : true}
      className={btnStyles.btn} variant="contained" color="primary" >
          Continue
    </Button>
    </div>
  )
}

export default QuickVaultTimeline
