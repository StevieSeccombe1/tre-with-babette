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
                    TRE (Tension/Trauma Releasing Exercises) consist of seven simple exercises that help your body safely activate a natural reflex of shaking/ vibrating/moving. This process releases deep-held stress, tension, and trauma, helping to turn off the fight/flight/freeze responses to past overwhelming events and resetting your system.</h5>
                    <h5 className={classes.description}>The practice is simple, effective, and accessible to all ages, physical abilities and fitness levels.</h5>
                    <h5 className={classes.description}>Once your body has remembered this innate self healing through TRE you then have a valuable lifelong tool for maintaining emotional and physical well-being to practice as and when you want to.</h5>
                 </GridItem>
                <GridItem xs={12} sm={12} md={4}><Image alt="Body" src={img2} objectFit="contain" objectPosition="top" /></GridItem>
            </GridContainer>
        </div>
    );
}
