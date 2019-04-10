import React from "react";
import equal from "fast-deep-equal";
import { connect } from "react-redux";
import {
  changeFavoriteFilter,
  setFavoriteHolidays
} from "../modules/actions/holidayActions.js";

export default class HolidaysFavoriteFilter extends React.Component {
  getListOfFavoriteHolidays = () => {
    this.props.dispatch(setFavoriteHolidays(this.props.filteredHolidays.map((holiday => {
      if (holiday.favorite === 1) {
        return holiday
      }
    }))))
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props.filteredHolidays, prevProps.filteredHolidays)) {

    }
  }

  render() {
    return (
      ""
    )
  }
}

const mapStateToProps = state => {
  return {
    holidays: state.holidays.holidays,
    filteredHolidays: state.holidays.filteredHolidays,
    favoriteFilter: state.holidays.favoriteFilter,
    favoriteHolidays: state.holidays.favoriteHolidays,
  };
};

export const ConnectedHolidaysFavoriteFilter = connect(mapStateToProps)(
  HolidaysFavoriteFilter
);
