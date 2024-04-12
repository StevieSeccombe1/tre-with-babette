import React from "react";
import Carousel from "react-slick";
import {testimonials} from "../components/Testimonial/testimonials";
import Testimonial from "../components/Testimonial/Testimonial";
import {makeStyles} from "@mui/styles";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function TestimonialsSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    const classes = useStyles();
    return (
        <div id="testimonials" className={classes.sections}>
            <div style={{ textAlign: "center" }} className={classes.container}>
        <h2 className={classes.title}>TESTIMONIALS</h2>
        <div carousel>
            <Carousel {...settings}>
                {testimonials.map(testimonial => (
                    <Testimonial key={testimonial} author={testimonial.author} text={testimonial.text} date={testimonial.date} />
                ))}
            </Carousel>
        </div>
        </div>
        </div>
    );
}