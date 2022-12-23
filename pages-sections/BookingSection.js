import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import img from "assets/img/continue.jpg"

const useStyles = makeStyles(styles);

export default function BookingSection() {
    const classes = useStyles();
    return (
        <div className={classes.sections}>
            <div style={{ textAlign: "center" }} className={classes.container}>
            <h2 className={classes.title}>MAKE A BOOKING</h2>
                <div id="enquiries">
                <div>To book email <a href="mailto:babette.lee1@gmail.com">babette.lee1@gmail.com</a> or call 07973 421048</div>
                <p> </p>
                        <div>Group workshops</div>
                                <div>1-1 sessions</div>
                                <div>Zoom sessions</div>
                                <p> </p>
                <div>Every 2nd Sunday of the month 10.30am - 12 noon - £15</div> 
                    <div>at</div> 
                    <div><a href="https://www.yogaandwellnessrooms.co.uk/">The Yoga and Wellness Rooms</a></div>
                <div>The Old Town Hall, Town Quay, Shoreham-by-Sea BN43 5DD</div>
                <p> </p>
                </div>
                <img width="200px" alt="Continue" src={img} />
            </div>
        </div>
    );
}
