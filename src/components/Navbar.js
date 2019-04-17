import React from "react";
import Home from "@material-ui/icons/Home"

import {
  AppBar,
  Toolbar,
  Button,
  IconButton
} from "@material-ui/core"

const Navbar = () => (
  <div>
    <AppBar position="static" color="primary">
    <Toolbar>
    <Button href="/">
    <IconButton>
    <Home />
    </IconButton>
      Home
    </Button>
      <Button href="/about">
      About
      </Button>
      <Button href="/favorites">
      View Favorites
      </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
