import React from "react";
import { Typography, Paper } from "@material-ui/core"
import { connect } from "react-redux";

export default class EmailSuccess extends React.Component {
  render() {
    return (
<Paper>
      <Typography variant="h5" gutterBottom>{this.props.message}</Typography>
</Paper>
)
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.email.message
  };
};

export const ConnectedEmailSuccess = connect(mapStateToProps)(EmailSuccess);
