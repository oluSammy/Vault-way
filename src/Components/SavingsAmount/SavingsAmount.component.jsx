import React from 'react'
import savingsAmountStyles from './SavingsAmount.styles';
import Button from '@material-ui/core/Button';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';

const SavingsAmount = ({ values, handleChange, nextStep, vaultDetail }) => {
    const classes = savingsAmountStyles();
    const btnStyles = regularContentStyles();
    const { firstMonth, others, months } = vaultDetail[0];
    let firstMonthInterest = (firstMonth / 100) * values.amount;
    let otherMonthsInterest = (others / 100) * values.amount;
    let totalEarnings = +values.amount + firstMonthInterest + ((months - 1) * otherMonthsInterest )

    let FormatDecimalNumberWithCommas = num => {
        let numberArr = num.toString().split('.');
        numberArr[0] = numberArr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return numberArr.join('.');
    }
    return (
        <div className={classes.root}>
           <div className={classes.amount}>
            <h3 className={classes.amountQuestion}>How much do <br /> you want to <br /> save?</h3>
            <div className={classes.amountInputBox}>
                <label className={classes.amountLabel} htmlFor="amount">Enter an amount</label>
                <div className={classes.inputContainer}>
                    <p className={classes.inputPrefix}>NGN</p>
                    <input className={classes.amountInput}
                        type="number" id="amount" value={values.amount}
                        onChange={handleChange} name="amount"
                    />
                    <p className={classes.inputPrefix}>.00</p>
                </div>
            </div>
           </div>
           <div className={classes.amountDetails}>
               <div className={classes.amountDetailsFlex}>
                    <div className={classes.amountDetailBox}>
                        <p className={classes.amountDetailTitle}>Principal</p>
                        <p className={classes.amountDetailNumber}>
                            {FormatDecimalNumberWithCommas((+values.amount).toFixed(2))}
                        </p>
                    </div>
                    <div className={classes.amountDetailBox}>
                        <p className={classes.amountDetailTitle}>First month {firstMonth}% Interest</p>
                        <p className={classes.amountDetailNumber}>
                            {FormatDecimalNumberWithCommas(firstMonthInterest.toFixed(2))}
                        </p>
                    </div>
                    <div className={classes.amountDetailBox}>
                        <p className={classes.amountDetailTitle}>Other month {others}% Interest</p>
                        <p className={classes.amountDetailNumber}>
                            {FormatDecimalNumberWithCommas(otherMonthsInterest.toFixed(2))}
                        </p>
                    </div>
                    <div className={classes.amountDetailBox}>
                        <p className={classes.amountDetailTitle}>Duration</p>
                        <p className={classes.amountDetailNumber}>{months} months</p>
                    </div>
                    <div className={classes.amountDetailBox}>
                        <p className={classes.amountDetailTitle}>Total Earnings</p>
                        <p className={classes.amountDetailNumber}>{FormatDecimalNumberWithCommas(totalEarnings.toFixed(2))}</p>
                    </div>
               </div>
                <div className={classes.btnBox}>
                    <Button onClick={nextStep}
                        disabled={values.amount && +values.amount > 0 ? false : true}
                        className={btnStyles.btn} variant="contained" color="primary" >
                            Continue
                    </Button>
                </div>
           </div>
        </div>
    )
}

export default SavingsAmount
