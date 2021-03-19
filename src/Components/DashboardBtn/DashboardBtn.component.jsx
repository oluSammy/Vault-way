import React from 'react'
import { makeStyles } from '@material-ui/core';

const DashboardBtn = ({ text, color, bg, icon }) => {
  const dashboardBtnStyles = makeStyles(theme => ({
    root: {
      fontStyle: 'Montserrat',
      fontWeight: 600,
      fontSize: '16px',
      border: 'none',
      padding: '13px 40px',
      borderRadius: '30px',
      // marginTop: '30px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }));
  const classes = dashboardBtnStyles();
  return (
    <button className={classes.root} type="submit" style={{ color: color, backgroundColor: bg }} >
      {icon}
      {text}
    </button>
  )
}

export default DashboardBtn;
