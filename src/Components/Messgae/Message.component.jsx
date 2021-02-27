import React from 'react';
import msg from '../../assets/img/message.svg'
import { makeStyles } from '@material-ui/core';

const Message = () => {
  const styles = makeStyles(theme => ({
    root: {
      position: 'fixed',
      bottom: '70px',
      right: '70px',
      backgroundColor: `${theme.palette.primary.dark}`,
      height: '50px',
      width: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: 9000,

      '@media (max-width: 500px)': {
        right: '30px',
        height: '30px',
        width: '30px',
      },
    }
  }));
  const classes = styles();
  return (
    <div className={classes.root}>
      <img  src={msg} alt="message icon" style={{ width: '50%', height: '50%' }}/>
    </div>
  )
}

export default Message
