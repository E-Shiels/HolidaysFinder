import React, { Component } from "react";
import { ConnectedHolidaysContainer } from "./components/HolidaysContainer.js";
import SiteFooter from "./components/SiteFooter.js";
import { ConnectedEmailContainer } from "./components/EmailContainer.js";
import Navbar from "./components/Navbar.js";
import { ConnectedFavoriteHolidays } from "./components/FavoriteHolidays.js";
import About from "./components/About.js";
import NotFound from "./components/NotFound.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Router>
          <Navbar />
          <h1>Holidays</h1>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/favorites" component={ConnectedFavoriteHolidays} />
            <Route
              exact
              path="/"
              render={(props) => (
                <div>
                  <ConnectedHolidaysContainer />
                  <br />
                  <br />
                  <ConnectedEmailContainer />
                </div>
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <SiteFooter />
      </Router>
      </React.Fragment>
    );
  }
}

export default App;
