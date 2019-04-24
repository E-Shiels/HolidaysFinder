import React from "react";
import HomeIcon from "@material-ui/icons/Home";

import { AppBar, Toolbar, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  invisibleAppBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    marginTop: "6px"
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
            color="inherit"
            variant="outlined"
            className={classes.button}
            size="medium"
          >
            <HomeIcon
              color="inherit"
              className={classes.leftIcon}
              vertical-align="text-top"
            />
            Holidays Finder
          </Button>
          <Button
            href="/about"
            color="inherit"
            variant="outlined"
            className={classes.button}
            size="medium"
          >
            About
          </Button>
          <Button
            href="/favorites"
            color="inherit"
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
