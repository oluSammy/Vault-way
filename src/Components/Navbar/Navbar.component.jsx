import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Slide, useScrollTrigger } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/img/vault-way-logo.png';
import navbarStyles from './Navbar.styles';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import ButtonCta from './../ButtonCta/ButtonCta.component';
import Sidebar from './../Sidebar/Sidebar.component';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import GrainOutlinedIcon from '@material-ui/icons/GrainOutlined';
import BlurOnOutlinedIcon from '@material-ui/icons/BlurOnOutlined';
import Divider from '@material-ui/core/Divider';
import { HashLink } from 'react-router-hash-link';



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
    const [anchorEl, setAnchorEl] = useState(null);

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    const handleMenuClick = e => {
        setAnchorEl(e.currentTarget);
    }

    // const navLinks =[
    //     {
    //         title: 'Save',
    //         link: '/plans',
    //         routerLink: true
    //     },
    //     {
    //         title: 'About',
    //         link: '/about',
    //         routerLink: true,
    //     },
    //     {
    //         title: 'FAQ',
    //         link: '/faq',
    //         routerLink: true,
    //     },
    //   ]

    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(true);
    }
    return (
        <HideOnScroll>
            <AppBar className={classes.appBarStyles} >
                <SwipeableDrawer variant="temporary"
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    classes={{ paper: classes.swipeableDrawer }}
                >
                    <Sidebar />
                </SwipeableDrawer>
                <Toolbar className={classes.toolbarStyles}>
                    <IconButton className={classes.iconBtn} onClick={handleDrawer}>
                        <MenuIcon color="primary" className={classes.hamburger} />
                    </IconButton>
                    <Link to="/" className={classes.logoContainer}>
                        <img className={classes.logo} src={logo} alt="vaultway"/>
                    </Link>
                    <ul className={classes.navLinks}>
                        <NavLink arial-control="save-menu" className={`${classes.navLink} ${classes.navLinkWithIcon}`}
                            activeClassName={classes.activeNavLink} to="/plans"
                            onMouseOver={handleMenuClick} name={anchorEl} >
                           <span>Save</span>
                           <ArrowDropDownIcon className={Boolean(anchorEl) ? classes.rotateEndIcon : ''} />
                        </NavLink>
                        <NavLink className={classes.navLink} activeClassName={classes.activeNavLink} to="/about" >About </NavLink>
                        <NavLink className={classes.navLink} activeClassName={classes.activeNavLink} to="/faq" >FAQ </NavLink>
                        {/* {
                            navLinks.map(link =>
                                link.routerLink ?
                                <NavLink className={classes.navLink} activeClassName={classes.activeNavLink}
                                 to={link.link} key={link.link}>
                                     {link.title}
                                </NavLink>
                                : <a className={classes.navLink} key={link.link} href={link.link}>Stories</a>
                            )
                        } */}
                    </ul>
                    <ul className={classes.navCta}>
                        <span className={classes.navBtn}>
                            <ButtonCta component={Link} to="/login" type="outlined" text="log in" bgColor="primary" paddingSide="20px" />
                        </span>
                        <span className={clsx(classes.navBtn, classes.create)}>
                            <ButtonCta component={Link} to="/signup" type="contained" text="Create An Account"
                                bgColor="primary" paddingSide="20px" paddingX="8px" fontSize="12px"
                            />
                        </span>
                    </ul>
                </Toolbar>
                <Menu className={classes.navDropDown} id="save-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                    <MenuItem onClick={handleCloseMenu}>
                        <HashLink className={classes.menuItem} to="/plans#regular">
                            <GraphicEqOutlinedIcon className={classes.dropIcon} />
                            <span className={classes.menuItemLink}>Regular Vault</span>
                        </HashLink>
                    </MenuItem>
                    <Divider />
                    <MenuItem className={classes.menuItem} onClick={handleCloseMenu}>
                        <HashLink className={classes.menuItem} to="/plans#quick">
                            <GrainOutlinedIcon className={classes.dropIcon} />
                            <span className={classes.menuItemLink}>Quick Vault</span>
                        </HashLink>
                    </MenuItem>
                    <Divider />
                    <MenuItem className={classes.menuItem} onClick={handleCloseMenu}>
                        <HashLink className={classes.menuItem} to="/plans#fundMyVault">
                            <BlurOnOutlinedIcon className={classes.dropIcon} />
                            <span className={classes.menuItemLink}>FundMyVault</span>
                        </HashLink>
                    </MenuItem>
                </Menu>
            </AppBar>
        </HideOnScroll>
    )
}

export default Navbar
