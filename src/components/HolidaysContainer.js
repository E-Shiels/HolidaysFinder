import React from "react";
import Holidays from "./Holidays.js";
import HolidaysFilters from "./HolidaysFilters.js";
import LocationAndDateInput from "./LocationAndDateInput.js";

export default class HolidaysContainer extends React.Component {
  state = {
    holidaysData: [],
    filteredHolidays: [],
    observances: [],
  }

  toHolidayObjectsFromJSON = data => {
    let holidaysArray = [];
    data.forEach(holiday => {
      holidaysArray.push({
        name: holiday.name,
        description: holiday.description,
        date: holiday.date,
        type: holiday.holiday_type,
        locations: holiday.locations,
        states: holiday.states
      });
    });
    return holidaysArray;
  }

getListOfObservanceTypes = data => {
    let observanceList = [];
    if (this.state.holidaysData !== []) {
      this.state.holidaysData.forEach(holiday => {
        if (holiday.type.includes(",")) {
          holiday.type.split(',').forEach(type => {
            let trimmedType = type.trim();
            if (!observanceList.includes(trimmedType)) {
              observanceList.push(trimmedType);
            }
          })
        } else {
          if (!observanceList.includes(holiday.type)) {
            observanceList.push(holiday.type);
          }
        }
      })
    }
    return observanceList;
  }

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
            [holiday.locations].some(
              location => searchTerms.locations.indexOf(location) >= 0
            ))
        ) {
          newHolidays.push(holiday);
        }
      });
    }

    if (!Array.isArray(newHolidays) || !newHolidays.length) {
      newHolidays.push("No results");
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
        console.log(data);
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
