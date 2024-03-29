import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/nextjs-material-kit/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Testimonial(props) {
  const { text, author, date } = props;
  const classes = useStyles();
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>- {author} {date}</small>
    </blockquote>
  );
}

Testimonial.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node
};