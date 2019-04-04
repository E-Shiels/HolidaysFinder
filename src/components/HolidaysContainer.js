import React from "react";
import Holidays from "./Holidays.js";
import HolidaysFilters from "./HolidaysFilters.js";
import LocationAndDateInput from "./LocationAndDateInput.js";
import { connect } from 'react-redux';
import { fetchHolidaysBegin, fetchHolidaysSuccess, fetchHolidaysFailure } from '../modules/actions/holidayDataFetchingActions.js'

export default class HolidaysContainer extends React.Component {
  state = {
    holidaysData: [],
    filteredHolidays: []
  };

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

  applySearchAndGetData = searchTerms => {
    this.setState({
      filteredHolidays: []
    });
    let data = this.state.holidaysData;
    let newHolidays = [];
    if (
      searchTerms.locations === "All" ||
      searchTerms.locations === "ALL" ||
      searchTerms.locations.includes("all") ||
      !searchTerms.locations.length
    ) {
      data.forEach(holiday => {
        if (holiday.date === searchTerms.date || searchTerms.date === "All") {
          newHolidays.push(holiday);
        }
      });
    } else {
      data.forEach(holiday => {
        if (
          (holiday.date === searchTerms.date || searchTerms.date === "All") &&
          (holiday.locations === "All" ||
            holiday.locations
              .split(", ")
              .some(location => searchTerms.locations.includes(location)))
        ) {
          newHolidays.push(holiday);
        }
      });
    }

    if (!Array.isArray(newHolidays) || !newHolidays.length) {
      newHolidays.push("No results");
      newHolidays.push(searchTerms.date);
    }
    if (
      (!searchTerms.locations ||
        searchTerms.locations[0] === "Canada (All)" ||
        !searchTerms.locations.length) &&
      (searchTerms.date === "All" || searchTerms.date === "ALL")
    ) {
      this.setState({
        filteredHolidays: this.state.holidaysData
      });
    } else {
      this.setState({
        filteredHolidays: newHolidays
      });
    }
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/holidays")
      .then(response => response.json())
      .then(data => {
        this.setState({
          holidaysData: this.toHolidayObjectsFromJSON(data)
        });
      });
  }

  render() {
    return (
      <>
        <LocationAndDateInput getData={this.applySearchAndGetData} />
        <HolidaysFilters holidays={this.state.filteredHolidays} />
        <Holidays holidays={this.state.filteredHolidays} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays.holidays,
    filteredHolidays: state.holidays.filteredHolidays
  }
}

export const ConnectedHolidaysContainer = connect(mapStateToProps)(HolidaysContainer)
