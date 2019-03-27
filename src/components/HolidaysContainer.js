import React from 'react';
import Holidays from './Holidays.js';
import HolidaysFilters from './HolidaysFilters';

export default class HolidaysContainer extends React.Component {
  state = {
    holidaysData: [],
    filteredHolidays: [],
    observances: [],
  }

  toHolidayObjectsFromJSON = data => {
    let holidaysArray = [];
    data.forEach(holiday => {
      holidaysArray.push({
        name: holiday.name,
        description: holiday.description,
        date: holiday.date,
        type: holiday.holiday_type,
        locations: holiday.locations,
        states: holiday.states
      });
    });
    return holidaysArray;
  }
getListOfObservanceTypes = data => {
    let observanceList = [];
    if (this.state.holidaysData !== []) {
      this.state.holidaysData.forEach(holiday => {
        if (holiday.type.includes(",")) {
          holiday.type.split(',').forEach(type => {
            let trimmedType = type.trim();
            if (!observanceList.includes(trimmedType)) {
              observanceList.push(trimmedType);
            }
          })
        } else {
          if (!observanceList.includes(holiday.type)) {
            observanceList.push(holiday.type);
          }
        }
      })
    }
    return observanceList;
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/holidays')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        holidaysData: this.toHolidayObjectsFromJSON(data)
      });
    });
  }

  render() {
    return(
      <>
      <HolidaysFilters filters={this.getListOfObservanceTypes(this.state.holidaysData)}/>
      <Holidays holidays={this.state.holidaysData} />
      </>
    )
  }
}
