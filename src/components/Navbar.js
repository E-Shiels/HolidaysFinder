import React from "react";
import HomeIcon from "@material-ui/icons/Home";

import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  invisibleAppBar:{
    backgroundColor: "transparent",
    boxShadow: 'none',
    marginTop: '6px',
  },
  appHeader: {
    
  }
});

function Navbar(props) {
  const { classes } = props;
  return (
    <div>
    <AppBar className={classes.invisibleAppBar}>
    <Typography variant="h3"  align="center" color="inherit" mt='2'>
    HolidaysFinder
    </Typography>
    </AppBar>
      <AppBar position="static" color="primary">
        <Toolbar >
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
            Home
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
