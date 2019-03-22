import React, { Component } from 'react';
import './App.css';
import Holidays from './components/Holidays.js'
import LocationAndDateInput from './components/LocationAndDateInput.js'
import SiteFooter from './components/SiteFooter.js'
import EmailContainer from './components/EmailContainer.js'
let canadaHolidays = require('./data.json');

class App extends Component {
  render() {
        let style = {width: '90%'}
    return (
      <div style={style}>
      <LocationAndDateInput />
      <br></br>
      <br></br>
      <Holidays holidays={canadaHolidays.holidays}/>
      <EmailContainer />
      <SiteFooter />
      </div>
    );
  }
}

export default App;
