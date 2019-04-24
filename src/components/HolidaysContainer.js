import React from "react";

import { ConnectedHolidays } from "./Holidays.js";
import { ConnectedHolidaysObservanceFilters } from "./HolidaysObservanceFilters.js";
import { ConnectedLocationAndDateInput } from "./LocationAndDateInput.js";

import { connect } from "react-redux";
import {
  fetchHolidays,
  fetchSuccess
} from "../modules/actions/holidayActions.js";

export function buildHolidayObject(holiday) {
  return {
    id: holiday.id,
    name: holiday.name,
    description: holiday.description,
    date: holiday.date,
    type: holiday.holiday_type,
    locations: holiday.locations,
    states: holiday.states,
    favorite: holiday.favorite
  };
}

export default class HolidaysContainer extends React.Component {
  toHolidayObjectsFromJSON = (data) => {
    let holidaysArray = [];
    data.forEach((holiday) => {
      holidaysArray.push(buildHolidayObject(holiday));
    });
    return holidaysArray;
  };

  componentDidMount() {
    this.props.dispatch(fetchHolidays()).then(resp => {
      this.props.dispatch(
        fetchSuccess("holidays", this.toHolidayObjectsFromJSON(resp))
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <ConnectedLocationAndDateInput />
        <ConnectedHolidaysObservanceFilters
          holidays={this.props.filteredHolidays}
        />
        <ConnectedHolidays
          holidays={
            this.props.observanceFilteredHolidays || this.props.filteredHolidays
          }
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays.holidays,
    filteredHolidays: state.holidays.filteredHolidays,
    observanceFilteredHolidays: state.holidays.observanceFilteredHolidays,
    selectedLocation: state.holidays.selectedLocation,
    date: state.holidays.date
  };
};

export const ConnectedHolidaysContainer = connect(mapStateToProps)(
  HolidaysContainer
);
