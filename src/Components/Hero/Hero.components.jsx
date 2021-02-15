import React from 'react'
import heroStyles from './Hero.styles';
import Typography from '@material-ui/core/Typography';
import ButtonCta from './../ButtonCta/ButtonCta.component';
import HeroImg from '../../assets/img/Hero-img.png';

const Hero = () => {
  const classes = heroStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heroContainer}>
        <div className={classes.heroText}>
          <Typography className={classes.heading} variant="h1" component="h1">
            Save your way <br/> into the <span className={classes.headingSpan}>future</span>
          </Typography>
          <Typography className={classes.subHeading} variant="subtitle1">
            Enjoy amazing interest rates and achieve more <br/> financial freedom by saving through the simplest, <br/>
            smartest amd most comfortable way.
          </Typography>
          <ButtonCta type="contained" text="Start Saving Now" bgColor="primary" shadow={true} paddingSide="20px" />
        </div>
        <div className={classes.heroImg}>
          <img className={classes.img} src={HeroImg} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Hero
