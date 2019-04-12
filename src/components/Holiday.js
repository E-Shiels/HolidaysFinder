import React from "react";
import HolidayDescription from "./HolidayDescription";
import HolidayHeader from "./HolidayHeader";
import HolidayLocations from "./HolidayLocations";
import HolidayObservance from "./HolidayObservance";
import FavoriteButton from "./FavoriteButton.js";

import { connect } from "react-redux";
import { changeFavorite } from "../modules/actions/holidayActions.js";

export default class Holiday extends React.Component {
  updateHolidayFavoriteState = (favoriteStatus, id) => {
    fetch(`http://localhost:3000/api/v1/holidays/${id}.json`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        holiday: {
          favorite: favoriteStatus 
        }
      })
    })
      .then(res => res.json())
      .then(this.props.dispatch(changeFavorite(id, favoriteStatus)));
  };

  render() {
    return (
      <>
        <HolidayHeader date={this.props.date} name={this.props.name} />
        <HolidayDescription description={this.props.description} />
        <HolidayObservance observance={this.props.observance} />
        <HolidayLocations locations={this.props.locations} />
        <FavoriteButton
          favorite={this.props.favorite}
          id={this.props.id}
          updateHolidayFavoriteState={this.updateHolidayFavoriteState}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    holidays: state.holidays.holidays,
    filteredHolidays: state.holidays.filteredHolidays
  };
};

export const ConnectedHoliday = connect(mapStateToProps)(Holiday);
