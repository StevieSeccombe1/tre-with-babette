import React from "react";
import {makeStyles} from "@mui/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import img from "assets/img/babette.jpeg"
import Image from "next/image"

const useStyles = makeStyles(styles);

export default function AboutUsSection() {
    const classes = useStyles();
    return (
        <div id="aboutUs" className={classes.section}>
            <div>
            <h2 className={classes.title}>ABOUT BABETTE</h2>
                <GridContainer justify="center" className={classes.alignItems}>
                    <GridItem xs={12} sm={12} md={8}>
                        <h5 className={classes.description}>
                        Babette has a qualified background of massage and teaching exercise and is a certified TRE provider having trained with TRE for ALL (founder/developer Dr David Berceli of TRE LLC)</h5>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}><Image objectFit="contain" alt="Babette Lee" src={img} /></GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
