import React from "react";
import { Typography } from "@material-ui/core";

const HolidayDescription = (props) => {
  return <Typography variant="body1">{props.description}</Typography>;
};

export default HolidayDescription;
