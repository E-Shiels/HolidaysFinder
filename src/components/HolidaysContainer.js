import React from "react";
import Holidays from "./Holidays.js";
import HolidaysFilters from "./HolidaysFilters.js";
import LocationAndDateInput from "./LocationAndDateInput.js";
import { connect } from "react-redux";
import {
  fetchHolidaysBegin,
  fetchHolidaysSuccess,
  fetchHolidaysFailure,
} from "../modules/actions/holidayActions.js";

export default class HolidaysContainer extends React.Component {
  toHolidayObjectsFromJSON = data => {
    let holidaysArray = [];
    data.forEach(holiday => {
      holidaysArray.push({
        id: holiday.id,
        name: holiday.name,
        description: holiday.description,
        date: holiday.date,
        type: holiday.holiday_type,
        locations: holiday.locations,
        states: holiday.states,
        favorite: holiday.favorite
      });
    });
    return holidaysArray;
  };

  handleErrors = response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  componentDidMount() {
    this.props.dispatch(fetchHolidaysBegin());
    fetch("http://localhost:3000/api/v1/holidays")
      .then(this.handleErrors)
      .then(response => response.json())
      .then(json => {
        this.props.dispatch(
          fetchHolidaysSuccess(this.toHolidayObjectsFromJSON(json))
        );
      })
      .catch(error => this.props.dispatch(fetchHolidaysFailure(error)));
  }

  render() {
    return (
      <>
        <LocationAndDateInput />
        <HolidaysFilters holidays={this.props.filteredHolidays} />
        <Holidays holidays={this.props.filteredHolidays} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    holidays: state.holidays.holidays,
    filteredHolidays: state.holidays.filteredHolidays,
    selectedLocation: state.holidays.selectedLocation,
    date: state.holidays.date
  };
};

export const ConnectedHolidaysContainer = connect(mapStateToProps)(
  HolidaysContainer
);
