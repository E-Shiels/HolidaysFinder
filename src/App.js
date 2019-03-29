import React, { Component } from "react";
import "./App.css";
import HolidaysContainer from "./components/HolidaysContainer.js";
import SiteFooter from "./components/SiteFooter.js";
import EmailContainer from "./components/EmailContainer.js";
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
      <div style={style}>
        <HolidaysContainer />
        <EmailContainer />
        <SiteFooter />
      </div>
      </Router>
    );
  }
}

export default App;
