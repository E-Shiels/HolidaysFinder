import React, { Component } from 'react';
import './App.css';
import Holidays from './components/Holidays.js'

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
      <br></br>
      <Holidays holidays={[{
          "name": "New Year's Day",
          "description": "New Year's Day is the first day of the Gregorian calendar, which is widely used in many countries such as the USA.",
          "date": {
              "iso": "2019-01-01",
              "datetime": {
                  "year": 2019,
                  "month": 1,
                  "day": 1
              }
          },
          "type": [
              "National holiday"
          ],
          "locations": "All",
          "states": "All"
      },
      {
          "name": "World Braille Day",
          "description": "World Braille Day celebrates the life and achievements of Louis Braille, who invented the braille code for the visually impaired.",
          "date": {
              "iso": "2019-01-04",
              "datetime": {
                  "year": 2019,
                  "month": 1,
                  "day": 4
              }
          },
          "type": [
              "Worldwide observance"
          ],
          "locations": "All",
          "states": "All"
      },
      {
          "name": "Robert E. Lee's Birthday",
          "description": "Robert E. Lee’s birthday is an annual official state holiday that is shared with Martin Luther King’s birthday in some parts of the US.",
          "date": {
              "iso": "2019-01-19",
              "datetime": {
                  "year": 2019,
                  "month": 1,
                  "day": 19
              }
          },
          "type": [
              "Local holiday"
          ],
          "locations": "FL",
          "states": [
              {
                  "id": 12,
                  "abbrev": "FL",
                  "name": "Florida",
                  "exception": null,
                  "iso": "us-fl"
              }
          ]
      }]}/>
      </div>

    );
  }
}

export default App;
