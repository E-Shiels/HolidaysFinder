import React, { Component } from 'react';
import './App.css';
import Holidays from './components/Holidays.js'
import LocationAndDateInput from './components/LocationAndDateInput.js'
import SiteFooter from './components/SiteFooter.js'
let canadaHolidays = require('./data.json');

class App extends Component {
  render() {
    return (
      <div>
      <LocationAndDateInput />
      <br></br>
      <br></br>
      <Holidays holidays={canadaHolidays.holidays}/>
      <SiteFooter />
      </div>
    );
  }
}

export default App;
