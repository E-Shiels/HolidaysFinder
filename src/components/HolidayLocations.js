import React from 'react'

const HolidayLocations = props => {
  const locations = props.locations;
  const holidayLocations = locations.map((location) =>
    <li key={location.id.toString()}>
    {location.name}
    </li>
  );
  return (
    <ul>{holidayLocations}</ul>
  )
}

export default HolidayLocations;
