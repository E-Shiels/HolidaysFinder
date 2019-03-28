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
    if (this.props.holidays !== []) {
      this.props.holidays.forEach(holiday => {
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
    this.setState({
      observances: observanceList
    });
  };


  componentDidUpdate(prevProps) {
    if (!equal(this.props.holidays, prevProps.holidays)) {
      this.getListOfObservanceTypes();
    }
  }

  returnObservanceFilterPicker() {
    if () {<Picky
      options={this.state.observances}
    />}
  }

  render() {
    return(

    )
  }
}
