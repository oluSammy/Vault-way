import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './hello.css';
import dashboardMenuStyles from './DashboardMenu.styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PropTypes from "prop-types";

const list = [
  { name: 'Add your BVN' },
  { name: 'Verify your email address' },
  { name: 'Add your debit card' },
  { name: 'Edit your personal info' },
];

const MenuItem = ({text, selected}) => {
  const classes = dashboardMenuStyles();
  return(
    <div className={classes.quickBox}>
      <p className={classes.quickBoxText}>{text}</p>
      <div className={classes.arrowIcon}><ArrowForwardIcon className={classes.arrowIconGreen} /></div>
    </div>
  )
};

const Menu = (list, selected) =>
  list.map(el => {
  const {name} = el;

  return <MenuItem text={name} key={name} selected={selected} />;
});


const Arrow = ({ text, className }) => {
  return (
    <div style={{
      height: '40px', width: '40px',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      justifyContent: 'center',
      borderRadius: '50%',
      boxShadow: '0px 0px 24px rgba(0, 81, 33, 0.16)',
    }}
    >
      <div className={className}>{text}</div>
    </div>
  );
};

Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

const ArrowLeft = Arrow({ text: <ArrowBackIcon style={{color: '#AEBEC7',}} />, className: 'arrow-prev' }); 
const ArrowRight = Arrow({ text: <ArrowForwardIcon style={{color: '#AEBEC7',}} />, className: 'arrow-next' });

const selected = 'item1';
const DashboardMenu = () => {
  const menu = Menu(list, selected)
  const classes = dashboardMenuStyles();

  return (
    <div className={classes.menuContainer}>
      <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideArrows={true}
          hideSingleArrow={true}
        />
    </div>
  )
}

export default DashboardMenu
