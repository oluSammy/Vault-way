import React from 'react'
import savingsAmountStyles from '../SavingsAmount/SavingsAmount.styles';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';
import Button from '@material-ui/core/Button';
import paymentPlanStyles from './PaymentPlan.styles';
import vaultWayIcon from '../../assets/icons/vaultway-card-icon.png';
import masterCard from '../../assets/icons/Mastercard.png';
import clsx from 'clsx';

const PaymentPlan = ({ values, handleChange, nextStep }) => {
		const classes = savingsAmountStyles();
		const btnStyles = regularContentStyles();
		const newStyles = paymentPlanStyles();
		return (
			<div className={clsx(classes.root, newStyles.root)}>
					<div className={classes.amount}>
					<h3 className={classes.amountQuestion}>Choose a <br/> payment method.</h3>
					<form className={newStyles.form}>
							<div className={clsx(newStyles.paymentOption, values.method === 'wallet' ? newStyles.activeLabel : '') }>
									<label htmlFor="wallet" className={newStyles.paymentLabel}>
										<input type="radio" id="wallet" onChange={handleChange}
											value="wallet" name="method" className={newStyles.input}
										/>
										<p className={newStyles.walletBalance}>Wallet ballance</p>
										<p className={newStyles.walletNumber}>NGN 500,000.00</p>
										<div className={newStyles.cardFooter}>
												<div></div>
												<div className={newStyles.walletIconBox}>
														<img src={vaultWayIcon} alt="vaultway icon" className={newStyles.walletIcon}/>
												</div>
										</div>
									</label>
							</div>
							<div className={clsx(newStyles.paymentOption,
								values.method === 'bank-4960 **** **** *519' ? newStyles.activeLabel :'')}>
									<label htmlFor="bankAccess" className={newStyles.paymentLabel}>
										<input type="radio" id="bankAccess" value="bank-4960 **** **** *519" onChange={handleChange}
											name="method" className={newStyles.input}
										/>
										<p className={newStyles.walletBank}>Access bank</p>
										<p className={newStyles.walletNumber}>4960 **** **** *519</p>
										<div className={newStyles.cardFooter}>
												<div className={newStyles.expires}>Expires in 19/24</div>
												<div className={newStyles.walletIconBox}>
													<img src={masterCard} alt="vaultway icon" className={newStyles.walletIcon}/>
												</div>
										</div>
									</label>
							</div>
							<div className={clsx(newStyles.paymentOption,
								values.method === 'bank-4960 **** **** *511' ? newStyles.activeLabel : '')}>
									<label htmlFor="bankFirst" className={newStyles.paymentLabel}>
										<input type="radio" id="bankFirst" value="bank-4960 **** **** *511" onChange={handleChange}
											name="method" className={newStyles.input}
										/>
										<p className={newStyles.walletBank}>Access bank</p>
										<p className={newStyles.walletNumber}>4960 **** **** *519</p>
										<div className={newStyles.cardFooter}>
												<div className={newStyles.expires}>Expires in 19/24</div>
												<div className={newStyles.walletIconBox}>
																		<img src={masterCard} alt="vaultway icon" className={newStyles.walletIcon}/>
												</div>
										</div>
									</label>
							</div>
					</form>
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
									disabled={values.method ? false : true}
									className={btnStyles.btn} variant="contained" color="primary" >
											Continue
							</Button>
						</div>
					</div>
			</div>
		)
}

export default PaymentPlan
