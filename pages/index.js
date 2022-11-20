import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ServicesSection from "pages-sections/ServicesSection.js";
import HomePageInfoSection from "pages-sections/HomePageInfoSection.js";
import BookingSection from "../pages-sections/BookingSection";
import AboutUsSection from "pages-sections/AboutUsSection.js";
import Link from "next/link";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Home(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div>
            <Header
                color="info"
                routes={dashboardRoutes}
                brand="Trauma Release Exercises With Babette"
                rightLinks={<HeaderLinks/>}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "info"
                }}
                {...rest}
            />
            <Parallax filter responsive image={require("../assets/img/CA448FDA-D25F-4170-905B-C49CB6A14DB5.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>TENSION/TRAUMA RELEASING EXERCISES</h1>
                            <h4>
                            Trauma Release Exercises With Babette, BOOK A CLASS NOW!
                            </h4>
                            <br/>
                            <Link href="#enquiries">
                            <Button
                                color="info"
                                size="lg"
                            >
                                Book a Class
                            </Button>
                            </Link>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div id="infoSection" className={classes.container}>
                    <HomePageInfoSection />
                    <AboutUsSection />
                    <ServicesSection />
                    <BookingSection />
                </div>
            </div>
        </div>
    );
}
