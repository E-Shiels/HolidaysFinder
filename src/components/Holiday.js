import React from 'react'
import HolidayDescription from './HolidayDescription'
import HolidayHeader from './HolidayHeader'
import HolidayLocations from './HolidayLocations'
import HolidayObservance from './HolidayObservance'
import FavoriteButton from './FavoriteButton.js';

export default class Holiday extends React.Component {
  updateHolidayFavoriteState = () => {
    console.log("CHANGED")
  }
  render() {
  return (
    <>
    <HolidayHeader date={this.props.date} name={this.props.name} />
    <HolidayDescription description={this.props.description} />
    <HolidayObservance observance={this.props.observance} />
    <HolidayLocations locations={this.props.locations} />
    <FavoriteButton favorite={this.props.favorite} changeDatabase={this.updateHolidayFavoriteState}/>
    </>
  )
}
}
