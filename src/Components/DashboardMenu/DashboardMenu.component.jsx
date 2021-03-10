import React from 'react'
import dashboardMenuStyles from './DashboardMenu.styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Carousel from 'react-elastic-carousel';
import './dashboardMenu.css'


const MenuItem = ({ text }) => {
  const classes = dashboardMenuStyles();
  return(
    <div className={classes.quickBox}>
      <p className={classes.quickBoxText}>{text}</p>
      <div className={classes.arrowIcon}><ArrowForwardIcon className={classes.arrowIconGreen} /></div>
    </div>
  )
};
const DashboardMenu = () => {
  const classes = dashboardMenuStyles();

  const breakPoints = [
    {width: 1, itemsToShow: 2},
    {width: 550, itemsToShow: 3},
    {width: 768, itemsToShow: 4},
    {width: 1200, itemsToShow: 4},
  ]

  return (
    <div className={classes.menuContainer}>
      <Carousel breakPoints={breakPoints} pagination={false}>
        <MenuItem text="Add &nbsp; &nbsp;  your &nbsp; &nbsp; BVN " />
        <MenuItem text="Verify your email address" />
        <MenuItem text="Add your debit card" />
        <MenuItem text="Edit your personal info" />
        <MenuItem text="Edit your personal info" />
      </Carousel>
    </div>
  )
}

export default DashboardMenu
