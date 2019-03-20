import React from 'react'
import Holiday from './Holiday.js'

export default class Holidays extends React.Component {

renderHolidays = (props) => {
      return this.props.holidays.map(holiday => {
        let locations = [];
        if (holiday.states.length === 3 || holiday.states.length === 1) {
         locations = holiday.states[0].name
       } else {
         locations = holiday.states.forEach(
          locations.push(this.name)
        )
        }
        debugger;
        return (
          <Holiday date={holiday.date.iso}
                 name={holiday.name}
                 observance={holiday.type.toString()}
                 description={holiday.description}
                 locations={locations} />
        )
      })
    }

render() {
  return(this.renderHolidays())
}
}
