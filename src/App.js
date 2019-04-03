import React, { Component } from "react";
import "./App.css";
import HolidaysContainer from "./components/HolidaysContainer.js";
import SiteFooter from "./components/SiteFooter.js";
import { ConnectedEmailContainer } from "./components/EmailContainer.js";
import Navbar from "./components/Navbar.js";

import NotFound from "./components/NotFound.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    let style = { width: "90%" };
    return (
      <Router>
        <div style={style}>
          <Navbar />
          <h1>Holidays</h1>
          <Switch>
            <Route path="/about" />
            <Route exact path="/" render={props =>
              <div>
              <HolidaysContainer />
              <br/>
              <br/>
              <ConnectedEmailContainer />
              </div>
            }
            />
            <Route component={NotFound} />
          </Switch>
          <SiteFooter />
        </div>
      </Router>
    );
  }
}

export default App;
