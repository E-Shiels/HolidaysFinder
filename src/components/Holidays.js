import React from 'react'
import Holiday from './Holiday.js'

export default class Holidays extends React.Component {
  renderHolidays = (props) => {
    if (this.props.holidays[0] === "No results") {
      return (
        <div>
        <p> There are no holidays matching those terms.</p>
        </div>
      )
    } else {
      return this.props.holidays.map(holiday => {

        let locationsList = [""];
        if (holiday.states.length === 1) {
          locationsList.push({
            name: holiday.states[0].name
          })
        } else if (holiday.states === "All") {
          locationsList.push({
            name: "Canada (All)"
          })
        } else {
          holiday.states.split(",").forEach((state) => {
            locationsList.push({
              name: state.name
            })
          })
        }
        let observanceList = [];
        if (holiday.type.includes(",")) {
          holiday.type.split(", ").forEach(type => {
            observanceList.push(type.strip)
          })
        } else {
          observanceList.push(holiday.type)
        }
      //  debugger
        return ( <
          Holiday key = { holiday.id }
          id = { holiday.id }
          date = { holiday.date }
          name = { holiday.name }
          observance = { observanceList }
          description = { holiday.description }
          locations = { locationsList }
          favorite = {holiday.favorite}
          />
        )
      })
    }
  }

  render() {
    return (this.renderHolidays())
  }
}
