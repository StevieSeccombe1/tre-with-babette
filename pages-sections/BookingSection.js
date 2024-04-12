import React, {useState} from "react";
// @mui/material components
import {makeStyles} from "@mui/styles";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import img from "assets/img/connect.jpg"
import Image from "next/image"

const useStyles = makeStyles(styles);

export default function BookingSection() {
    const classes = useStyles();
    return (
        <div className={classes.sections}>
            <div style={{ textAlign: "center" }} className={classes.container}>
            <h2 className={classes.title}>MAKE A BOOKING</h2>
                <div id="enquiries">
                <div>Group workshops</div>
                <div>1-1 sessions</div>
                <div>Zoom sessions</div>
                                <p> </p>
                <div>Beginners and all levels welcome</div>
                <p> </p>
                <div>To book or to make an enquiry email <a href="mailto:babette.lee1@gmail.com">babette.lee1@gmail.com</a> or call <a href="tel:07973 421048">07973 421048</a></div>         
                <p> </p>
                <div>Group workshops every 2nd Sunday of the month - £15</div> 
                    <div>at</div> 
                    <div><a href="https://www.yogaandwellnessrooms.co.uk/">The Yoga and Wellness Rooms</a></div>
                <div>The Old Town Hall, Town Quay, Shoreham-by-Sea BN43 5DD</div>
                <p> </p>
                </div>
                <Image objectFit="contain" alt="Connect" src={img} />
            </div>
        </div>
    );
}
