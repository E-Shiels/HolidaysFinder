import React from "react";

import Picky from "react-picky";
import "react-picky/dist/picky.css";
import equal from "fast-deep-equal";

import { connect } from "react-redux";
import {
  updateObservanceFilters,
  updateObservanceFilteredHolidays
} from "../modules/actions/holidayActions.js";

export default class HolidaysObservanceFilters extends React.Component {
  state = {
    observances: [],
    arrayValue: []
  };

  getListOfObservanceTypes = data => {
    let observanceList = [];
    if (data[0] !== "No results") {
      if (data !== []) {
        data.forEach(holiday => {
          if (holiday.type.includes(",")) {
            holiday.type.split(",").forEach(type => {
              let trimmedType = type.trim();
              if (!observanceList.includes(trimmedType)) {
                observanceList.push(trimmedType);
              }
            });
          } else {
            if (!observanceList.includes(holiday.type)) {
              observanceList.push(holiday.type);
            }
          }
        });
      }
    }
    this.setState({
      observances: observanceList
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(updateObservanceFilters(this.state.arrayValue));
    setTimeout(() => {
      this.props.dispatch(
        updateObservanceFilteredHolidays(this.props.observances.length)
      );
    });
  };

  selectMultipleOption = value => {
    this.setState({ arrayValue: value });
  };

  returnObservanceFilterPicker = data => {
    if (!data.length) {
      return "";
    } else {
      return (
        <div>
          <h4>Filter by Observance Type</h4>
          <form onSubmit={this.handleSubmit}>
            <Picky
              options={this.state.observances}
              value={this.state.arrayValue}
              onChange={this.selectMultipleOption}
              placeholder={"All"}
              numberDisplayed={5}
              includeSelectAll={true}
              includeFilter={true}
              multiple={true}
              keepOpen={true}
            />
            <input type="submit" value="Apply Filters" />
          </form>
        </div>
      );
    }
  };

  componentDidUpdate(prevProps) {
    if (!equal(this.props.holidays, prevProps.holidays)) {
      this.getListOfObservanceTypes(this.props.holidays);
      this.setState({
        arrayValue: []
      });
    }
  }

  render() {
    return this.returnObservanceFilterPicker(this.state.observances);
  }
}

const mapStateToProps = (state) => {
  return {
    filteredHolidays: state.holidays.filteredHolidays,
    observanceFilteredHolidays: state.holidays.observanceFilteredHolidays,
    observances: state.holidays.observances,
    observanceFilters: state.holidays.observanceFilters
  };
};

export const ConnectedHolidaysObservanceFilters = connect(mapStateToProps)(
  HolidaysObservanceFilters
);
