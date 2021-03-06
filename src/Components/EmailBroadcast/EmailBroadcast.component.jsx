import React, { useState } from 'react'
import broadcastEmailStyles from './EmailBroadcast.styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import fileIcon from '../../assets/icons/file-icon-dashboard.png';
import AdminMessage from '../AdminMessage/AdminMessage.component';


const EmailBroadcast = () => {
  const classes = broadcastEmailStyles();
  const [values, setValues] = useState({ to: '', subject: '', message: '' });
  const [file, setFile] = useState(null);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  const fileSelectHandler = e => {
    setFile(e.target.files[0])
    // setSelectedFile(e.target.files[0]);

    console.log(file);

    // const fd = new FormData();
    // fd.append('image', e.target.files[0], e.target.files[0].name)
    //send data in upload
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
          <div className={clsx(classes.formInput, classes.formInputFile) }>
              <div className={classes.fileBox}>
                <p className={classes.fileName}>{file && file.name}</p>
                <div>
                  <label htmlFor="file" className={classes.fileLabel}>
                    <p className={classes.importTxt}>Import file</p>
                    <img src={fileIcon} alt="import file"/>
                  </label>
                  <input type="file" id="file" name="file" className={classes.inputFile} onChange={fileSelectHandler} />
                </div>
              </div>
          </div>
        </div>
        <div className={classes.btnBox}>
          <Button disabled={send ? false : true} type="submit" variant="contained" color="primary" className={classes.sendBtn}
            endIcon={<SendIcon className={classes.sendIcon} />}>
            Send Broadcast
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

export default EmailBroadcast
