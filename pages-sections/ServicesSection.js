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
                                 <li>RRelease tension and trauma in the body, including chronic pain</li>
                                 <li>RRelief from anxiety-driven symptoms like depression, OCD, negative thoughts, procrastination, insomnia, and panic attacks</li>
                                 <li>RIncreased energy and motivation</li>
                                 <li>RAssistance in moving forward from grief</li>
                                 <li>RBetter sleep quality</li>
                                 <li>RImproved bodily functions such as digestion, immunity, and fertility</li>
                                 <li>REnhanced emotional resilience</li>
                                 <li>RIncreased stress resilience</li>
                                 <li>RGreater sense of calm</li>
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
