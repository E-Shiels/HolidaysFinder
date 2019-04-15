import React from "react";

import { connect } from "react-redux";
import { ConnectedHoliday } from "./Holiday.js";
import {
  fetchHolidaysBegin,
  fetchFavoriteHolidaysSuccess,
  fetchHolidaysFailure
} from "../modules/actions/holidayActions.js";

export default class FavoriteHolidays extends React.Component {
  state = {
    favoriteHolidays: []
  };

  renderHolidays = () => {
    if (!this.props.favoriteHolidays.length) {
      return "You have no favorites.";
    } else {
      return this.props.favoriteHolidays.map(holiday => {
        let locationsList = [""];
        if (holiday.states.length === 1) {
          locationsList.push({
            name: holiday.states[0].name
          });
        } else if (holiday.states === "All") {
          locationsList.push({
            name: "Canada (All)"
          });
        } else {
          holiday.states.split(",").forEach(state => {
            locationsList.push({
              name: state.trim()
            });
          });
        }
        let observanceList = [];
        if (holiday.type.includes(",")) {
          holiday.type.split(", ").forEach(type => {
            observanceList.push(type.trim());
          });
        } else {
          observanceList.push(holiday.type);
        }

        return (
          <ConnectedHoliday
            key={holiday.id}
            id={holiday.id}
            date={holiday.date}
            name={holiday.name}
            observance={observanceList}
            description={holiday.description}
            locations={locationsList}
            favorite={holiday.favorite}
          />
        );
      });
    }
  }

  toHolidayObjectsFromJSON = data => {
    let holidaysArray = [];
    data.forEach(holiday => {
      if (holiday.favorite === true) {
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
      }
    });
    return holidaysArray;
  };

  componentDidMount() {
    this.props.dispatch(fetchHolidaysBegin());
    fetch("http://localhost:3000/api/v1/holidays")
      .then(this.handleErrors)
      .then(response => response.json())
      .then(json => {
        this.props.dispatch(
          fetchFavoriteHolidaysSuccess(this.toHolidayObjectsFromJSON(json))
        );
      })
      .catch(error => this.props.dispatch(fetchHolidaysFailure(error)));
  }

  render() {
    if (this.props.loading) {
      return "LOADING";
    } else {
      return this.renderHolidays();
    }
  }
}

const mapStateToProps = state => {
  return {
    holidays: state.holidays.holidays,
    loading: state.holidays.loading,
    favoriteHolidays: state.holidays.favoriteHolidays
  };
};

export const ConnectedFavoriteHolidays = connect(mapStateToProps)(
  FavoriteHolidays
);
