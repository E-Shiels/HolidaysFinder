import React from "react";
import HomeIcon from "@material-ui/icons/Home";

import { AppBar, Toolbar, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const styles = theme => ({
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
          <NavLink
            to="/"
            exact
            style={{ color: "white", textDecoration: "none" }}
            activeClassName="active"
          >
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
          </NavLink>
          <NavLink
            to="/about"
            style={{ color: "white", textDecoration: "none" }}
            activeClassName="active"
          >
            <Button
              href="/about"
              color="inherit"
              variant="outlined"
              className={classes.button}
              size="medium"
            >
              About
            </Button>
          </NavLink>
          <NavLink
            to="/favorites"
            style={{ color: "white", textDecoration: "none" }}
            activeClassName="active"
          >
            <Button
              href="/favorites"
              color="inherit"
              variant="outlined"
              className={classes.button}
              size="medium"
            >
              View Favorites
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
