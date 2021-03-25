import React from 'react'
import RegularVaultDetail from '../RegularVaultDetail/RegularVaultDetail.component';
import tyroFreqStyles from './TyroFreq.styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import interestSavingsStyles from '../InterestSavings/InterestSavings.styles';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import doubleCheck from '../../assets/icons/double-check-icon.png';

const TyroFreq = ({ values, handleChange, nextStep, vaultDetail }) => {
  const classes = tyroFreqStyles();
  const btnBoxStyles = interestSavingsStyles();
  const btnStyles = regularContentStyles();
  return (
    <div className={classes.root}>
      <RegularVaultDetail title="How often do you want to save" interest={vaultDetail} questionMark />
      <div className={btnBoxStyles.btnBox}>
          <Button onClick={nextStep}
            disabled={values.freq ? false : true}
            className={btnStyles.btn} variant="contained" color="primary" >
                Continue
          </Button>
        </div>
      <form className={classes.form} >
        <div className={clsx(classes.option, values.freq === 'daily' ? classes.activeLabel : '')}>
          <label htmlFor="daily" className={classes.label}>
            <input
              type="radio"
              name="freq"
              id="daily"
              value="daily"
              onChange={handleChange}
              className={classes.input} />
            <div className={clsx(classes.iconBox, values.freq === 'daily' ? classes.activeIcon : '')}>
              <img src={doubleCheck} className={classes.icon} alt="daily"/>
            </div>
            <p className={clsx(classes.optionText, values.freq === 'daily' ? classes.activeText : '')}>Daily</p>
          </label>
        </div>
        <div className={clsx(classes.option, values.freq === 'weekly' ? classes.activeLabel : '')}>
          <label htmlFor="weekly" className={classes.label}>
            <input
              type="radio"
              name="freq"
              id="weekly"
              value="weekly"
              onChange={handleChange}
              className={classes.input} />
            <div className={clsx(classes.iconBox, values.freq === 'weekly' ? classes.activeIcon : '')}>
              <img src={doubleCheck} className={classes.icon} alt="weekly"/>
            </div>
            <p className={clsx(classes.optionText, values.freq === 'weekly' ? classes.activeText : '')}>weekly</p>
          </label>
        </div>
        <div className={clsx(classes.option, values.freq === 'monthly' ? classes.activeLabel : '')}>
          <label htmlFor="monthly" className={classes.label}>
            <input
              type="radio"
              name="freq"
              id="monthly"
              value="monthly"
              onChange={handleChange}
              className={classes.input}
            />
            <div className={clsx(classes.iconBox, values.freq === 'monthly' ? classes.activeIcon : '')}>
              <img src={doubleCheck} className={classes.icon} alt="monthly"/>
            </div>
            <p className={clsx(classes.optionText, values.freq === 'monthly' ? classes.activeText : '')}>monthly</p>
          </label>
        </div>
      </form>
    </div>
  )
}

export default TyroFreq
