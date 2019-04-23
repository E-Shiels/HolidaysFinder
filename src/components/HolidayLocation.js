import React from "react";
import { Typography } from "@material-ui/core"

const HolidayLocation = (props) => {
  return (
    <Typography variant="body1">{props.location.name}</Typography>
  )
};

export default HolidayLocation;
