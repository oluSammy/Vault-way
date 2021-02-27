import React, { useEffect } from 'react'
import Message from '../../Components/Messgae/Message.component';
import Navbar from '../../Components/Navbar/Navbar.component';
import NavMargin from '../../Components/NavMargin/NavMargin.component';
import plansStyles from './plans.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
            <Typography variant="h1" component="h1" className={classes.heroHeading}>
              Save more to <br /> achieve more
            </Typography>
            <Typography variant="subtitle1" component="h6" className={classes.heroSubHeading}>
              Attain your set financial goals and even more. Start saving through smart plans that
              make saving a lot better than you ever thought.
            </Typography>
            <ButtonCta  type="contained" text="Start Saving Now" bgColor="primary"
              shadow={true}
              paddingSide={matchesXS ? '22px' : '25px'}
              paddingX={matchesXS ? '10px' : '12px'}
              fontSize={matchesXS ? '12px' : '15px'}
            />
          </div>
        </Grid>
        <Grid className={classes.heroImg} container item justify="space-around" lg={5} md={5} sm={5} >
          <img src={vaultImg} className={classes.vaultImg} alt="vault way save pic"/>
        </Grid>
      </Grid>
      <div className={classes.vaultwaySection}>
        <Typography className={classes.vaultwaySectionHeading} variant="h2" component="h2">
          The best way to save <br /> is the vault way
        </Typography>
        <Grid container justify="center" alignItems="center" direction={matchesXS ? "column-reverse" : "row"}>
          <Grid item container justify="center"  lg={5} md={5} sm={6}>
            <div className={classes.vaultSaveRect}></div>
          </Grid>
          <Grid item container justify="center"  lg={5} md={5} sm={6}>
            <div className={classes.saveVaultBox}>
              <div className={classes.saveVaultBoxRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vault way check"/>
              </div>
              <div className={classes.saveVaultBoxContent}>
                <Typography className={classes.saveVaultHeading} variant="h6" component="h6">
                  Have a great time building your funds
                </Typography>
                <Typography className={classes.saveVaultSub} variant="body1" component="p">
                  Get to automate your savings or choose to top-up directly. Have lots of fun while you save
                  and enjoy awesome interest rates your bank will never offer you.
                </Typography>
              </div>
            </div>
            <div className={classes.saveVaultBox}>
              <div className={classes.saveVaultBoxRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vault way check"/>
              </div>
              <div className={classes.saveVaultBoxContent}>
                <Typography className={classes.saveVaultHeading} variant="h6" component="h6">
                  Do it like you aren’t even doing it
                </Typography>
                <Typography className={classes.saveVaultSub} variant="body1" component="p">
                  Avoid all the “familiar” hassles. Stay free from hidden charges. Experience the ease
                  of saving just like breathing in and out.
                </Typography>
              </div>
            </div>
            <div className={classes.saveVaultBox}>
              <div className={classes.saveVaultBoxRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vault way check"/>
              </div>
              <div className={classes.saveVaultBoxContent}>
                <Typography className={classes.saveVaultHeading} variant="h6" component="h6">
                  Hold the reins and stay in charge
                </Typography>
                <Typography className={classes.saveVaultSub} variant="body1" component="p">
                  Save at your own pace. Grow on your own terms and maintain more
                  control over your funds than you have ever had.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.regularVault}>
        <Typography variant="h2" component="h2" className={classes.regularVaultHeading}>Regular vaults</Typography>
        <Typography variant="subtitle1" component="p" className={classes.regularVaultSub}>
          Enjoy amazing interests every time you <br /> save and for as long as you save
        </Typography>
        <Grid container justify="space-evenly" >
          <Grid container item lg={5} md={5} sm={6}>
            <div className={classes.regularVaultBox}>
              <div className={classes.regularVaultIconBox}>
                <img src={regularVault} className={classes.regularVaultIcon} alt="Tyro vault icon"/>
              </div>
              <div className={classes.regularVaultContent}>
                <Typography className={classes.regularHeading} variant="h6" component="h6">Tyro Vault</Typography>
                <Typography className={classes.regularSub} variant="body1" component="p">
                  Save for a period of two months. Earn up to 5% interest on your savings in the first
                  month and 1% in the subsequent month.
                </Typography>
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
                <Typography className={classes.regularHeading} variant="h6" component="h6">Reaper Vault</Typography>
                <Typography className={classes.regularSub} variant="body1" component="p">
                  Save for a period of four months. Earn up to 10% interest on your savings in the first
                  month and 2% in the subsequent months.
                </Typography>
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
                <Typography className={classes.regularHeading} variant="h6" component="h6">Ace Vault</Typography>
                <Typography className={classes.regularSub} variant="body1" component="p">
                  Save for a period of six months. Earn up to 15% interest on your savings in the first month
                  and 3% in the subsequent months.
                </Typography>
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
                <Typography className={classes.regularHeading} variant="h6" component="h6">Stellar Vault</Typography>
                <Typography className={classes.regularSub} variant="body1" component="p">
                  Save for a period of twelve months. Earn up to 20% interest on your savings in the first
                  month and 4% in the subsequent months.
                </Typography>
                <Button className={classes.regularBtn} endIcon={<ArrowForwardIosIcon style={{ fontSize: 10 }}/>}>
                  Create Vault Now
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container justify="space-evenly" alignItems="center" className={classes.quickVault}>
        <Grid container justify="center" item lg={5} md={5} sm={6}>
          <div className={classes.quickVaultContent}>
            <Typography className={classes.quickVaultHeading} variant="h2" component="h2">Quick Vault</Typography>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vault way check"/>
              </div>
              <Typography className={classes.quickVaultBody} variant="body1" component="p">
                Stop yourself from spending without a budget and maintain a top level of financial discipline.
              </Typography>
            </div>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vault way check"/>
              </div>
              <Typography className={classes.quickVaultBody} variant="body1" component="p">
                Stop yourself from spending without a budget and maintain a top level of financial discipline.
              </Typography>
            </div>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vault way check"/>
              </div>
              <Typography className={classes.quickVaultBody} variant="body1" component="p">
                Stop yourself from spending without a budget and maintain a top level of financial discipline.
              </Typography>
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
        <Grid container justify="center" item lg={5} md={5} sm={6}>
          <div className={classes.quickVaultContent}>
            <Typography className={classes.quickVaultHeading} variant="h2" component="h2">Fund MyVault</Typography>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vault way check"/>
              </div>
              <Typography className={classes.quickVaultBody} variant="body1" component="p">
                Create Vaults for big goals or projects that are highly important to you and set
                targets for amounts and completion dates.
              </Typography>
            </div>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vault way check"/>
              </div>
              <Typography className={classes.quickVaultBody} variant="body1" component="p">
                Make it easy for your friends, family and loved ones to donate funds and join you
                in saving up to realise the goal or project.
              </Typography>
            </div>
            <div className={classes.quickVaultDetail}>
              <div className={classes.quickVaultRect}>
                <img className={classes.saveVaultBoxRectImg} src={checkIcon} alt="vault way check"/>
              </div>
              <Typography className={classes.quickVaultBody} variant="body1" component="p">
                Get your fund released to you without stress on your completion date once you make a request to withdraw.
              </Typography>
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
