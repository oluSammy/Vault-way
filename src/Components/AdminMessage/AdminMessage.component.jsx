import React from 'react'
import adminMessageStyles from './AdminMessage.styles';
import seenIcon from '../../assets/icons/seen-icon.png';
import deleteIcon from '../../assets/icons/Delete-icon.png';

const AdminMessage = () => {
  const classes = adminMessageStyles();
  return (
    <div className={classes.root}>
      <div className={classes.messageBox}>
        <div className={classes.messageTop}>
          <h3 className={classes.messageTitle} >Hello Family</h3>
          <p className={classes.messageDate} >January 5, 2020</p>
          <div className={classes.messageOpen}>
            <p className={classes.open}>15 opened</p>
            <img src={seenIcon} alt="seen" className={classes.messageSeen} />
            <img src={deleteIcon} alt="delete" className={classes.messageDelete} />
          </div>
        </div>
        <p className={classes.messageTxt}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aspernatur illo culpa corporis nostrum architecto obcaecati expedita debitis maxime ipsum id perspiciatis reiciendis dolorum ipsa eius nobis perferendis, veniam doloribus, voluptate recusandae blanditiis explicabo, fuga placeat. Delectus commodi reprehenderit adipisci!
        </p>
      </div>
    </div>
  )
}

export default AdminMessage
