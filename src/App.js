import React, { Component } from 'react';
import './App.css';
import HolidaysContainer from './components/HolidaysContainer.js'
import LocationAndDateInput from './components/LocationAndDateInput.js'
import SiteFooter from './components/SiteFooter.js'
import EmailContainer from './components/EmailContainer.js'
// let canadaHolidays = require('./data.json');

class App extends Component {
  render() {
        let style = {width: '90%'}
    return (
      <div style={style}>
      <LocationAndDateInput />
      <HolidaysContainer />
      <EmailContainer />
      <SiteFooter />
      </div>
    );
  }
}

export default App;
