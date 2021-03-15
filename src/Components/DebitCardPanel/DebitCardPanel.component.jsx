import React, {useState} from 'react'
import debitCardPanelStyles from './DebitCardPanel.styles';
import DashboardBtn from '../DashboardBtn/DashboardBtn.component';
import clsx from 'clsx';

const DebitCardPanel = () => {
  const classes = debitCardPanelStyles();
  const [values, setValues] = useState({cvv: '', month: '', year: ''});
  const [cardNumber, setCardNumber] = useState('');

  const handleCardNumber = e => {
    // let newNum = e.target.value.toString().match(/.{4}/g).join(' ');
    setCardNumber(e.target.value);
    // console.log(newNum);
  }

  const handleCvv = e => {
    const { name, value } = e.target;
    if (name === 'cvv' && value < 1000) {
      setValues({...values, [name]: value});
    }
  }

  return (
    <div>
      <form className={classes.debitForm}>
        <div className={classes.formGroup}>
          <div className={clsx(classes.formInput, classes.cardInput)}>
            <label className={classes.formLabel} htmlFor="card-number">Card Number</label>
            <input className={classes.textField} value={cardNumber} onChange={handleCardNumber} type="number" id="card-number"
              name="card" placeholder="0000-0000-0000-0000"
            />
          </div>
          <div className={clsx(classes.formInput)}>
            <label className={classes.formLabel} htmlFor="card-number">cvv</label>
            <input className={classes.textField} value={values.cvv} onChange={handleCvv} type="number" id="card-number"
              name="cvv" placeholder="123"
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <div className={clsx(classes.formInput)}>
            <label className={classes.formLabel} htmlFor="month">MONTH</label>
            <select className={clsx(classes.textField, classes.select) } id="month">
              <option value="">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className={clsx(classes.formInput)}>
            <label className={classes.formLabel} htmlFor="year">YEAR</label>
            <select className={clsx(classes.textField, classes.select) } id="year">
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
        </div>
        <DashboardBtn text="Save" color="#ffffff" bg="#00A343" />
      </form>
    </div>
  )
}

export default DebitCardPanel
