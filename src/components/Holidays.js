import React from "react";

import { ConnectedHoliday } from "./Holiday.js";

import { connect } from "react-redux";

import { Divider } from "@material-ui/core";

var humanizeList = require('humanize-list')

export default class Holidays extends React.Component {
  renderHolidays = () => {
    if (this.props.holidays[0] === "No results") {
      const date = new Date(this.props.holidays[1]);
      const correctDate = new Date(date.setDate(date.getDate() + 1));
      const readableDate = correctDate.toDateString();

      const locationsDictionary = {
        all: "Canada (All)",
        AB: "Alberta",
        BC: "British Columbia",
        MB: "Manitoba",
        NB: "New Brunswick",
        NL: "Newfoundland and Labrador",
        NS: "Nova Scotia",
        NT: "Northwest Territories",
        NU: "Nunavut",
        ON: "Ontario",
        PE: "Prince Edward Island",
        QC: "Quebec",
        SK: "Saskatchewan",
        YT: "Yukon"
      };

      return (
        <div>
          <p>
            {" "}
            There are no holidays on {readableDate} in{" "}

            {humanizeList(this.props.selectedLocation
              .map((location) => {
                return locationsDictionary[location];
              }), {oxfordComma: true, conjunction: "or"}
            )
                || "Canada (All)"}
            .{" "}
          </p>
        </div>
      );
    } else {
      return this.props.holidays.map((holiday) => {
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
            <Divider />
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
          </React.Fragment>
        );
      });
    }
  };

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
    selectedLocation: state.holidays.selectedLocation,
    loading: state.holidays.loading
  };
};

export const ConnectedHolidays = connect(mapStateToProps)(Holidays);
