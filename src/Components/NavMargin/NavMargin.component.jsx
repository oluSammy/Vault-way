import React from 'react'
import { makeStyles } from '@material-ui/core';

const NavMargin = () => {
  const styles = makeStyles(theme => ({
    root: {
      marginTop: '78px',
      '@media (max-width: 584px)': {
        marginTop: '72px'
      },
      '@media (max-width: 400px)': {
        marginTop: '68.5px'
      },
    }
  }));
  const classes = styles();
  return (
    <div className={classes.root}>
    </div>
  )
}

export default NavMargin
