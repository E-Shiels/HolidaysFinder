import React from "react";
import { Typography, Button, Paper } from "@material-ui/core";

import Select from "react-select";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import { connect } from "react-redux";
import {
  setFilteredHolidays,
  setLocation,
  setDate,
  resetObservanceFilteredHolidaysAndFilters
} from "../modules/actions/holidayActions.js";

const locationOptions = [
  { value: "all", label: "Canada (All)" },
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "QC", label: "Quebec" },
  { value: "SK", label: "Saskatchewan" },
  { value: "YT", label: "Yukon" }
];

export default class LocationAndDateInput extends React.Component {
  state = {
    focused: false,
    date: null,
    selectedLocation: []
  };

  handleLocationChange = selectedLocation => {
    this.setState({ selectedLocation });
  };

  setLocationAndDate = event => {
    let formLocations = [];
    if (
      this.state.selectedLocation === null ||
      this.state.selectedLocation === "Canada (All)"
    ) {
      formLocations = ["Canada (All)"];
    } else {
      formLocations = this.state.selectedLocation.map(location => {
        return location.value;
      });
    }
    this.props.dispatch(setLocation(formLocations));

    let formDate =
      this.state.date === null
        ? "All"
        : new Date(this.state.date).toISOString().substr(0, 10); //remove time information

    this.props.dispatch(setDate(formDate));

    this.setState({
      focused: false
    });
  };

  dateIsPropsDateOrAll = (holidayDate, propsDate) => {
    return holidayDate === propsDate || propsDate === "All";
  };

  applySearchAndGetData = () => {
    let data = this.props.holidays;
    let newHolidays = [];

    if (
      this.props.selectedLocation.includes("all") ||
      !this.props.selectedLocation.length
    ) {
      data.forEach(holiday => {
        if (this.dateIsPropsDateOrAll(holiday.date, this.props.date)) {
          newHolidays.push(holiday);
        }
      });
    } else {
      data.forEach(holiday => {
        if (
          this.dateIsPropsDateOrAll(holiday.date, this.props.date) &&
          (holiday.locations === "All" ||
            holiday.locations
              .split(", ")
              .some(location => this.props.selectedLocation.includes(location)))
        ) {
          newHolidays.push(holiday);
        }
      });
    }

    if (!Array.isArray(newHolidays) || !newHolidays.length) {
      newHolidays.push("No results");
      newHolidays.push(this.props.date);
    }
    if (
      (!this.props.selectedLocation ||
        this.props.selectedLocation[0] === "Canada (All)" ||
        !this.props.selectedLocation.length) &&
      this.props.date === "All"
    ) {
      this.props.dispatch(setFilteredHolidays(this.props.holidays));
    } else {
      this.props.dispatch(setFilteredHolidays(newHolidays));
    }
    this.props.dispatch(resetObservanceFilteredHolidaysAndFilters());
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setLocationAndDate(event);
    setTimeout(() => {
      this.applySearchAndGetData();
    }, 100);
    //I have to use this method because setLocationAndDate dispatches 2 actions, so I can't return a Promise from the action,and no other method I can find has worked
  };

  render() {
    return (
      <Paper>
        <Typography variant="h4" gutterBottom>
          Find holidays in{" "}
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <Select
            value={this.state.selectedLocation}
            onChange={this.handleLocationChange}
            options={locationOptions}
            isMulti
          />
          <Typography variant="h4" gutterBottom>
            On
          </Typography>
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id="date_input" // PropTypes.string.isRequired,
            showClearDate
            reopenPickerOnClearDate
            enableOutsideDays
            isOutsideRange={() => false}
          />
          <br />
          <Button variant="contained" type="submit">
            SEARCH
          </Button>
        </form>
      </Paper>
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

export const ConnectedLocationAndDateInput = connect(mapStateToProps)(
  LocationAndDateInput
);
