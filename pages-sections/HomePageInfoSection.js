import React from "react";
// @mui/material components
import {makeStyles} from "@mui/styles";
import Image from "next/image"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import img from "assets/img/release.jpeg"
import img2 from "assets/img/body.jpg"
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function HomePageInfoSection() {
    const classes = useStyles();
    return (
        <div id="info" className={classes.section}>
            <GridContainer justify="center" md={12}>
            <GridItem xs={12} sm={12} md={4}><Image alt="Release" src={img}  objectFit="contain" objectPosition="top" /></GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <h4 className={classes.title}>TENSION/TRAUMA RELEASING EXERCISES WITH BABETTE</h4>
                    <h5 className={classes.description}>
                    TRE (Tension/Trauma Releasing Exercises) are a set of 7 simple exercises which assist your body to safely activate a natural reflex mechanism of shaking/vibrating/movements. This helps to release deep-held stress/tension/trauma which signals to your mind & body that danger has passed and to turn off the flight/fight/freeze responses to past overwhelming events thereby resetting your system.</h5>
                    <h5 className={classes.description}>The aim of the sessions are to teach you the TRE process so that you are confident enough to be able to practice this self-healing tool yourself.</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}><Image alt="Body" src={img2} objectFit="contain" objectPosition="top" /></GridItem>
            </GridContainer>
        </div>
    );
}
