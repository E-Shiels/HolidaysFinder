import React from 'react'
import HolidayDescription from './HolidayDescription'
import HolidayHeader from './HolidayHeader'
import HolidayLocations from './HolidayLocations'
import HolidayObservance from './HolidayObservance'
import FavoriteButton from './FavoriteButton.js';

export default class Holiday extends React.Component {
  updateHolidayFavoriteState = (favoriteStatus) => {
    fetch(`http://localhost:3000/api/v1/holidays/${this.props.id}.json`,
    {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application-json',
      },
      body: JSON.stringify(favoriteStatus)
    }
  ).then(res => res.json())
  }

  render() {
  return (
    <>
    <HolidayHeader date={this.props.date} name={this.props.name} />
    <HolidayDescription description={this.props.description} />
    <HolidayObservance observance={this.props.observance} />
    <HolidayLocations locations={this.props.locations} />
    <FavoriteButton favorite={this.props.favorite} updateHolidayFavoriteState={this.updateHolidayFavoriteState}/>
    </>
  )
}
}
