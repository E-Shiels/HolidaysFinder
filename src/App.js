import React, { Component } from 'react';
import './App.css';
import Holidays from './components/Holidays.js'
import LocationAndDateInput from './components/LocationAndDateInput.js'


class App extends Component {
  render() {
    return (
      <div>
      <LocationAndDateInput />
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
      },
      {
          "name": "Lincoln's Birthday",
          "description": "Lincoln’s Birthday is observed in the United States in honor of Abraham Lincoln, who was the nation’s 16th president and was known as the Great Emancipator.",
          "date": {
              "iso": "2019-02-12",
              "datetime": {
                  "year": 2019,
                  "month": 2,
                  "day": 12
              }
          },
          "type": [
              "Local holiday"
          ],
          "locations": "CT, IL, NY, MO",
          "states": [
              {
                  "id": 9,
                  "abbrev": "CT",
                  "name": "Connecticut",
                  "exception": null,
                  "iso": "us-ct"
              },
              {
                  "id": 16,
                  "abbrev": "IL",
                  "name": "Illinois",
                  "exception": null,
                  "iso": "us-il"
              },
              {
                  "id": 36,
                  "abbrev": "NY",
                  "name": "New York",
                  "exception": null,
                  "iso": "us-ny"
              },
              {
                  "id": 29,
                  "abbrev": "MO",
                  "name": "Missouri",
                  "exception": null,
                  "iso": "us-mo"
              }
          ]
      },
      {
          "name": "World Cancer Day",
          "description": "World Cancer Day is an annual global event on February 4 to raise people’s awareness of cancer.",
          "date": {
              "iso": "2019-02-04",
              "datetime": {
                  "year": 2019,
                  "month": 2,
                  "day": 4
              }
          },
          "type": [
              "United Nations observance", "TESTTESTTEST"
          ],
          "locations": "All",
          "states": "All"
      }]}/>
      </div>
    );
  }
}

export default App;
