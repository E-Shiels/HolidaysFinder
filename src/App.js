import React, { Component } from "react";
import "./App.css";
import HolidaysContainer from "./components/HolidaysContainer.js";
import SiteFooter from "./components/SiteFooter.js";
import EmailContainer from "./components/EmailContainer.js";

import NotFound from './components/NotFound.js'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    let style = { width: "90%" };
    return (
      <Router>
      <h1>Holidays</h1>
      <Switch>
      <Route path="/about" />
      <Route exact path="/" />
      <div style={style}>
        <HolidaysContainer />
        <EmailContainer />
        <SiteFooter />
      </div>
      <Route component={NotFound}/>
      </Switch>
      </Router>
    );
  }
}

export default App;
