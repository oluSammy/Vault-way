import React, { useEffect } from 'react'
import Message from '../../Components/Messgae/Message.component';
import Navbar from '../../Components/Navbar/Navbar.component';
import NavMargin from '../../Components/NavMargin/NavMargin.component';
import plansStyles from './plans.styles';
import Grid from '@material-ui/core/Grid';
import vaultImg from '../../assets/img/vault-green.png'
import regularVault from '../../assets/icons/tyro-icon.png';
import AceVault from '../../assets/icons/ace.png';
import reaperVault from '../../assets/icons/reaper-icon.png';
import ButtonCta from '../../Components/ButtonCta/ButtonCta.component';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from '../../Components/Footer/Footer.component';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import checkIcon from '../../assets/icons/double-check-icon.png';


const Plans = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const classes = plansStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const navLinks =[
    {
        title: 'Plans',
        link: '/plans',
        routerLink: true
    },
    {
        title: 'About',
        link: '/about',
        routerLink: true,
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
      <Grid container className={classes.hero} justify="space-evenly" alignItems="center">
        <Grid className={classes.heroText} container item justify="flex-end" lg={5} md={5} sm={5}>
          <div className={classes.heroTextContainer}>
            <h1 className={classes.heroHeading}>
              Save more to <br /> achieve more
            </h1>
            <h6 className={classes.heroSubHeading}>
              Attain your set financial goals and even more. Start saving through smart plans that
              make saving a lot better than you ever thought.
            </h6>
            <ButtonCta  type="contained" text="Start Saving Now" bgColor="primary"
              shadow={true}
              paddingSide={matchesXS ? '22px' : '25px'}
              paddingX={matchesXS ? '10px' : '12px'}
              fontSize={matchesXS ? '12px' : '15px'}
            />
          </div>
        </Grid>
        <Grid className={classes.heroImg} container item justify="space-around" lg={5} md={5} sm={5} >
          <img src={vaultImg} className={classes.vaultImg} alt="vaultway save pic"/>
        </Grid>
      </Grid>
      <div className={classes.vaultwaySection}>
        <h2 className={classes.vaultwaySectionHeading} >
          The best way to save <br /> is the vaultway
        </h2>
        <Grid container justify="center" alignItems="center" direction={matchesXS ? "column-reverse" : "row"}>
          <Grid item container justify="center"  lg={5} md={5} sm={6}>
            <div className={classes.vaultSaveRect}></div>
          </Grid>
          <Grid item container justify="center"  lg={5} md={5} sm={6}>
            <div className={classes.saveVaultBox}>
              <div className={classes.saveVaultBoxRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vaultway check"/>
              </div>
              <div className={classes.saveVaultBoxContent}>
                <h6 className={classes.saveVaultHeading} >
                  Have a great time building your funds
                </h6>
                <p className={classes.saveVaultSub} >
                  Get to automate your savings or choose to top-up directly. Have lots of fun while you save
                  and enjoy awesome interest rates your bank will never offer you.
                </p>
              </div>
            </div>
            <div className={classes.saveVaultBox}>
              <div className={classes.saveVaultBoxRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vaultway check"/>
              </div>
              <div className={classes.saveVaultBoxContent}>
                <h6 className={classes.saveVaultHeading}>
                  Do it like you aren’t even doing it
                </h6>
                <p className={classes.saveVaultSub}>
                  Avoid all the “familiar” hassles. Stay free from hidden charges. Experience the ease
                  of saving just like breathing in and out.
                </p>
              </div>
            </div>
            <div className={classes.saveVaultBox}>
              <div className={classes.saveVaultBoxRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vaultway check"/>
              </div>
              <div className={classes.saveVaultBoxContent}>
                <h6 className={classes.saveVaultHeading}>
                  Hold the reins and stay in charge
                </h6>
                <p className={classes.saveVaultSub} >
                  Save at your own pace. Grow on your own terms and maintain more
                  control over your funds than you have ever had.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div id="regular" className={classes.regularVault}>
        <h2 className={classes.regularVaultHeading}>Regular Vaults</h2>
        <p className={classes.regularVaultSub}>
          Enjoy amazing interests every time you <br /> save and for as long as you save
        </p>
        <Grid container justify="space-evenly" >
          <Grid container item lg={5} md={5} sm={6}>
            <div className={classes.regularVaultBox}>
              <div className={classes.regularVaultIconBox}>
                <img src={regularVault} className={classes.regularVaultIcon} alt="Tyro vault icon"/>
              </div>
              <div className={classes.regularVaultContent}>
                <h6 className={classes.regularHeading}>Tyro Vault</h6>
                <p className={classes.regularSub} >
                  Save for a period of two months. Earn up to 5% interest on your savings in the first
                  month and 1% in the subsequent month.
                </p>
                <Button className={classes.regularBtn} endIcon={<ArrowForwardIosIcon style={{ fontSize: 10 }}/>}>
                  Create Vault Now
                </Button>
              </div>
            </div>
          </Grid>
          <Grid container item lg={5} md={5} sm={6}>
            <div className={classes.regularVaultBox}>
              <div className={classes.regularVaultIconBox}>
                <img src={reaperVault} className={classes.regularVaultIcon} alt="Tyro vault icon"/>
              </div>
              <div className={classes.regularVaultContent}>
                <p className={classes.regularHeading}>Reaper Vault</p>
                <p className={classes.regularSub} >
                  Save for a period of four months. Earn up to 10% interest on your savings in the first
                  month and 2% in the subsequent months.
                </p>
                <Button className={classes.regularBtn} endIcon={<ArrowForwardIosIcon style={{ fontSize: 10 }}/>}>
                  Create Vault Now
                </Button>
              </div>
            </div>
          </Grid>
          <Grid container item lg={5} md={5} sm={6}>
            <div className={classes.regularVaultBox}>
              <div className={classes.regularVaultIconBox}>
                <img src={AceVault} className={classes.regularVaultIcon} alt="Tyro vault icon"/>
              </div>
              <div className={classes.regularVaultContent}>
                <p className={classes.regularHeading}>Ace Vault</p>
                <p className={classes.regularSub} >
                  Save for a period of six months. Earn up to 15% interest on your savings in the first month
                  and 3% in the subsequent months.
                </p>
                <Button className={classes.regularBtn} endIcon={<ArrowForwardIosIcon style={{ fontSize: 10 }}/>}>
                  Create Vault Now
                </Button>
              </div>
            </div>
          </Grid>
          <Grid container item lg={5} md={5} sm={6}>
            <div className={classes.regularVaultBox}>
              <div className={classes.regularVaultIconBox}>
                <img src={AceVault} className={classes.regularVaultIcon} alt="Tyro vault icon"/>
              </div>
              <div className={classes.regularVaultContent}>
                <p className={classes.regularHeading}>Stellar Vault</p>
                <p className={classes.regularSub} >
                  Save for a period of twelve months. Earn up to 20% interest on your savings in the first
                  month and 4% in the subsequent months.
                </p>
                <Button className={classes.regularBtn} endIcon={<ArrowForwardIosIcon style={{ fontSize: 10 }}/>}>
                  Create Vault Now
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid  id="quick" container justify="space-evenly" alignItems="center" className={classes.quickVault}>
        <Grid container justify="center" item lg={5} md={5} sm={6}>
          <div className={classes.quickVaultContent}>
            <p className={classes.quickVaultHeading}>Quick Vault</p>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vaultway check"/>
              </div>
              <p className={classes.quickVaultBody}>
                Stop yourself from spending without a budget and maintain a top level of financial discipline.
              </p>
            </div>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vaultway check"/>
              </div>
              <p className={classes.quickVaultBody}>
                Lock your funds away for short periods of time - from as brief as 48 hours to as extended as 30 days.
              </p>
            </div>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vaultway check"/>
              </div>
              <p className={classes.quickVaultBody}>
                Gain access to them only when your set due date matures and get paid immediately you make a withdrawal.
              </p>
            </div>
            <div className={classes.vaultBtn} >
              <ButtonCta type="contained"
                text="Create Vault now" bgColor="primary"
                paddingSide={matchesXS ? '22px' : '25px'}
                paddingX={matchesXS ? '10px' : '12px'}
                fontSize={matchesXS ? '12px' : '15px'}
              />
            </div>
          </div>
        </Grid>
        <Grid container justify="center" item lg={5} md={5} sm={6}>
          <div className={classes.vaultMainRect}></div>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="center" className={`${classes.quickVault} ${classes.quickVaultLast}`}
        direction={matchesXS ? 'column-reverse' : 'row'}
      >
        <Grid container justify="center" item lg={5} md={5} sm={6}>
            <div className={classes.vaultMainRect}></div>
        </Grid>
        <Grid  id="fundMyVault" container justify="center" item lg={5} md={5} sm={6}>
          <div className={classes.quickVaultContent}>
            <h6 className={classes.quickVaultHeading} variant="h2" component="h2">FundMyVault</h6>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vaultway check"/>
              </div>
              <p className={classes.quickVaultBody}>
                Create Vaults for big goals or projects that are highly important to you and set
                targets for amounts and completion dates.
              </p>
            </div>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vaultway check"/>
              </div>
              <p className={classes.quickVaultBody}>
                Make it easy for your friends, family and loved ones to donate funds and join you
                in saving up to realise the goal or project.
              </p>
            </div>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vaultway check"/>
              </div>
              <p className={classes.quickVaultBody}>
                Get your fund released to you without stress on your completion date once you make a request to withdraw.
              </p>
            </div>
            <div className={classes.vaultBtn} >
              <ButtonCta type="contained"
                text="Create Vault now" bgColor="primary"
                paddingSide={matchesXS ? '22px' : '25px'}
                paddingX={matchesXS ? '10px' : '12px'}
                fontSize={matchesXS ? '12px' : '15px'}
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Plans
