/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Link href="/#aboutUs">
              <Button
                  color="transparent"
                  className={classes.navLink}
              >
                  About
              </Button>
          </Link>
      </ListItem>
        <ListItem className={classes.listItem}>
            <Link href="/#services">
            <Button
                color="transparent"
                className={classes.navLink}
            >
                Benefits
            </Button>
            </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Link href="/#testimonials">
            <Button
                color="transparent"
                className={classes.navLink}
            >
                Testimonials
            </Button>
            </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Link href="/#enquiries">
            <Button
                color="transparent"
                className={classes.navLink}
            >
                Book
            </Button>
            </Link>
        </ListItem>
    </List>
  );
}
