import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <h2>Find holidays in </h2>
      <select>
      <option>All</option>
      <option>Ontario</option>
      <option>Quebec</option>
      <option>Manitoba</option>
      <option>Prince Edward Island</option>
      </select>
      <h3>On</h3>
      <input type="date"/>
      <br></br>
      <input type="submit"/>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <h5>Holiday Date - Holiday Name</h5>
      <p>Description</p>
      <p>Observance</p>
      <p>Locations</p>
      </div>
      <br></br>
      <div>
      <h5>Holiday Date - Holiday Name</h5>
      <p>Description</p>
      <p>Observance</p>
      <p>Locations</p>
      </div>
      </div>

    );
  }
}

export default App;
