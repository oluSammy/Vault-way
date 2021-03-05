import React, { useEffect} from 'react'
import Message from '../../Components/Messgae/Message.component';
import Navbar from '../../Components/Navbar/Navbar.component';
import faqStyles from './Faq.styles';
import NavMargin from '../../Components/NavMargin/NavMargin.component';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Acordion from './../../Components/Accordion/Acordion.component';
import Footer from '../../Components/Footer/Footer.component';

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const classes = faqStyles();
  const [value, setValue] = React.useState(0);

  const handleTabs = (e, value) => {
      setValue(value)
  }

  const navLinks =[
    {
        title: 'Plans',
        link: '/plans',
        routerLink: true
    },
    {
        title: 'About',
        routerLink: true,
        link: '/about'
    },
    {
        title: 'FAQ',
        link: '/faq',
        routerLink: true,
    },
  ]
  return (
    <div className={classes.root}>
      <Navbar navLinks={navLinks} />
      <NavMargin />
      <Message />
      <div className={classes.faqHeader}>
        <h1 className={classes.faqHeading} >Frequently asked < br /> questions</h1>
        <form className={classes.faqForm} >
          <input  className={classes.faqSearch}  type="search" name="search" placeholder="Search" />
          <button className={classes.faqSubmit} type="submit">
            <SearchIcon className={classes.faqSearchIcon} />
          </button>
        </form>
      </div>
      <Toolbar className={classes.tabBox}>
        <Tabs value={value} onChange={handleTabs} className={classes.tabContainer} centered
          classes={{indicator: classes.indicator}}
          >
              <Tab className={value === 0 ? classes.activeTab : classes.inactiveTab} label="General" disableRipple  />
              <Tab  className={value === 1 ? classes.activeTab : classes.inactiveTab} label="Payments" disableRipple />
              <Tab  className={value === 2 ? classes.activeTab : classes.inactiveTab} label="Services" disableRipple />
              <Tab  className={value === 3 ? classes.activeTab : classes.inactiveTab} label="Refund" disableRipple />
              <Tab  className={value === 4 ? classes.activeTab : classes.inactiveTab} label="Contact" disableRipple />
        </Tabs>
      </Toolbar>
      <TabPanel value={value} index={0}  >
        <Grid container justify="space-evenly" className={classes.tabPanel}>
          <Acordion question="Who is behing VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
            expanded={true}
          />
          <Acordion question="Why should i choose a to save with VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
            expanded={true}
          />
          <Acordion question="Who is behing VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          />
          <Acordion question="Why should i choose a to save with VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <Grid container justify="space-evenly" className={classes.tabPanel}>
          <Acordion question="Where is behing VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
            expanded={true}
          />
          <Acordion question="Why should i choose a to save with VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
            expanded={true}
          />
          <Acordion question="Who is behing VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          />
          <Acordion question="Why should i choose a to save with VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2} >
        <Grid container justify="space-evenly" className={classes.tabPanel}>
          <Acordion question="Who is behing VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
            expanded={true}
          />
          <Acordion question="Why should i choose a to save with VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
            expanded={true}
          />
          <Acordion question="Who is behing VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          />
          <Acordion question="Why should i choose a to save with VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3} >
        <Grid container justify="space-evenly" className={classes.tabPanel}>
          <Acordion question="Who is behing VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
            expanded={true}
          />
          <Acordion question="Why should i choose a to save with VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
            expanded={true}
          />
          <Acordion question="Who is behing VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          />
          <Acordion question="Why should i choose a to save with VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4} >
        <Grid container justify="space-evenly" className={classes.tabPanel}>
          <Acordion question="Who is behing VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
            expanded={true}
          />
          <Acordion question="Why should i choose a to save with VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
            expanded={true}
          />
          <Acordion question="Who is behing VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          />
          <Acordion question="Why should i choose a to save with VaultWay?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          />
        </Grid>
      </TabPanel>
      <Footer />
    </div>
  )
}

const TabPanel = ({children, value, index}) => {
  return(
  <div>
      {value === index && <h1>{children}</h1>}
  </div>)
}

export default Faq
