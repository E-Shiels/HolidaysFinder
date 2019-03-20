import React from 'react'
import HolidayDescription from './HolidayDescription'
import HolidayHeader from './HolidayHeader'
import HolidayLocations from './HolidayLocations'

const Holiday = props => {
  return (
    <>
    <HolidayHeader date={props.date} name={props.name} />
    <HolidayDescription description={props.description} />
    <HolidayLocations locations={props.states} />
    </>
  )
}

export default Holiday
