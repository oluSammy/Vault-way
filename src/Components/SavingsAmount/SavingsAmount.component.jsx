import React from 'react'
import savingsAmountStyles from './SavingsAmount.styles';
import Button from '@material-ui/core/Button';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';

const SavingsAmount = ({ values, handleChange, nextStep }) => {
    const classes = savingsAmountStyles();
    const btnStyles = regularContentStyles();
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
                        <p className={classes.amountDetailNumber}>200,000.00</p>
                    </div>
                    <div className={classes.amountDetailBox}>
                        <p className={classes.amountDetailTitle}>First month 5% Interest</p>
                        <p className={classes.amountDetailNumber}>20,000.00</p>
                    </div>
                    <div className={classes.amountDetailBox}>
                        <p className={classes.amountDetailTitle}>Other month 1% Interest</p>
                        <p className={classes.amountDetailNumber}>4,000.00</p>
                    </div>
                    <div className={classes.amountDetailBox}>
                        <p className={classes.amountDetailTitle}>Duration</p>
                        <p className={classes.amountDetailNumber}>2 months</p>
                    </div>
                    <div className={classes.amountDetailBox}>
                        <p className={classes.amountDetailTitle}>Total Earnings</p>
                        <p className={classes.amountDetailNumber}>224,000.00</p>
                    </div>
               </div>
                <div className={classes.btnBox}>
                    <Button onClick={nextStep}
                        disabled={values.amount ? false : true}
                        className={btnStyles.btn} variant="contained" color="primary" >
                            Continue
                    </Button>
                </div>
           </div>
        </div>
    )
}

export default SavingsAmount
