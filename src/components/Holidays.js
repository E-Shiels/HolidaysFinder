import React from 'react'
import Holiday from './Holiday.js'
const uuidv4 = require('uuid/v4')
export default class Holidays extends React.Component {
renderHolidays = (props) => {

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

        return (
          <Holiday
              key={uuidv4()}
              date={holiday.date}
              name={holiday.name}
              observance={observanceList}
              description={holiday.description}
              locations={locationsList} />
        )
      })
    }

render() {
  return(this.renderHolidays())
}
}
