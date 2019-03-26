import React from 'react'
import Holidays from './Holidays.js'
import HolidaysFilters from './HolidaysFilters'

export default class HolidaysContainer extends React.Component {
  state = {
    holidaysData: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/holidays')
    .then(response => response.json())
    .then(data => {
      debugger
      this.setState({
        holidaysData: data
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
