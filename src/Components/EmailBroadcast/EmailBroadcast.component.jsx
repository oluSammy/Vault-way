import React from 'react'
import broadcastEmailStyles from './EmailBroadcast.styles';
import clsx from 'clsx';


const EmailBroadcast = () => {
  const classes = broadcastEmailStyles();
  return (
    <div className={classes.root}>
      <div className={classes.messageBox}>
        <div className={classes.formInput}></div>
      </div>
    </div>
  )
}

export default EmailBroadcast
