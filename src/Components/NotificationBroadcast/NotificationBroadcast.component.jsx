import React, { useState } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AdminMessage from '../AdminMessage/AdminMessage.component';
import broadcastEmailStyles from '../EmailBroadcast/EmailBroadcast.styles';

const NotificationBroadcast = () => {
  const classes = broadcastEmailStyles();
  const [values, setValues] = useState({ to: '', subject: '', message: '' });
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };
  const send = values.message && values.subject && values.to;
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.messageBox}>
          <div className={clsx(classes.formInput, classes.formInputBorder) }>
            <div className={classes.inputBox}>
              <label className={classes.labelInput} htmlFor="to">To:</label>
              <input type="text" id="to" name="to" className={classes.inputText} onChange={handleChange} />
            </div>
          </div>
          <div className={clsx(classes.formInput, classes.formInputBorder) }>
            <div className={classes.inputBox}>
              <label className={classes.labelInput} htmlFor="subject">Enter Subject:</label>
              <input type="text" id="subject" name="subject" className={classes.inputText} onChange={handleChange} />
            </div>
          </div>
          <div className={clsx(classes.formInput, classes.formInputBorder) }>
            <div className={classes.inputBox}>
              <label className={classes.labelInput} htmlFor="message">Enter Message:</label>
              <textarea onChange={handleChange} className={classes.inputText} id="message" name="message" cols="30" rows="2"></textarea>
            </div>
          </div>
        </div>
        <div className={classes.btnBox}>
          <Button disabled={send ? false : true} type="submit" variant="contained" color="primary" className={classes.sendBtn}
            endIcon={<SendIcon className={classes.sendIcon} />}>
            Send Notification
          </Button>
        </div>
      </form>
      <p className={classes.historyTxt}>History</p>
      <div className={classes.historyBox}>
        <AdminMessage />
        <AdminMessage />
        <AdminMessage />
      </div>
    </div>
  )
}

export default NotificationBroadcast
