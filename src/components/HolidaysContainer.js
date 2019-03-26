import React from 'react'
import Holidays from './Holidays.js'
import HolidaysFilters from './HolidaysFilters'

export default class HolidaysContainer extends React.Component {
  state = {
    holidaysData: []
  }

  toHolidayObjectsFromJSON(data) {
    let holidaysArray = [];
    data.forEach(holiday => {
      holidaysArray.push({
        name: holiday.name,
        description: holiday.description,
        date: holiday.date,
        type: holiday.holiday_type,
        locations: holiday.locations,
        states: holiday.states
      })
    })
    return holidaysArray
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/holidays')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        holidaysData: this.toHolidayObjectsFromJSON(data)
      })
    })
  }

  render() {
    return(
      <>
      <HolidaysFilters />
      <Holidays holidays={this.state.holidaysData}/>
      </>
    )
  }
}
