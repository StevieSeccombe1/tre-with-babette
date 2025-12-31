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
<div>A TRE session includes:
<ul>
<li>Introduction: Learn about the origin of TRE, the process and the benefits</li>
<li>Grounding: Breath-work and body scan to be present and to notice your body’s sensations</li>
<li>Gentle exercises: Learn the simple TRE exercises to activate your body’s natural tremoring response</li>
<li>Tremoring Phase: Guidance to help your body to tremor naturally and safely</li>
<li>Intergration: Relaxation to let your body absorb the process</li>
    </ul>
    </div>

<div>Babette teaches group TRE sessions monthly at The ShoreRooms in Shoreham</div>
<div>(2nd Sunday of the month)</div>
<div>10.30am-12noon</div>
<div>£18</div>

<div>1-1 or 2-1 sessions are also available in person and via Zoom</div>

<div>Additionally, Babette is a Reiki master and offers Reiki healing and combination TRE with Reiki sessions</div>

<div>Babette is also available for retreats, events and collaborations</div>

<div>For inquires or to book a free 20 minute discovery call please contact Babette at:</div>

<div>Phone: <a href="tel:07973 421048">07973 421048</a></div>
<div>Email: <a href="mailto:babette.lee1@gmail.com">babette.lee1@gmail.com</a></div>
<div>Website: tre-with-babette.co.uk</div>

    
                // <div>Group workshops</div>
                // <div>1-1 sessions</div>
                // <div>Zoom sessions</div>
                //                 <p> </p>
                // <div>Beginners and all levels welcome</div>
                // <p> </p>
                // <div>To book or to make an enquiry email <a href="mailto:babette.lee1@gmail.com">babette.lee1@gmail.com</a> or call <a href="tel:07973 421048">07973 421048</a></div>         
                // <p> </p>
                // <div>Group workshops every 2nd Sunday of the month - £15</div> 
                //     <div>at</div> 
                //     <div><a href="https://www.yogaandwellnessrooms.co.uk/">The Yoga and Wellness Rooms</a></div>
                // <div>The Old Town Hall, Town Quay, Shoreham-by-Sea BN43 5DD</div>
                // <p> </p>
                </div>
                <Image objectFit="contain" alt="Connect" src={img} />
            </div>
        </div>
    );
}
