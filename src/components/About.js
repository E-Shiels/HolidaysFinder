import React from "react";
import { Typography, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  centeredDiv: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "95%"
  },
  aboutBody: {
    marginTop: theme.spacing.unit
  },
  header: {
    marginTop: theme.spacing.unit * 2
  },
  link: {
    color: "#0000EE"
  }
});

const About = props => {
  const { classes } = props;
  return (
    <div className={classes.centeredDiv}>
      <Typography className={classes.header} variant="h3">
        About
      </Typography>
      <Typography className={classes.aboutBody} variant="body1">
        HolidaysFinder is a Flatiron school portfolio project. It allows you to
        view holidays in Canada and favorite and filter them. It was built using
        React, Create React App, and Redux, as well as assorted middleware and
        npm packages. The data is sent from a Rails API backend with archived
        data from{" "}
        <Link href="https://calendarific.com/" className={classes.link}>
          https://calendarific.com/
        </Link>
        .
      </Typography>
    </div>
  );
};

export default withStyles(styles)(About);
