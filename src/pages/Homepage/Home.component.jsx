import React, { useEffect } from 'react';
import homeStyles from './Home.styles';
import Navbar from '../../Components/Navbar/Navbar.component';
import Message from '../../Components/Messgae/Message.component';
import secureIcon from '../../assets/icons/securityIcon.png'
import authIcon from '../../assets/icons/authenticationIcon.png'
import steerIcon from '../../assets/icons/steerIcon.png'
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
            <Grid className={classes.hero} container justify="center" alignItems="center">
                <Grid container item lg={5} md={5} sm={6} xs={9}  justify={matchesXS ? 'flex-start' : 'center'} >
                    <div className={classes.heroText}>
                        <h1 className={classes.heading}>
                            Save your way <br/> into the <span className={classes.headingSpan}>future</span>
                        </h1>
                        <p className={classes.subHeading}>
                            Enjoy amazing interest rates and achieve more <br/> financial freedom by saving through the simplest, <br/>
                            smartest amd most comfortable way.
                        </p>
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
                <h2 className={classes.securityHeading}>
                    Save with the assurance of security
                </h2>
                <div className={classes.securityContainer}>
                    <div className={classes.securityBox}>
                        <div className={classes.secIconBox}>
                            <img src={secureIcon} className={classes.securityIcon} alt="vaultway secure"/>
                        </div>
                        <div className={classes.securityContent}>
                            <h4 className={classes.securityTitle} >
                                256 bits SSl <br/> security
                            </h4>
                            <p className={classes.securitySubTitle} >
                                vaultWay offers you state-of-the-art internet security technology, through the use of
                                256 bits SSl security encryption in order to safeguard your information from duplicity.
                            </p>
                        </div>
                    </div>
                    <div className={classes.securityBox}>
                        <div className={classes.secIconBox}>
                            <img src={authIcon} className={classes.securityIcon} alt="vaultway authentication"/>
                        </div>
                        <div className={classes.securityContent}>
                            <h4 className={classes.securityTitle} >
                                Two-factor <br/> authentication
                            </h4>
                            <p className={classes.securitySubTitle}>
                                Vaultway savings account are protected by Two-factor Authentication (2FA) by default,
                                to guaranty the safety of your account from unauthorized access.
                            </p>
                        </div>
                    </div>
                </div>
                <h4 className={classes.vaultWayTxt} >With vaultway</h4>
                <div className={classes.securityFooter}>
                    <div className={classes.secFooterIconBox}>
                        <img src={steerIcon} className={classes.secFooterIcon} alt="vaultway icon"/>
                    </div>
                    <h4 className={classes.secFooterTxt} >
                        Meet your financial goals... <span className={classes.secFooterSpan}>and then, beat 'em!</span>
                    </h4>
                    <div className={classes.secFooterIconBox}>
                        <img src={steerIcon} className={classes.secFooterIcon} alt="vaultway icon"/>
                    </div>
                </div>
            </div>
            <div className={classes.plan}>
                <h2 className={classes.planHeading} >
                    An array of novel savings plans <br/> just for you
                </h2>
                <Grid container justify="space-evenly" alignItems="center" className={classes.planContainer} >
                    <Grid container justify="space-around"  item md={5}>
                        <img src={vaultImg} className={classes.plansImg} alt="vaultway vault box"/>
                    </Grid>
                    <Grid container  direction="column" item md={5}>
                        <div className={classes.planBox}>
                            <div className={`${classes.plansIconBox} ${classes.regularIconBox}`}>
                                <img src={regularVaultImg} className={`${classes.plansIcon} ${classes.regularIcon}`}
                                alt="vaultway regular plan icon"/>
                            </div>
                            <div className={classes.planContent}>
                                <h6 className={classes.planBoxHeading}>Regular Vaults</h6>
                                <p className={classes.planBoxSub} >
                                    Never miss out on earning up to 20% interest on your savings in the first month and 5% interest
                                    in the subsequent months with unique savings plans that even allows you to automate your savings
                                </p>
                            </div>
                        </div>
                        <div className={classes.planBox}>
                            <div className={`${classes.plansIconBox} ${classes.quickIconBox}`}>
                                <img src={fundVaultImg} className={`${classes.plansIcon} ${classes.quickIcon}`}
                                alt="vaultway quick plan icon"/>
                            </div>
                            <div className={classes.planContent}>
                                <h6 className={classes.planBoxHeading} >Quick Vault</h6>
                                <p className={classes.planBoxSub} >
                                    Maintain a strict spending culture and avoid temptations by locking away your money for
                                    brief durations with no access to it until you set a due date
                                </p>
                            </div>
                        </div>
                        <div className={classes.planBox}>
                            <div className={`${classes.plansIconBox} ${classes.fundIconBox}`}>
                                <img src={quickVaultImg} className={`${classes.plansIcon} ${classes.fundIcon}`}
                                alt="vaultway fund plan icon"/>
                            </div>
                            <div className={classes.planContent}>
                                <h6 className={classes.planBoxHeading} >FundMyVault</h6>
                                <p className={classes.planBoxSub}>
                                    Easily get family, friends and loved ones to donate funds and save up with you on
                                    projects that are dear to your heart
                                </p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.smart}>
                <h2 className={classes.smartHeading}>
                    Smart saving now made easy
                </h2>
                <p className={classes.smartSubTitle} >
                    You can start saving and earning amazing interest in just
                    <br/> four simple steps
                </p>
                <Grid container justify="space-evenly" alignItems="center">
                    <Grid item>
                        <div className={classes.step}>
                            <div className={classes.number}>
                               <p className={classes.numberText}>1</p>
                            </div>
                            <div className={classes.stepContent}>
                                <h5 className={classes.stepTitle}>Open An Account</h5>
                                <p className={classes.stepSubTitle}>
                                    create your own savings account with your name, email and password
                                </p>
                            </div>
                        </div>
                        <div className={classes.step}>
                            <div className={classes.number}>
                               <p className={classes.numberText}>2</p>
                            </div>
                            <div className={classes.stepContent}>
                                <h5 className={classes.stepTitle}>Choose a Plan</h5>
                                <p className={classes.stepSubTitle}>
                                    Select a savings plan that suits your financial goals and time frame
                                </p>
                            </div>
                        </div>
                        <div className={classes.step}>
                            <div className={classes.number}>
                               <p className={classes.numberText}>3</p>
                            </div>
                            <div className={classes.stepContent}>
                                <p className={classes.stepTitle} >
                                    Setup your Payment details
                                </p>
                                <p className={classes.stepSubTitle} >
                                    Add your bank account and debit card details for ease of payments and withdrawals.
                                </p>
                            </div>
                        </div>
                        <div className={classes.step}>
                            <div className={classes.number}>
                               <p className={classes.numberText}>4</p>
                            </div>
                            <div className={classes.stepContent}>
                                <p className={classes.stepTitle} >Begin your Savings Journey</p>
                                <p className={classes.stepSubTitle} >
                                Watch your financial goals move closer to achievement each day as your savings grow.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <img src={computerImg} className={classes.smartImg} alt="vaultway computer"/>
                    </Grid>
                </Grid>
            </div>
            <div id="stories" className={classes.stories}>
                <h2 className={classes.storiesHeading}>
                    Stories from our Community
                </h2>
                <Grid container className={classes.storiesContainer} spacing={2}>
                    <Grid item md={4} sm={6}>
                        <div className={classes.story}>
                            <div className={classes.storyPerson}>
                                <div className={classes.storyImgContainer}>
                                   <img src={storySampleImg} className={classes.name} alt=""/>
                                </div>
                                <p className={classes.nameTxt}>Ayodeji O.</p>
                            </div>
                            <p className={classes.storyTestimony}>
                                Wahala for person wey no use VaultWay ooo. My interest rates keeps coming in daily
                                like what was promised in the lords prayer
                            </p>
                            <img src={twitterIcon} className={classes.StoryIcon} alt="vaultway testimony icon"/>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <div className={classes.story}>
                            <div className={classes.storyPerson}>
                                <div className={classes.storyImgContainer}>
                                   <img src={storySampleImg} className={classes.name} alt=""/>
                                </div>
                                <p className={classes.nameTxt}>Ayodeji O.</p>
                            </div>
                            <p className={classes.storyTestimony}>
                                Wahala for person wey no use VaultWay ooo. My interest rates keeps coming in daily
                                like what was promised in the lords prayer
                            </p>
                            <img src={twitterIcon} className={classes.StoryIcon} alt="vaultway testimony icon"/>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <div className={classes.story}>
                            <div className={classes.storyPerson}>
                                <div className={classes.storyImgContainer}>
                                   <img src={storySampleImg} className={classes.name} alt=""/>
                                </div>
                                <p className={classes.nameTxt}>Ayodeji O.</p>
                            </div>
                            <p className={classes.storyTestimony}>
                                Wahala for person wey no use VaultWay ooo. My interest rates keeps coming in daily
                                like what was promised in the lords prayer
                            </p>
                            <img src={twitterIcon} className={classes.StoryIcon} alt="vaultway testimony icon"/>
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
