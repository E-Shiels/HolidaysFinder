import React from 'react'
import HolidayDescription from './HolidayDescription'
import HolidayHeader from './HolidayHeader'
import HolidayLocations from './HolidayLocations'
import HolidayObservance from './HolidayObservance'

const Holiday = props => {
  return (
    <>
    <HolidayHeader date={props.date} name={props.name} />
    <HolidayDescription description={props.description} />
    <HolidayObservance observance={props.observance} />
    <HolidayLocations locations={props.locations} />
    </>
  )
}

export default Holiday
