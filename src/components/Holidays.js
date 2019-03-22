import React from 'react'
import Holiday from './Holiday.js'
const uuidv4 = require('uuid/v4')
export default class Holidays extends React.Component {
renderHolidays = (props) => {

      return this.props.holidays.map(holiday => {

        let locationsList = [""];
        if (holiday.states.length === 1) {
          locationsList.push({
            id: holiday.name,
            name: holiday.states[0].name
          })
        } else if (holiday.states === "All") {
          locationsList.push({
            id: holiday.name,
            name: holiday.states
          })
        } else {
          holiday.states.forEach((state) => {
            locationsList.push({
              id: state.id,
              name: state.name
            })
          })
        }
        let observanceList = [];
        if (holiday.type.length === 1) {
          observanceList.push(holiday.type)
        } else {holiday.type.forEach((type) => {
          observanceList.push(type)
        })}

        return (
          <Holiday key={uuidv4()}
                 date={holiday.date.iso}
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
