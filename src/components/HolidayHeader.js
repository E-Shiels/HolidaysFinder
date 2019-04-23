import React from "react";
import { Typography } from "@material-ui/core"

const HolidayHeader = (props) => (
  <Typography variant="h4">
    {props.date} - {props.name}
  </Typography>
);

export default HolidayHeader;
