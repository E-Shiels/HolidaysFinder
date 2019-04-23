import React from "react";
import { Typography } from "@material-ui/core"

const HolidayObservance = (props) => {
  if (props.observance.length > 1) {
    return <Typography variant="body1">{props.observance.join(" - ")}</Typography>;
  } else {
    return <Typography variant="body1">{props.observance}</Typography>;
  }
};

export default HolidayObservance;
