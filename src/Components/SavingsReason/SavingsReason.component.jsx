import React from 'react'
import savingsReasonStyles from './SavingsReason.styles';
import RegularVaultDetail from '../RegularVaultDetail/RegularVaultDetail.component';
import Button from '@material-ui/core/Button';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import carIcon from '../../assets/icons/vault-car.png';
import rent from '../../assets/icons/vault-rent.png';
import weddingIcon from '../../assets/icons/vault-wedding.png';
import holiday from '../../assets/icons/vault-holiday.png';
import increase from '../../assets/icons/vault-increase.png';
import gadget from '../../assets/icons/vault-gadget.png';
import fees from '../../assets/icons/vault-school.png';
import project from '../../assets/icons/vault-project.png';
import clsx from 'clsx';

const SavingsReason = ({ values, handleChange, nextStep, step }) => {
  const classes = savingsReasonStyles();
  const btnStyles = regularContentStyles();
  const interestArray = [
    { firstMonth: 5, others: 1 },
  ]
  return (
    <div className={classes.root}>
      <RegularVaultDetail title="What are you saving for?" interest={interestArray} />
      <form>
        <div className={classes.formTop}>
          <input type="text" name="reason" className={classes.formInput}
            placeholder="Give your vault a customized name" onChange={handleChange} value={values.reason}
          />
          <Button onClick={nextStep}
            disabled={values.reason ? false : true}
            className={btnStyles.btn} variant="contained" color="primary" >
              Continue
          </Button>
        </div>
        <div className={classes.optionsContainer}>
        <div className={clsx(classes.option, values.reason === 'buy a car' ? classes.activeInput : '') }>
            <label htmlFor="car" className={classes.optionsLabel}>
              <div className={classes.optionsIconBox}>
                <img src={carIcon} alt="buy a car" className={classes.optionsLabelIcon} />
              </div>
              <p className={classes.optionsLabelText}>Buy a car</p>
              <input className={classes.optionsInput} value='buy a car' id="car" onChange={handleChange}
                checked={values.reason === 'buy a car'}
                type="radio" name="reason"
              />
            </label>
          </div>
          <div className={clsx(classes.option, values.reason === 'pay my rent' ? classes.activeInput : '') }>
            <label htmlFor="rent" className={classes.optionsLabel}>
              <div className={classes.optionsIconBox}>
                <img src={rent} alt="My big project" className={classes.optionsLabelIcon} />
              </div>
              <p className={classes.optionsLabelText}>pay my rent</p>
              <input className={classes.optionsInput} value='pay my rent' id="rent" onChange={handleChange}
                checked={values.reason === 'pay my rent'}
                type="radio" name="reason"
              />
            </label>
          </div>
          <div className={clsx(classes.option, values.reason === 'fund my wedding' ? classes.activeInput : '') }>
            <label htmlFor="wedding" className={classes.optionsLabel}>
              <div className={classes.optionsIconBox}>
                <img src={weddingIcon} alt="My big project" className={classes.optionsLabelIcon} />
              </div>
              <p className={classes.optionsLabelText}>Fund my wedding</p>
              <input className={classes.optionsInput} value='fund my wedding' id="wedding" onChange={handleChange}
                checked={values.reason === 'fund my wedding'}
                type="radio" name="reason"
              />
            </label>
          </div>
          <div className={clsx(classes.option, values.reason === 'Next holiday trip' ? classes.activeInput : '') }>
            <label htmlFor="holiday" className={classes.optionsLabel}>
              <div className={classes.optionsIconBox}>
                <img src={holiday} alt="My big project" className={classes.optionsLabelIcon} />
              </div>
              <p className={classes.optionsLabelText}>Next holiday trip</p>
              <input className={classes.optionsInput} value='Next holiday trip' id="holiday" onChange={handleChange}
                checked={values.reason === 'Next holiday trip'}
                type="radio" name="reason"
              />
            </label>
          </div>
          <div className={clsx(classes.option, values.reason === 'Increase my money' ? classes.activeInput : '') }>
            <label htmlFor="increase" className={classes.optionsLabel}>
              <div className={classes.optionsIconBox}>
                <img src={increase} alt="My big project" className={classes.optionsLabelIcon} />
              </div>
              <p className={classes.optionsLabelText}>Increase my money</p>
              <input className={classes.optionsInput} value="Increase my money" id="increase" onChange={handleChange}
                checked={values.reason === 'Increase my money'}
                type="radio" name="reason"
              />
            </label>
          </div>
          <div className={clsx(classes.option, values.reason === 'Buy a gadget' ? classes.activeInput : '') }>
            <label htmlFor="gadget" className={classes.optionsLabel}>
              <div className={classes.optionsIconBox}>
                <img src={gadget} alt="My big project" className={classes.optionsLabelIcon} />
              </div>
              <p className={classes.optionsLabelText}>Buy a gadget</p>
              <input className={classes.optionsInput} value="Buy a gadget" id="gadget" onChange={handleChange}
                checked={values.reason === 'Buy a gadget'}
                type="radio" name="reason"
              />
            </label>
          </div>
          <div className={clsx(classes.option, values.reason === 'Pay school fees' ? classes.activeInput : '') }>
            <label htmlFor="fees" className={classes.optionsLabel}>
              <div className={classes.optionsIconBox}>
                <img src={fees} alt="My big project" className={classes.optionsLabelIcon} />
              </div>
              <p className={classes.optionsLabelText}>Pay school fees </p>
              <input className={classes.optionsInput} value="Pay school fees" id="fees" onChange={handleChange}
                checked={values.reason === 'Pay school fees'}
                type="radio" name="reason"
              />
            </label>
          </div>
          <div className={clsx(classes.option, values.reason === 'My big project' ? classes.activeInput : '') }>
            <label htmlFor="project" className={classes.optionsLabel}>
              <div className={classes.optionsIconBox}>
                <img src={project} alt="My big project" className={classes.optionsLabelIcon} />
              </div>
              <p className={classes.optionsLabelText}>My big project</p>
              <input className={classes.optionsInput} value="My big project" id="project" onChange={handleChange}
                checked={values.reason === 'My big project'}
                type="radio" name="reason"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SavingsReason
