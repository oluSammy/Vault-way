import React from 'react';
import fundReasonStyles from '../FundReason/FundReason.styles';
import fundDetailStyles from './FundDetail.styles';
import uploadIcon from '../../assets/icons/picture-icon.png';
import Button from '@material-ui/core/Button';
import regularContentStyles from '../RegularVaultContent/RegularVaultContent.styles';

const FundDetail = ({ values, handleChange, nextStep }) => {
  const titleStyles = fundReasonStyles();
  const classes = fundDetailStyles();
  const btnStyles = regularContentStyles();
  const [file, setFile] = React.useState(null);

  const fileSelectHandler = e => {
    setFile(e.target.files[0])
    // setSelectedFile(e.target.files[0]);
    // const fd = new FormData();
    // fd.append('image', e.target.files[0], e.target.files[0].name)
    //send data in upload
  }

  return (
    <div className={classes.root}>
      <h1 className={titleStyles.title}>
        Tell donors more <br/> about <span className={titleStyles.titleSpan}>“pay my <br/> rent”</span>
      </h1>
      <div className={classes.fileContainer}>
        <label htmlFor="file" className={classes.fileLabel}>
          <p className={classes.fileLabelText}>Click to upload a photo of your project</p>
          <div className={classes.fileLabelBox}>
            <div className={classes.fileImageIcon}>
              <img src={uploadIcon} alt="upload"/>
            </div>
            <p className={classes.fileLabelName}>{file ? file.name : 'upload'}</p>
          </div>
        </label>
        <input type="file" name="file" id="file"
          onChange={fileSelectHandler}
          className={classes.fileLabelInput}
          accept="image/x-png,image/gif,image/jpeg"
        />
        {file && file.name}
      </div>
      <div className={classes.detailContainer}>
        <label htmlFor="details" className={classes.detailLabel}>
          Increase your chances of getting funded, tell donors more about your vault
        </label>
        <textarea name="details" id="details" cols="30" rows="3"
          className={classes.textArea} onChange={handleChange} value={values.details}
        />

      </div>
      <Button onClick={nextStep}
        disabled={values.details && file ? false : true}
        className={btnStyles.btn} variant="contained" color="primary" >
            Continue
      </Button>
    </div>
  )
}

export default FundDetail
