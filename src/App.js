import React, { Component } from "react";
import "./App.css";
import HolidaysContainer from "./components/HolidaysContainer.js";
import SiteFooter from "./components/SiteFooter.js";
import EmailContainer from "./components/EmailContainer.js";

import NotFound from "./components/NotFound.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    let style = { width: "90%" };
    return (
      <Router>
        <div style={style}>
          <h1>Holidays</h1>
          <Switch>
            <Route path="/about" />
            <Route exact path="/" />

            <HolidaysContainer />
            <EmailContainer />

            <Route component={NotFound} />
          </Switch>
          <SiteFooter />
        </div>
      </Router>
    );
  }
}

export default App;
