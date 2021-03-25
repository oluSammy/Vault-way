import React from 'react';
import trueIcon from '../../assets/icons/true-icon.png';
import falseIcon from '../../assets/icons/false-icon.png';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import interestSavingsStyles from '../InterestSavings/InterestSavings.styles';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import RegularVaultDetail from '../RegularVaultDetail/RegularVaultDetail.component';


const AutomateSavings = ({ values, handleChange, nextStep, vaultDetail }) => {
    const classes = interestSavingsStyles();
    const btnStyles = regularContentStyles();
    return (
			<div className={classes.root}>
					<RegularVaultDetail title="Do you want to automate your savings?" interest={vaultDetail} />
					<div className={classes.btnBox}>
							<Button onClick={nextStep}
								disabled={values.automate ? false : true}
								className={btnStyles.btn} variant="contained" color="primary" >
										Continue
							</Button>
					</div>
					<form className={classes.interestForm}>
						<div className={clsx(classes.interestOption, classes.interestMargin,
							values.automate === 'true' ? classes.activeOption : '') }>
							<label htmlFor="yes" className={classes.optionLabel}>
								<input className={classes.optionsInput} value="true" id="yes" onChange={handleChange}
										checked={values.automate === "true"}
										type="radio" name="automate"
								/>
								<div className={classes.iconBox}>
									<img className={classes.optionsIcon} src={trueIcon} alt="icon"/>
								</div>
								<p className={classes.optionsText}>Yes, i do</p>
							</label>
						</div>
						<div className={clsx(classes.interestOption, values.automate === 'false' ? classes.activeOption : '') }>
							<label htmlFor="no" className={classes.optionLabel}>
								<input className={classes.optionsInput} value="false" id="no" onChange={handleChange}
										checked={values.automate === "false"}
										type="radio" name="automate"
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

export default AutomateSavings
