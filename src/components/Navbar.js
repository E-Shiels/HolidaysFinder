import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Navbar = () => (
  <div>
    <AppBar>
    <Toolbar>
    <Button href="/">
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
