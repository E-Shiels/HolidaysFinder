import React from "react";
import HolidayDescription from "./HolidayDescription";
import HolidayHeader from "./HolidayHeader";
import HolidayLocations from "./HolidayLocations";
import HolidayObservance from "./HolidayObservance";
import FavoriteButton from "./FavoriteButton.js";
import VoteButton from "./VoteButton.js";

import { connect } from "react-redux";
import { changeFavorite } from "../modules/actions/holidayActions.js";

export default class Holiday extends React.Component {
  updateHolidayFavoriteState = (favoriteStatus, id) => {
    this.props.dispatch(changeFavorite(favoriteStatus, id));
  };

  render() {
    return (
      <React.Fragment>
        <HolidayHeader date={this.props.date} name={this.props.name} />
        <HolidayDescription description={this.props.description} />
        <HolidayObservance observance={this.props.observance} />
        <HolidayLocations locations={this.props.locations} />
        <FavoriteButton
          favorite={this.props.favorite}
          id={this.props.id}
          updateHolidayFavoriteState={this.updateHolidayFavoriteState}
        />
        <VoteButton />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays.holidays,
    filteredHolidays: state.holidays.filteredHolidays
  };
};

export const ConnectedHoliday = connect(mapStateToProps)(Holiday);
