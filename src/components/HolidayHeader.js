import React from "react";

const HolidayHeader = (props) => (
  <h2>
    {props.date} - {props.name}
  </h2>
);

export default HolidayHeader;
