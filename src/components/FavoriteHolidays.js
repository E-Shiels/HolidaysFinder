import React from "react";
import { Divider } from "@material-ui/core"
import { connect } from "react-redux";
import { ConnectedHoliday } from "./Holiday.js";
import {
  fetchHolidays,
  fetchSuccess
} from "../modules/actions/holidayActions.js";

import { buildHolidayObject } from "./HolidaysContainer.js";

export default class FavoriteHolidays extends React.Component {
  state = {
    favoriteHolidays: []
  };

  renderHolidays = () => {
    if (!this.props.favoriteHolidays.length) {
      return "You have no favorites.";
    } else {
      return this.props.favoriteHolidays.map((holiday) => {
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
          holiday.states.split(",").forEach((state) => {
            locationsList.push({
              name: state.trim()
            });
          });
        }
        let observanceList = [];
        if (holiday.type.includes(",")) {
          holiday.type.split(", ").forEach((type) => {
            observanceList.push(type.trim());
          });
        } else {
          observanceList.push(holiday.type);
        }

        return (
          <React.Fragment>
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
          <Divider />
          </React.Fragment>
        );
      });
    }
  }

  toHolidayObjectsFromJSON = (data) => {
    let holidaysArray = [];
    data.forEach((holiday) => {
      if (holiday.favorite === true) {
        holidaysArray.push(buildHolidayObject(holiday));
      }
    });
    return holidaysArray;
  };

  componentDidMount() {
    this.props.dispatch(fetchHolidays()).then(resp => {
      this.props.dispatch(fetchSuccess("favoriteHolidays",
      this.toHolidayObjectsFromJSON(resp)));
    })
  }

  render() {
    if (this.props.loading) {
      return "LOADING";
    } else {
      return this.renderHolidays();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays.holidays,
    loading: state.holidays.loading,
    favoriteHolidays: state.holidays.favoriteHolidays
  };
};

export const ConnectedFavoriteHolidays = connect(mapStateToProps)(
  FavoriteHolidays
);
