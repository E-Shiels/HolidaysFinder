import React from 'react'
import Holiday from './Holiday.js'
const uuidv4 = require('uuid/v4')
export default class Holidays extends React.Component {
renderHolidays = (props) => {

      return this.props.holidays.map(holiday => {
        let locationsList = [""];
        if (holiday.states.length === 1) {
         locationsList.push({id: holiday.name, name: holiday.states[0].name})
       } else if (holiday.states === "All") {
         locationsList.push({id: holiday.name, name: holiday.states})
       } else {
         holiday.states.forEach(function(state) {
          locationsList.push({id: state.id, name: state.name})}
        )
        }
        return (
          <Holiday key={uuidv4()}
                 date={holiday.date.iso}
                 name={holiday.name}
                 observance={holiday.type.toString()}
                 description={holiday.description}
                 locations={locationsList} />
        )
      })
    }

render() {
  return(this.renderHolidays())
}
}
