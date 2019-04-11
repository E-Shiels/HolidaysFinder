import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <NavLink
      className="navbarLink"
      activeClassName="activeNavbarLink"
      exact
      to="/"
    >Home</NavLink>
    <br/>
    <NavLink
      className="navbarLink"
      activeClassName="activeNavbarLink"
      exact
      to="/about"
    >About</NavLink>
    <br/>
    <NavLink
      className="navbarLink"
      activeClassName="activeNavbarLink"
      exact
      to="/about"
    >View Favorites</NavLink>
  </div>
);

export default Navbar;
