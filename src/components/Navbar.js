import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "typeface-roboto";

const Navbar = () => (
  <div>
    <AppBar position="static" color="secondary">
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
      <Typography variant="h3" align="center" gutterBottom>
      HOLIDAYS
      </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
