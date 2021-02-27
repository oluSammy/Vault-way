import React, { useEffect } from 'react';
import homeStyles from './styles/Home.styles';
import Navbar from '../../Components/Navbar/Navbar.component';
import Message from '../../Components/Messgae/Message.component';
import NavMargin from '../../Components/NavMargin/NavMargin.component';
import secureIcon from '../../assets/icons/securityIcon.png'
import authIcon from '../../assets/icons/authenticationIcon.png'
import steerIcon from '../../assets/icons/steerIcon.png'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import vaultImg from '../../assets/img/vault-Image.png'
import regularVaultImg from '../../assets/icons/regular-valut-icon.png'
import twitterIcon from '../../assets/icons/twitter-icon.png'
import quickVaultImg from '../../assets/icons/quick-vault-icon.png'
import fundVaultImg from '../../assets/icons/fund-vault-icon.png'
import computerImg from '../../assets/img/computer.png'
import storySampleImg from '../../assets/img/story-sample-img.png';
import HeroImg from '../../assets/img/Hero-img.png';
import Footer from './../../Components/Footer/Footer.component';
import ButtonCta from '../../Components/ButtonCta/ButtonCta.component';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const classes = homeStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const navLinks =[
        {
            title: 'Save',
            link: '/plans',
            routerLink: true
        },
        {
            title: 'Stories',
            routerLink: false,
            link: '#stories'
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
            <Message />
            <NavMargin />
            <Grid className={classes.hero} container justify="center" alignItems="center">
                <Grid container item lg={5} md={5} sm={6} xs={9}  justify={matchesXS ? 'flex-start' : 'center'} >
                    <div className={classes.heroText}>
                        <Typography className={classes.heading} variant="h1" component="h1">
                            Save your way <br/> into the <span className={classes.headingSpan}>future</span>
                        </Typography>
                        <Typography className={classes.subHeading} variant="subtitle1">
                            Enjoy amazing interest rates and achieve more <br/> financial freedom by saving through the simplest, <br/>
                            smartest amd most comfortable way.
                        </Typography>
                        <ButtonCta  type="contained" text="Start Saving Now" bgColor="primary"
                            shadow={true}
                            paddingSide={matchesXS ? '22px' : '25px'}
                            paddingX={matchesXS ? '10px' : '12px'}
                            fontSize={matchesXS ? '12px' : '15px'}
                        />
                    </div>
                </Grid>
                <Grid container item lg={5} md={5} sm={6} xs={9}  justify={matchesXS ? 'flex-end' : 'center'} >
                    <img className={classes.img} src={HeroImg} alt=""/>
                </Grid>
            </Grid>
            <div className={classes.security}>
                <Typography className={classes.securityHeading} variant="h2" component="h2">
                    Save with the assurance of security
                </Typography>
                <div className={classes.securityContainer}>
                    <div className={classes.securityBox}>
                        <div className={classes.secIconBox}>
                            <img src={secureIcon} className={classes.securityIcon} alt="vault way secure"/>
                        </div>
                        <div className={classes.securityContent}>
                            <Typography className={classes.securityTitle} variant="h4" component="h4">
                                256 bit SSl <br/> security
                            </Typography>
                            <Typography className={classes.securitySubTitle} variant="body1" component="h4">
                                vault Way offers you state-of-the-art internet security technology, through the use of
                                256 bits SSl security encryption in order to safeguard your information from duplicity.
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.securityBox}>
                        <div className={classes.secIconBox}>
                            <img src={authIcon} className={classes.securityIcon} alt="vault way authentication"/>
                        </div>
                        <div className={classes.securityContent}>
                            <Typography className={classes.securityTitle} variant="h4" component="h4">
                                Two-factor <br/> authentication
                            </Typography>
                            <Typography className={classes.securitySubTitle} variant="body1" component="h4">
                                Vault way savings account are protected by Two-factor Authentication (2FA) by default,
                                to guaranty the safety of your account from unauthorized access.
                            </Typography>
                        </div>
                    </div>
                </div>
                <Typography className={classes.vaultWayTxt} variant="h4" component="h4">With vault way</Typography>
                <div className={classes.securityFooter}>
                    <div className={classes.secFooterIconBox}>
                        <img src={steerIcon} className={classes.secFooterIcon} alt="vault way icon"/>
                    </div>
                    <Typography className={classes.secFooterTxt} variant="h6" component="h4">
                        Meet your financial goals... <span className={classes.secFooterSpan}>and then, beat 'em!</span>
                    </Typography>
                    <div className={classes.secFooterIconBox}>
                        <img src={steerIcon} className={classes.secFooterIcon} alt="vault way icon"/>
                    </div>
                </div>
            </div>
            <div className={classes.plan}>
                <Typography className={classes.planHeading} variant="h2" component="h2">
                    An array of novel savings plans <br/> just for you
                </Typography>
                <Grid container justify="space-evenly" alignItems="center" className={classes.planContainer} >
                    <Grid container justify="space-around"  item md={5}>
                        <img src={vaultImg} className={classes.plansImg} alt="vault way vault box"/>
                        {/* <div className={classes.planImgBox}>
                        </div> */}
                    </Grid>
                    <Grid container  direction="column" item md={5}>
                        <div className={classes.planBox}>
                            <div className={`${classes.plansIconBox} ${classes.regularIconBox}`}>
                                <img src={regularVaultImg} className={`${classes.plansIcon} ${classes.regularIcon}`}
                                alt="vault way regular plan icon"/>
                            </div>
                            <div className={classes.planContent}>
                                <Typography className={classes.planBoxHeading} variant="h6" component="h6">Regular Vaults</Typography>
                                <Typography className={classes.planBoxSub} variant="body1" component="p">
                                    Never miss out on earning up to 20% interest on your savings in the first month and 5% interest
                                    in the subsequent months with unique savings plans that even allows you to automate your savings
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.planBox}>
                            <div className={`${classes.plansIconBox} ${classes.quickIconBox}`}>
                                <img src={quickVaultImg} className={`${classes.plansIcon} ${classes.quickIcon}`}
                                alt="vault way quick plan icon"/>
                            </div>
                            <div className={classes.planContent}>
                                <Typography className={classes.planBoxHeading} variant="h6" component="h6">Quick Vault</Typography>
                                <Typography className={classes.planBoxSub} variant="body1" component="p">
                                    Maintain a strict spending culture and avoid temptations by locking away your money for
                                    brief durations with no access to it until you set a due date
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.planBox}>
                            <div className={`${classes.plansIconBox} ${classes.fundIconBox}`}>
                                <img src={fundVaultImg} className={`${classes.plansIcon} ${classes.fundIcon}`}
                                alt="vault way fund plan icon"/>
                            </div>
                            <div className={classes.planContent}>
                                <Typography className={classes.planBoxHeading} variant="h6" component="h6">Fund My Vault</Typography>
                                <Typography className={classes.planBoxSub} variant="body1" component="p">
                                    Easily get family, friends and loved ones to donate funds and save up with you on
                                    projects that are dear to your heart
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.smart}>
                <Typography className={classes.smartHeading} variant="h2" component="h2">
                    Smart saving now made easy
                </Typography>
                <Typography className={classes.smartSubTitle} variant="body2" component="p">
                    You can start saving and earning amazing interest in just
                    <br/> four simple steps
                </Typography>
                <Grid container justify="space-evenly" alignItems="center">
                    <Grid item>
                        <div className={classes.step}>
                            <div className={classes.number}>
                               <p className={classes.numberText}>1</p>
                            </div>
                            <div className={classes.stepContent}>
                                <Typography className={classes.stepTitle} variant="h5" component="h5">Open An Account</Typography>
                                <Typography className={classes.stepSubTitle} variant="body2" component="p">
                                    create your own savings account with your name, email and password
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.step}>
                            <div className={classes.number}>
                               <p className={classes.numberText}>2</p>
                            </div>
                            <div className={classes.stepContent}>
                                <Typography className={classes.stepTitle} variant="h5" component="h5">Choose a Plan</Typography>
                                <Typography className={classes.stepSubTitle} variant="body2" component="p">
                                    Select a savings plan that suits your financial goals and time frame
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.step}>
                            <div className={classes.number}>
                               <p className={classes.numberText}>3</p>
                            </div>
                            <div className={classes.stepContent}>
                                <Typography className={classes.stepTitle} variant="h5" component="h5">
                                    Setup your Payment details
                                </Typography>
                                <Typography className={classes.stepSubTitle} variant="body2" component="p">
                                    Add your bank account and debit card details for ease of payments and withdrawals.
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.step}>
                            <div className={classes.number}>
                               <p className={classes.numberText}>4</p>
                            </div>
                            <div className={classes.stepContent}>
                                <Typography className={classes.stepTitle} variant="h5" component="h5">Open An Account</Typography>
                                <Typography className={classes.stepSubTitle} variant="body2" component="p">
                                Watch your financial goals move closer to achievement each day as your savings grow.
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <img src={computerImg} className={classes.smartImg} alt="vault way computer"/>
                    </Grid>
                </Grid>
            </div>
            <div id="stories" className={classes.stories}>
                <Typography variant="h2" component="h2" className={classes.storiesHeading}>
                    Stories from our Community
                </Typography>
                <Grid container className={classes.storiesContainer} spacing={2}>
                    <Grid item md={4} sm={6}>
                        <div className={classes.story}>
                            <div className={classes.storyPerson}>
                                <div className={classes.storyImgContainer}>
                                   <img src={storySampleImg} className={classes.name} alt=""/>
                                </div>
                                <Typography className={classes.nameTxt} variant="body2" component="p">Ayodeji O.</Typography>
                            </div>
                            <Typography className={classes.storyTestimony} variant="body1" component="p">
                                Wahala for person wey no use Vault Way ooo. My interest rates keeps coming in daily
                                like what was promised in the lords prayer
                            </Typography>
                            <img src={twitterIcon} className={classes.StoryIcon} alt="vault way testimony icon"/>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <div className={classes.story}>
                            <div className={classes.storyPerson}>
                                <div className={classes.storyImgContainer}>
                                   <img src={storySampleImg} className={classes.name} alt=""/>
                                </div>
                                <Typography className={classes.nameTxt} variant="body2" component="p">Ayodeji O.</Typography>
                            </div>
                            <Typography className={classes.storyTestimony} variant="body1" component="p">
                                Wahala for person wey no use Vault Way ooo. My interest rates keeps coming in daily
                                like what was promised in the lords prayer
                            </Typography>
                            <img src={twitterIcon} className={classes.StoryIcon} alt="vault way testimony icon"/>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <div className={classes.story}>
                            <div className={classes.storyPerson}>
                                <div className={classes.storyImgContainer}>
                                   <img src={storySampleImg} className={classes.name} alt=""/>
                                </div>
                                <Typography className={classes.nameTxt} variant="body2" component="p">Ayodeji O.</Typography>
                            </div>
                            <Typography className={classes.storyTestimony} variant="body1" component="p">
                                Wahala for person wey no use Vault Way ooo. My interest rates keeps coming in daily
                                like what was promised in the lords prayer
                            </Typography>
                            <img src={twitterIcon} className={classes.StoryIcon} alt="vault way testimony icon"/>
                        </div>
                    </Grid>
                </Grid>
                <div className={classes.storyBtn}>
                <Button color="primary">Read More</Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
