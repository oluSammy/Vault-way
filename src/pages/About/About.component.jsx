import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar.component';
import NavMargin from '../../Components/NavMargin/NavMargin.component';
import aboutStyles from './About.styles';
import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import visionIcon from '../../assets/icons/Vision.png'
import missionIcon from '../../assets/icons/Mission.png'
import valuesIcon from '../../assets/icons/Values.png'
import Message from './../../Components/Messgae/Message.component';
import img from '../../assets/img/about-page-img.png';
import ButtonCta from '../../Components/ButtonCta/ButtonCta.component';
import designOne from '../../assets/icons/light-bottom-icon.png';
import designTwo from '../../assets/icons/dark-bottom-icon.png';
import designThree from '../../assets/icons/dark-right-icon.png';
import designFour from '../../assets/icons/light-right-icon.png';
import eagleCoin from '../../assets/img/eagle-coin.png';
// import cardImg1  from '../../assets/img/card-img-1.png'
// import cardImg2  from '../../assets/img/card-img-2.png'
// import cardImg3  from '../../assets/img/card-img-3.png'
import Footer from './../../Components/Footer/Footer.component';
// import { useTheme } from '@material-ui/core';
// import useMediaQuery from '@material-ui/core/useMediaQuery';


const About = () => {
  const classes = aboutStyles();
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
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  // const theme = useTheme();
  // const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <Navbar navLinks={navLinks} />
      <NavMargin />
      <Message />
      <div className={classes.lifestyle}>
        <Typography className={classes.lifestyleHeading} variant="h3" component="h1">
          We are turning <br/> <span className={classes.span}>savings into lifestyle</span>
        </Typography>
        <Typography className={classes.lifestyleSub} variant="h6" component="h6">
          Our desire is to help you save smartly, easily and securely towards your goals while you get competitive
          values for your saving activities.
        </Typography>
      </div>
      <Grid container className={classes.aboutSection} justify="space-evenly" alignItems="center">
        <Grid container item lg={5} md={5} sm={6} xs={8} justify="space-evenly" >
          <div className={classes.aboutSectionTxt}>
            <Typography variant="h2" component="h2" className={classes.aboutSectionHeading}>
              Raising the bar for financial freedom and control
            </Typography>
            <Typography variant="body1" component="p" className={classes.aboutSectionSub}>
              This is why we offer premium savings plans that give you 100% control over your funds
              and enable you stay aloft your financial demands.
            </Typography>
          </div>
        </Grid>
        <Grid justify="space-evenly" container item lg={5} md={5} sm={6} xs={4}>
          <img src={eagleCoin} className={classes.aboutSectionImg} alt="vault way financial freedom"/>
        </Grid>
      </Grid>
      <Grid container className={classes.aboutSection} justify="space-evenly" alignItems="center"
        style={{ background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)'}}
      >
        <Grid justify="space-evenly" container item lg={5} md={5} sm={6} xs={4}>
          <div className={classes.aboutSectionRec}></div>
        </Grid>
        <Grid container item lg={5} md={5} sm={6} xs={8} justify="space-evenly" >
          <div className={classes.aboutSectionTxt}>
            <Typography variant="h2" component="h2" className={classes.aboutSectionHeading}>
              Leading the journey to financial literacy and discipline
            </Typography>
            <Typography variant="body1" component="p" className={classes.aboutSectionSub}>
              We do not just help you save profitably, we also keep you in the know about relevant
              financial trends while helping you maintain a high level of discipline in managing your finances.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.redefine} justify="space-evenly" alignItems="center" >
        <img src={designOne} className={`${classes.designIcon} ${classes.designBottom} ${classes.designOne}`} alt=""/>
        <img src={designTwo} className={`${classes.designIcon} ${classes.designBottom} ${classes.designTwo}`} alt=""/>
        <img src={designThree} className={`${classes.designIcon} ${classes.designTop} ${classes.designThree}`} alt=""/>
        <img src={designFour} className={`${classes.designIcon} ${classes.designTop} ${classes.designFour}`} alt=""/>
        <Grid item lg={6} md={5} sm={5}  >
          <Typography className={classes.redefineHeading} variant="h4" component="h4">We are redefining the art of saving…</Typography>
        </Grid>
        <Grid item lg={6} md={5} sm={5} >
          <Typography className={classes.redefineSub} variant="subtitle1" component="p">
            We are determined to help everyone fulfill their life dreams one at a time by presenting
            “Savings” to them as being attractive and easy, through quirky rewards and highly interactive platforms.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.aboutSection} justify="space-evenly" alignItems="center"
        style={{ background: 'linear-gradient(250.05deg, #F5F7FA 1.71%, #F4FFF8 95.17%)'}}
      >
        <Grid justify="space-evenly" container item lg={5} md={5} sm={6} xs={4}>
          <div className={classes.aboutSectionRec}></div>
        </Grid>
        <Grid container item lg={5} md={5} sm={6} xs={8} justify="space-evenly" >
          <div className={classes.aboutSectionTxt}>
            <Typography variant="h2" component="h2" className={classes.aboutSectionHeading}>
              What drives us
            </Typography>
            <Typography variant="body1" component="p" className={classes.aboutSectionSub}>
              We will count our successes in the number of dreams we have helped fulfill, lives we
              have helped change for better and communities we have helped attain higher levels of development,
              as we evolve into Africa’s most trusted financial institution.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.company}>
        <Typography className={classes.companyTitle} variant="h2" component="h2">What we stand for</Typography>
        <Typography className={classes.companySubTitle} variant="body1" component="p">
          We are guided by strong, valid and non-negotiable values that
          take the front-seat in our professional dealings and relationships
        </Typography>
        <Grid container justify="space-evenly">
          <Grid item lg={3} md={3} sm={3}>
            <div className={classes.companyBox}>
              <div  className={classes.companyIconBox}>
                <img className={classes.companyIcon} src={visionIcon} alt="vault way vision"/>
              </div>
              <div className={classes.companyContent}>
                <Typography className={classes.companyHeading} variant="h4" component="h4">
                  We are not afraid of being honest
                </Typography>
                <Typography className={classes.companyTxt} variant="body1"component="p">
                This is why we operate at the highest level of integrity and within the strictest system of
                provisional work ethics. We do what is right at all times and we take full responsibilities for our actions.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={3}>
            <div className={classes.companyBox}>
                <div className={classes.companyIconBox}>
                  <img className={classes.companyIcon} src={missionIcon} alt="vault way vision"/>
                </div>
                <div className={classes.companyContent}>
                  <Typography className={classes.companyHeading} variant="h4" component="h4">
                    We are committed without restraints
                  </Typography>
                  <Typography className={classes.companyTxt} variant="body1"component="p">
                    Our pursuit of excellence has no reservation. This explains our passion for the satisfaction
                    and retention of our customers and the provision and delivery of the best savings services for everyone. 
                  </Typography>
                </div>
              </div>
          </Grid>
          <Grid item lg={3} md={3} sm={3}>
            <div className={classes.companyBox}>
                <div className={classes.companyIconBox}>
                  <img className={classes.companyIcon} src={valuesIcon} alt="vault way vision"/>
                </div>
                <div className={classes.companyContent}>
                  <Typography className={classes.companyHeading} variant="h4" component="h4">
                    We are one single, unbroken unit
                  </Typography>
                  <Typography className={classes.companyTxt} variant="body1"component="p">
                    We are intentional about creating an atmosphere where everyone is known, accepted, loved,
                    respected and driven to be the best version of themselves as we jointly move towards the
                    actualisation of a shared vision.
                  </Typography>
                </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container className={classes.join}>
        <Grid item className={classes.joinImgContainer} lg={6} md={6} sm={6}>
          <img  className={classes.joinImg} src={img} alt=""/>
        </Grid>
        <Grid item container alignItems="center" justify="center" lg={6} md={6} sm={6}>
          <div className={classes.joinContainer}>
            <Typography className={classes.joinHeading} variant="h3" component="h3">Join Us</Typography>
            <Typography className={classes.joinTxt} variant="body1" component="p">
              Be part of a people passionate about creating solid, positive relationships as they work together
              towards ensuring that everyone lives an optimal life.
            </Typography>
            <ButtonCta type="contained" text="Careers" bgColor="primary"
              shadow={true} paddingX="8px" paddingSide="55px" fontSize="12px"
            />
          </div>
        </Grid>
      </Grid>
      {/* <div className={classes.latest}>
        <Typography className={classes.latestHeading} variant="h4" component="h4">Latest News</Typography>
        <Grid container  justify={matchesXS ? 'flex-start' : 'space-evenly'} spacing={2} >
          <Grid className={classes.cardContainer} item lg={3} md={4} sm={6} xs={10}>
            <Card className={classes.Card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="vault way image"
                  image={cardImg1}
                  height="170"
                  title="High return on investments is what you should expect"
                />
              </CardActionArea>
              <CardContent>
                <Typography className={classes.CardTitle} variant="h5" component="h5">
                  High return on investments is what you should expect
                </Typography>
                <Typography className={classes.CardSubtitle} variant="body1" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci
                </Typography>
                <div className={classes.cardFooter}>
                  <Typography className={classes.CardDate}  variant="body2" component="p">
                    24min read
                  </Typography>
                  <div className={classes.cardDot}>.</div>
                  <Typography className={classes.CardDate} variant="body2" component="p">
                    November 21th, 2020
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item lg={3} md={4} sm={6} xs={10}>
            <Card className={classes.Card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="vault way image"
                    image={cardImg2}
                    height="170"
                    title="4 Things parents learned from their finance in 2020"
                  />
                </CardActionArea>
                <CardContent>
                  <Typography className={classes.CardTitle} variant="h5" component="h5">
                    4 Things parents learned from their finance in 2020
                  </Typography>
                  <Typography className={classes.CardSubtitle} variant="body1" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci
                  </Typography>
                  <div className={classes.cardFooter}>
                    <Typography className={classes.CardDate}  variant="body2" component="p">
                      24min read
                    </Typography>
                    <div className={classes.cardDot}>.</div>
                    <Typography className={classes.CardDate} variant="body2" component="p">
                      November 21th, 2020
                    </Typography>
                  </div>
                </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item lg={3} md={4} sm={6} xs={10}>
            <Card className={classes.Card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="vault way image"
                    image={cardImg3}
                    height="170"
                    title="Vaultway listed as the top most influential in Nigeria"
                  />
                </CardActionArea>
                <CardContent>
                  <Typography className={classes.CardTitle} variant="h5" component="h5">
                    Vaultway listed as the top most influential in Nigeria
                  </Typography>
                  <Typography className={classes.CardSubtitle} variant="body1" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci
                  </Typography>
                  <div className={classes.cardFooter}>
                    <Typography className={classes.CardDate}  variant="body2" component="p">
                      24min read
                    </Typography>
                    <div className={classes.cardDot}>.</div>
                    <Typography className={classes.CardDate} variant="body2" component="p">
                      November 21th, 2020
                    </Typography>
                  </div>
                </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div> */}
      <Footer />
    </div>
  )
}

export default About
