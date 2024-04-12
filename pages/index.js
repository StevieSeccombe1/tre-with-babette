import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {makeStyles} from '@mui/styles'

// core components
import Header from "components/Header/Header.js";
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
import TestimonialsSection from "../pages-sections/TestimonialsSection";
import img from "/assets/img/background.jpg"

const dashboardRoutes = [];

const theme = createTheme();

const useStyles = makeStyles(styles);

export default function Home(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <ThemeProvider theme={theme}>
            <Header
                color="info"
                routes={dashboardRoutes}
                brand="Trauma Releasing Exercises with Babette"
                rightLinks={<HeaderLinks/>}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "info"
                }}
                {...rest}
            />
            <Parallax filter responsive image={img}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h2 className={classes.title}>TENSION/TRAUMA RELEASING EXERCISES WITH BABETTE</h2>
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
                    <TestimonialsSection />
                    <BookingSection />
                </div>
            </div>
        </ThemeProvider>
    );
}
