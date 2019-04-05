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
