import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

const useStyles = makeStyles(styles);

export default function ServicesSection() {
    const classes = useStyles();
    return (
        <div id="services" className={classes.section}>
            <div>
            <h2 className={classes.title}>BENEFITS FROM TRE</h2>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            description={
                                <ul>
                                <li>Release/relief from past held tension/traumas in the mind and body (including held chronic pain)</li>
                                <li>Relief from anxiety driven symptoms (including: depression, O.C.D, negative thoughts, procrastination, insomnia, panic attacks)</li>
                                <li>Increased energy and motivation</li>
                                <li>Better quality of sleep</li>
                                <li>Improved bodily functions (including: digestion, immunity, fertility)</li>
                                <li>Improved emotional resilience</li>
                                <li>Increased resilience to stress</li>
                                <li>Increased sense of calm</li>
                                </ul>
                            }
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
