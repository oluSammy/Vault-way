import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.component';
import NavMargin from '../../Components/NavMargin/NavMargin.component';
import aboutStyles from './About.styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';  
import Grid from '@material-ui/core/Grid';
import visionIcon from '../../assets/icons/Vision.png'
import missionIcon from '../../assets/icons/Mission.png'
import valuesIcon from '../../assets/icons/Values.png'
import Message from './../../Components/Messgae/Message.component';
import img from '../../assets/img/about-page-img.png';
import ButtonCta from '../../Components/ButtonCta/ButtonCta.component';
import cardImg1  from '../../assets/img/card-img-1.png'
import cardImg2  from '../../assets/img/card-img-2.png'
import cardImg3  from '../../assets/img/card-img-3.png'
import Footer from './../../Components/Footer/Footer.component';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';


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
  ]
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));
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
          We are on a journey to make every penny count for <br/>
          every of our customers and rewards for partners
        </Typography>
      </div>
      <Grid container className={classes.company} justify="space-evenly">
        <Grid item lg={3} md={3} sm={3}>
          <div className={classes.companyBox}>
            <div  className={classes.companyIconBox}>
              <img className={classes.companyIcon} src={visionIcon} alt="vault way vision"/>
            </div>
            <div className={classes.companyContent}>
              <Typography className={classes.companyHeading} variant="h4" component="h4"> Vision </Typography>
              <Typography className={classes.companyTxt} variant="body1"component="p">
                Securing your money for the rainy day could be just as easy as it is.
                Vaultway provides state of the heart security technology to ensure that you are never left stranded
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
                <Typography className={classes.companyHeading} variant="h4" component="h4"> Mission </Typography>
                <Typography className={classes.companyTxt} variant="body1"component="p">
                  Securing your money for the rainy day could be just as easy as it is. Vaultway provides
                  state of the heart security technology to ensure that you are never left stranded
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
                <Typography className={classes.companyHeading} variant="h4" component="h4"> Core values </Typography>
                <Typography className={classes.companyTxt} variant="body1"component="p">
                  Securing your money for the rainy day could be just as easy as it is.
                  Vaultway provides state of the heart security technology to ensure that you are never left stranded
                </Typography>
              </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.join}>
        <Grid item className={classes.joinImgContainer} lg={6} md={6} sm={6}>
          <img  className={classes.joinImg} src={img} alt=""/>
        </Grid>
        <Grid item container alignItems="center" justify="center" lg={6} md={6} sm={6}>
          <div className={classes.joinContainer}>
            <Typography className={classes.joinHeading} variant="h3" component="h3">Join Us</Typography>
            <Typography className={classes.joinTxt} variant="body1" component="p">
              Securing your money for the rainy day could be just as easy as it is. Vaultway
              provides state of the heart security technology to ensure that you are never left stranded
            </Typography>
            <ButtonCta type="contained" text="Careers" bgColor="primary" shadow={true} paddingSide="45px" />
          </div>
        </Grid>
      </Grid>
      <div className={classes.latest}>
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
      </div>
      <Footer />
    </div>
  )
}

export default About
