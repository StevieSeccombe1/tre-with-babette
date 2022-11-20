import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function BookingSection() {
    const classes = useStyles();
    return (
        <div className={classes.sections}>
            <div style={{ textAlign: "center" }} className={classes.container}>
            <h2 className={classes.title}>MAKE A BOOKING</h2>
                <div id="enquiries">
                TRE Workshop every 2nd Sunday of the month starting 11th September 10.30am - 12 noon £15 (booked in advance).</div>
                <div>To book email <a href="mailto:babette.lee1@gmail.com">babette.lee1@gmail.com</a> or call 07973 421048.
                </div>
            </div>
        </div>
    );
}
