import React from "react";

const HolidayObservance = props => {
  if (props.observance.length > 1) {
    return <p>{props.observance.join(" - ")}</p>;
  } else {
    return <p>{props.observance}</p>;
  }
};

export default HolidayObservance;
