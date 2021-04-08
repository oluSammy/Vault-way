import React, {useState} from 'react'
import debitCardPanelStyles from './DebitCardPanel.styles';
import DashboardBtn from '../DashboardBtn/DashboardBtn.component';
import clsx from 'clsx';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import visa from '../../assets/img/Visa-card.png';
import AddIcon from '@material-ui/icons/Add';

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

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  }

  return (
    <div className={classes.root}>
      <form className={classes.debitForm}>
        <div className={classes.formGroup}>
          <div className={clsx(classes.formInput, classes.cardInput)}>
            <label className={classes.formLabel} htmlFor="card-number">Card Number</label>
            <input className={classes.textField} value={cardNumber} onChange={handleCardNumber} type="number" id="card-number"
              name="card" placeholder="0000-0000-0000-0000"
            />
          </div>
          <div className={clsx(classes.formInput, classes.cvvInput)}>
            <label className={classes.formLabel} htmlFor="card-cvv">cvv</label>
              <input className={classes.textField} value={values.cvv} onChange={handleCvv} type="number" id="card-cvv"
                name="cvv" placeholder="123"
              />
              <ErrorOutlineIcon className={classes.cvvIcon} />
            <div className={classes.cvvContainer}>
            </div>
          </div>
        </div>
        <div className={classes.formGroup}>
          <div className={clsx(classes.formInput, classes.selectInput, classes.selectMargin)}>
            <label className={classes.formLabel} htmlFor="month">MONTH</label>
            <select value={values.month} onChange={handleChange} className={clsx(classes.textField, classes.select) } id="month">
              <option value="">January</option>
              <option value="lime">February</option>
              <option value="coconut">March</option>
              <option value="mango">April</option>
            </select>
          </div>
          <div className={clsx(classes.formInput, classes.selectInput)}>
            <label className={classes.formLabel} htmlFor="year">YEAR</label>
            <select value={values.month} onChange={handleChange} className={clsx(classes.textField, classes.select) } id="year">
              <option value="grapefruit">1990</option>
              <option value="lime">2000</option>
              <option value="coconut">2001</option>
              <option value="mango">2021</option>
            </select>
          </div>
        </div>
        <DashboardBtn text="Save" color="#ffffff" bg="#00A343" />
      </form>
      <div className={classes.visaCard}>
        <div className={classes.visaCardTop}>
          <h4 className={classes.visaCardTitle}>Access Bank</h4>
          <p className={classes.visaCardDot}>...</p>
        </div>
        <p className={classes.visaCardNumber}>4960 **** **** *519</p>
        <div className={classes.visaCardFooter}>
          <p className={classes.visaCardExpires}>Expires 04/22</p>
            <img src={visa} className={classes.visaCardImg} alt="card"/>
        </div>
      </div>
      <div className={classes.btnBox}>
        <DashboardBtn
          text="Add new card" color="#ffffff" bg="#00A343"
          icon={<AddIcon className={classes.newCardIcon} />}
        />
      </div>
    </div>
  )
}

export default DebitCardPanel
