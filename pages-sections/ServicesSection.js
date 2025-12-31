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
                                 <li>Release tension and trauma in the body, including chronic pain</li>
                                 <li>Relief from anxiety-driven symptoms like depression, OCD, negative thoughts, procrastination, insomnia, and panic attacks</li>
                                 <li>Increased energy and motivation</li>
                                 <li>Assistance in moving forward from grief</li>
                                 <li>Better sleep quality</li>
                                 <li>Improved bodily functions such as digestion, immunity, and fertility</li>
                                 <li>Enhanced emotional resilience</li>
                                 <li>Increased stress resilience</li>
                                 <li>Greater sense of calm</li>
                                </ul>
                            }
                            vertical
                        />
                         <div>A TRE session includes:</div>
                         <InfoArea
                            description={
                               <ul>
                                <li>Introduction: Learn about the origin of TRE, the process and the benefits</li>
                                <li>Grounding: Breath-work and body scan to be present and to notice your body’s sensations</li>
                                <li>Gentle exercises: Learn the simple TRE exercises to activate your body’s natural tremoring response</li>
                                <li>Tremoring Phase: Guidance to help your body to tremor naturally and safely</li>
                                <li>Intergration: Relaxation to let your body absorb the process</li>
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
