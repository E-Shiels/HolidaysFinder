import React from "react";
import HomeIcon from "@material-ui/icons/Home";

import { AppBar, Toolbar, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

function Navbar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button
            href="/"
            color="secondary"
            variant="outlined"
            className={classes.button}
            size="medium"
          >
            <HomeIcon
              color="secondary"
              className={classes.leftIcon}
              vertical-align="text-top"
            />
            Home
          </Button>
          <Button
            href="/about"
            color="secondary"
            variant="outlined"
            className={classes.button}
            size="medium"
          >
            About
          </Button>
          <Button
            href="/favorites"
            color="secondary"
            variant="outlined"
            className={classes.button}
            size="medium"
          >
            View Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
