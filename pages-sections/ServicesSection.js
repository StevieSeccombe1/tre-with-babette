import React from "react";
import {makeStyles} from "@mui/styles";
import GridContainer from "components/Grid/GridContainer.js";
import Image from "next/image"
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import img from "assets/img/growth.jpg"
import img2 from "assets/img/continue.jpg"

const useStyles = makeStyles(styles);

export default function ServicesSection() {
    const classes = useStyles();
    return (
        <div id="services" className={classes.section}>
            <div>
            <h2 className={classes.title}>BENEFITS FROM TRE</h2>
                <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}><Image objectFit="contain" objectPosition="top" alt="Continue" src={img2} /></GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            description={
                                <ul>
                                <li>Release/relief from past-held tension/trauma in the mind & body including held chronic pain</li>
                                <li>Relief from anxiety-driven symptoms including depression, OCD, negative thoughts, procrastination, insomnia and panic attacks</li>
                                <li>Increased energy and motivation</li>
                                <li>Better quality of sleep</li>
                                <li>Help with moving forward from grief</li>
                                <li>Improved bodily functions including digestion, immunity and fertility</li>
                                <li>Improved emotional resilience</li>
                                <li>Increased resilience to stress</li>
                                <li>Increased sense of calm</li>
                                </ul>
                            }
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}><Image objectFit="contain" objectPosition="top" alt="Growth" src={img} /></GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
