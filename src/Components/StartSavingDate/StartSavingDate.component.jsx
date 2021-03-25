import React from 'react'
import RegularVaultDetail from '../RegularVaultDetail/RegularVaultDetail.component';
import savingDateStyles from './StartSavingDate.styles';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import Button from '@material-ui/core/Button';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const StartSavingDate = ({ nextStep, selectedDate, handleDateChange, vaultDetail }) => {
    const classes = savingDateStyles();
    const btnStyles = regularContentStyles();
    return (
        <div className={classes.root}>
            <RegularVaultDetail title="When do you want to start saving?" interest={vaultDetail} />
            <div className={classes.savingsTop}>
                <h2 className={classes.savingsTopTitle}>You’ll save this day for {vaultDetail[0].months} months</h2>
                <Button onClick={nextStep}
                    disabled={selectedDate ? false : true}
                    className={btnStyles.btn} variant="contained" color="primary" >
                        Continue
                </Button>
            </div>
            <div className={classes.dateContainer}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Select Date"
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
    )
}

export default StartSavingDate;
