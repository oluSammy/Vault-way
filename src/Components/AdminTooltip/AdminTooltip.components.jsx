import React, { useState } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import fileIcon from '../../assets/icons/file-icon-dashboard.png';
import broadcastEmailStyles from '../EmailBroadcast/EmailBroadcast.styles';
import adminTooltipStyles from './AdminTooltip.styles';
import fundImg from '../../assets/img/tooltip-fund.png';
import acctImg from '../../assets/img/tooltip-accountSafe.png';
import appUpdate from '../../assets/img/tooltip-update.png';
import dashboardTooltipStyles from '../../pages/DashboardTooltip/DashboardTooltip.styles';
import toolTipImportantIcon from '../../assets/icons/tooltip-important.png';
import toolTipIcon from '../../assets/icons/tooltip-important.png';
import seenIcon from '../../assets/icons/seen-icon.png';
import deleteIcon from '../../assets/icons/Delete-icon.png';

const AdminTooltip = () => {
  const topStyles = broadcastEmailStyles();
  const classes = adminTooltipStyles();
  const toolTipStyles = dashboardTooltipStyles();
  const [values, setValues] = useState({ to: '', subject: '', message: '' });
  const [file, setFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  const fileSelectHandler = e => {
    setFile(e.target.files[0])
    // setSelectedFile(e.target.files[0]);
    // const fd = new FormData();
    // fd.append('image', e.target.files[0], e.target.files[0].name)
    //send data in upload
  }

  const coverFileSelectHandler = e => {
    setCoverFile(e.target.files[0])
    // setSelectedFile(e.target.files[0]);
    // const fd = new FormData();
    // fd.append('image', e.target.files[0], e.target.files[0].name)
    //send data in upload
  }
  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };
  const send = values.message && values.subject && values.to && coverFile;
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.tooltipBox}>
          <div className={topStyles.messageBox}>
            <div className={clsx(topStyles.formInput, topStyles.formInputBorder) }>
              <div className={topStyles.inputBox}>
                <label className={topStyles.labelInput} htmlFor="to">To:</label>
                <input type="text" id="to" name="to" className={topStyles.inputText} onChange={handleChange} />
              </div>
            </div>
            <div className={clsx(topStyles.formInput, topStyles.formInputBorder) }>
              <div className={topStyles.inputBox}>
                <label className={topStyles.labelInput} htmlFor="subject">Enter Subject:</label>
                <input type="text" id="subject" name="subject" className={topStyles.inputText} onChange={handleChange} />
              </div>
            </div>
            <div className={clsx(topStyles.formInput, topStyles.formInputBorder) }>
              <div className={topStyles.inputBox}>
                <label className={topStyles.labelInput} htmlFor="message">Enter Message:</label>
                <textarea onChange={handleChange} className={topStyles.inputText} id="message" name="message" cols="30" rows="2"></textarea>
              </div>
            </div>
            <div className={clsx(topStyles.formInput, topStyles.formInputFile) }>
                <div className={topStyles.fileBox}>
                  <p className={topStyles.fileName}>{file && file.name}</p>
                  <div>
                    <label htmlFor="file" className={topStyles.fileLabel}>
                      <p className={topStyles.importTxt}>Import file</p>
                      <img src={fileIcon} alt="import file"/>
                    </label>
                    <input type="file" id="file" name="file" className={topStyles.inputFile} onChange={fileSelectHandler} />
                  </div>
                </div>
            </div>
          </div>
          <div className={classes.coverBox}>
            <p className={classes.coverFileSelected}>{coverFile && coverFile.name}</p>
            <label htmlFor="coverFile" className={classes.fileLabel}>
              <img src={fileIcon} className={classes.uploadImg} alt="Upload Cover"/>
              <p className={classes.coverTxt}>Upload Cover</p>
            </label>
            <input type="file" id="coverFile" name="coverFile" className={classes.inputFile} onChange={coverFileSelectHandler} />
          </div>
        </div>
        <div className={topStyles.btnBox}>
          <Button disabled={send ? false : true} type="submit" variant="contained" color="primary" className={topStyles.sendBtn}
            endIcon={<SendIcon className={topStyles.sendIcon} />}>
            Send Broadcast
          </Button>
        </div>
      </form>
      <div className={toolTipStyles.tooltipContainer}>
        <div className={toolTipStyles.tooltipBox}>
          <div className={toolTipStyles.tooltipContent}>
            <div className={toolTipStyles.tooltipImgBox}>
              <img src={fundImg} className={toolTipStyles.tooltipImg} alt="fund your vault tutorial"/>
            </div>
            <div className={classes.tooltipTop}>
              <h6 className={toolTipStyles.tutorial}>Tutorial</h6>
              <img src={toolTipImportantIcon} alt="tooltip" className={classes.tooltipIconI} />
            </div>
            <p className={toolTipStyles.tutorialTitle}>How to fund your Vault way wallet with your card</p>
            <div className={classes.tooltipFooter}>
              <div className={classes.openBox}>
                <p className={classes.tooltipOpenTxt}>15 opened</p>
                <img src={seenIcon} alt="seen icon" className={classes.seenIcon} />
              </div>
              <img src={deleteIcon} alt="delete tooltip" className={classes.deleteIcon} />
            </div>
          </div>
        </div>
        <div className={toolTipStyles.tooltipBox}>
          <div className={toolTipStyles.tooltipContent}>
            <div className={toolTipStyles.tooltipImgBox}>
              <img src={acctImg} className={toolTipStyles.tooltipImg} alt="fund your vault tutorial"/>
            </div>
            <div className={classes.tooltipTop}>
              <h6 className={toolTipStyles.tutorial}>Tutorial</h6>
              <img src={toolTipIcon} alt="tooltip" className={classes.tooltipIconI} />
            </div>
            <p className={toolTipStyles.tutorialTitle}>Keep your account safe from fraudsters</p>
            <div className={classes.tooltipFooter}>
              <div className={classes.openBox}>
                <p className={classes.tooltipOpenTxt}>15 opened</p>
                <img src={seenIcon} alt="seen icon" className={classes.seenIcon} />
              </div>
              <img src={deleteIcon} alt="delete tooltip" className={classes.deleteIcon} />
            </div>
          </div>
        </div>
        <div className={toolTipStyles.tooltipBox}>
          <div className={toolTipStyles.tooltipContent}>
            <div className={toolTipStyles.tooltipImgBox}>
              <img src={appUpdate} className={toolTipStyles.tooltipImg} alt="fund your vault tutorial"/>
            </div>
            <div className={classes.tooltipTop}>
              <h6 className={toolTipStyles.tutorial}>Tutorial</h6>
              <img src={toolTipIcon} alt="tooltip" className={classes.tooltipIconI} />
            </div>
            <p className={toolTipStyles.tutorialTitle}>App update; <br/> what’s new.</p>
            <div className={classes.tooltipFooter}>
              <div className={classes.openBox}>
                <p className={classes.tooltipOpenTxt}>15 opened</p>
                <img src={seenIcon} alt="seen icon" className={classes.seenIcon} />
              </div>
              <img src={deleteIcon} alt="delete tooltip" className={classes.deleteIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminTooltip
