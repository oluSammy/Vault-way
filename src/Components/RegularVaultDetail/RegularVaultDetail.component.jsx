import React from 'react'
import regularVaultDetailStyles from './RegularVaultDetail.styles';
import clsx from 'clsx';

const RegularVaultDetail = ({ title, interest, questionMark }) => {
  const classes = regularVaultDetailStyles();
  const re = /\b[\w']+(?:\s+[\w']+){0,2}/g;
  const wordList = title.match(re);
  return (
    <div className={classes.root}>
      <h3 className={classes.title}>{wordList.join("\r\n")} {questionMark ? '?' : ''}</h3>
      <div className={classes.interestBox}>
        <div className={clsx(classes.interestContainer, classes.marginInterest) }>
          <p className={classes.interestTitle}>{interest[0].firstMonth}% interest</p>
          <p className={classes.interestSubTitle}>1st month</p>
        </div>
        <div className={classes.interestContainer}>
          <p className={classes.interestTitle}>{interest[0].others}% interest</p>
          <p className={classes.interestSubTitle}>Other month(s)</p>
        </div>
      </div>
    </div>
  )
}

export default RegularVaultDetail
