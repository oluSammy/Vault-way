import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Slide, useScrollTrigger } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/img/vault-way-logo.png';
import navbarStyles from './Navbar.styles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ButtonCta from './../ButtonCta/ButtonCta.component';
import Sidebar from './../Sidebar/Sidebar.component';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';



const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger()
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    )
}

const Navbar = () => {
    const classes = navbarStyles();

    const [open, setOpen] = React.useState();

    const handleDrawer = () => {
        setOpen(true);
    }
    return (
        <HideOnScroll>
            <AppBar className={classes.appBarStyles} >
                <SwipeableDrawer variant="temporary" open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}>
                    <Sidebar />
                </SwipeableDrawer>
                <Toolbar className={classes.toolbarStyles}>
                    <IconButton className={classes.iconBtn}>
                        <MenuIcon color="primary" className={classes.hamburger} onClick={handleDrawer} />
                    </IconButton>
                    <Link to="/" className={classes.logoContainer}>
                        <img className={classes.logo} src={logo} alt="vault way"/>
                    </Link>
                    <ul className={classes.navLinks}>
                        <Link className={classes.navLink} to="/">Save</Link>
                        <a className={classes.navLink} href="#stories">Stories</a>
                        <Link className={classes.navLink} to="/faq">FAQ</Link>
                    </ul>
                    <ul className={classes.navCta}>
                        <span className={classes.navBtn}>
                            <ButtonCta component={Link} to="/login" type="outlined" text="log in" bgColor="primary" paddingSide="20px" />
                        </span>
                        <span className={clsx(classes.navBtn, classes.create)}>
                            <ButtonCta component={Link} to="/signup" type="contained" text="Create An Account"
                                bgColor="primary" paddingSide="20px"
                            />
                        </span>
                    </ul>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Navbar
