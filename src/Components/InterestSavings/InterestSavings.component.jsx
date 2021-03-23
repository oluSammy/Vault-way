import React from 'react'
import interestSavingsStyles from './InterestSavings.styles';
import RegularVaultDetail from '../RegularVaultDetail/RegularVaultDetail.component';
import trueIcon from '../../assets/icons/true-icon.png';
import falseIcon from '../../assets/icons/false-icon.png';
import clsx from 'clsx';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import Button from '@material-ui/core/Button';

const InterestSavings = ({ values, handleChange, nextStep, step, setStep }) => {
    const classes = interestSavingsStyles();
		const btnStyles = regularContentStyles();
    const interestArray = [
        { firstMonth: 5, others: 1 },
      ]
    return (
			<div className={classes.root}>
				<RegularVaultDetail title="Do you want interest on your savings?" interest={interestArray} />
				<div className={classes.btnBox}>
					<Button onClick={nextStep}
							disabled={values.interest ? false : true}
							className={btnStyles.btn} variant="contained" color="primary" >
								Continue
          </Button>
				</div>
				<form className={classes.interestForm}>
						<div className={clsx(classes.interestOption, classes.interestMargin,
							values.interest === 'true' ? classes.activeOption : '') }>
							<label htmlFor="yes" className={classes.optionLabel}>
								<input className={classes.optionsInput} value="true" id="yes" onChange={handleChange}
										checked={values.interest === "true"}
										type="radio" name="interest"
								/>
								<div className={classes.iconBox}>
									<img className={classes.optionsIcon} src={trueIcon} alt="icon"/>
								</div>
								<p className={classes.optionsText}>Yes, i do</p>
							</label>
						</div>
						<div className={clsx(classes.interestOption, values.interest === 'false' ? classes.activeOption : '') }>
							<label htmlFor="no" className={classes.optionLabel}>
								<input className={classes.optionsInput} value="false" id="no" onChange={handleChange}
										checked={values.interest === "false"}
										type="radio" name="interest"
								/>
								<div className={classes.iconBox}>
									<img className={classes.optionsIcon} src={falseIcon} alt="icon"/>
								</div>
								<p className={classes.optionsText}>Not Interested</p>
							</label>
						</div>
				</form>
			</div>
    )
}

export default InterestSavings
