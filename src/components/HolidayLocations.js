import React from "react";
import HolidayLocation from "./HolidayLocation.js";
const uuidv4 = require("uuid/v4");

const HolidayLocations = props => {
  return function createHolidayLocations() {
    if (typeof props.locations == "undefined") {
      return "WAT";
    } else if (
      typeof props.locations === "string" ||
      props.locations.length === 1
    ) {
      return (
        <HolidayLocation location={{ name: props.locations }} />
      );
    } else {
      return props.locations.map(location => {
        return (
          <HolidayLocation key={uuidv4()} location={{ name: location.name }} />
        );
      });
    }
  }
};

export default HolidayLocations;
