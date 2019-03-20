import React from 'react'
import HolidayLocation from './HolidayLocation.js'

const HolidayLocations = props => {
  function createHolidayLocations() {
    if (typeof props.locations == "undefined") {
      return "WHAT"
    } else if (typeof props.locations === "string" || props.locations.length === 1) {
    return <HolidayLocation location={{name: props.locations}} />
  } else {
      return props.locations.map((location) => {
      return <HolidayLocation location={{name: location.name}}/>
    })
  }}
  return (
    createHolidayLocations()
  )
}

export default HolidayLocations;
