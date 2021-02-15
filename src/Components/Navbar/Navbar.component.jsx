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



const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger()
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    )
}

const Navbar = ({ handleDrawer }) => {
    const classes = navbarStyles()
    return (
        <HideOnScroll>
            <AppBar className={classes.appBarStyles} >
                <Toolbar className={classes.toolbarStyles}>
                    <IconButton className={classes.iconBtn}>
                        <MenuIcon color="primary" className={classes.hamburger} onClick={handleDrawer} />
                    </IconButton>
                    <div className={classes.logoContainer}>
                        <img className={classes.logo} src={logo} alt="vault way"/>
                    </div>
                    <ul className={classes.navLinks}>
                        <Link className={classes.navLink} to="/">Save</Link>
                        <Link className={classes.navLink} to="/">Stories</Link>
                        <Link className={classes.navLink} to="/">FAQ</Link>
                    </ul>
                    <ul className={classes.navCta}>
                        <span className={classes.navBtn}>
                            <ButtonCta type="outlined" text="log in" bgColor="primary" paddingSide="20px" />
                        </span>
                        <span className={clsx(classes.navBtn, classes.create)}>
                            <ButtonCta type="contained" text="Create An Account" bgColor="primary" paddingSide="20px" />
                        </span>
                    </ul>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Navbar
