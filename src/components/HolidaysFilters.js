import React from "react";
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import equal from "fast-deep-equal";

export default class HolidaysFilters extends React.Component {
  state = {
    observances: []
  };

  getListOfObservanceTypes = data => {
    let observanceList = [];
    if (data[0] === "No results") {
      
    } else {
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

  returnObservanceFilterPicker = data => {
    //debugger
    if (!data.length) {
      return "";
    } else {
      return (
        <div>
          <h4>Filter by Observance Type</h4>
          <Picky options={this.state.observances} />
        </div>
      );
    }
  };

  componentDidUpdate(prevProps) {
    if (!equal(this.props.holidays, prevProps.holidays)) {
      this.getListOfObservanceTypes(this.props.holidays);
    }
  }

  render() {
    return this.returnObservanceFilterPicker(this.state.observances);
  }
}
