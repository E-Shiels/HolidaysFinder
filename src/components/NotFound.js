import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/Error";

const styles = theme => ({
  centeredDiv: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "95%"
  },
  body: {
    marginTop: theme.spacing.unit * 2
  },
  header: {
    marginTop: theme.spacing.unit * 2
  },
  icon: {
    position: "relative",
    width: "1.7em",
    height: "1.7em"
  }
});

const notFound = props => {
  const { classes } = props;
  return (
    <div className={classes.centeredDiv}>
      <Typography className={classes.header} variant="h2">
        <ErrorIcon color="inherit" className={classes.icon} />
        Error - 404
      </Typography>
      <Typography className={classes.body} variant="body1">
        The page you were looking for could not be found. Try pressing one of
        the buttons in the navigation bar.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(notFound);
