import React from 'react';
import homeStyles from './Home.styles';
import Navbar from './../Components/Navbar/Navbar.component';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Sidebar from './../Components/Sidebar/Sidebar.component';
import Hero from './../Components/Hero/Hero.components';
import Message from './../Components/Messgae/Message.component';
import NavMargin from './../Components/NavMargin/NavMargin.component';


const Home = () => {
    const classes = homeStyles();
    const [open, setOpen] = React.useState();

    const handleDrawer = () => {
        setOpen(true);
      }
    return (
        <div className={classes.root}>
            <Navbar handleDrawer={handleDrawer} />
            <Message />
            <SwipeableDrawer variant="temporary" open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}>
                <Sidebar />
            </SwipeableDrawer>
            <NavMargin />
            <Hero />
        </div>
    )
}

export default Home
