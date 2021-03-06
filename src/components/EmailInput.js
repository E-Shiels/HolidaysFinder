import React from "react";
import { Typography, Paper, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { emailNextStep, emailChange } from "../modules/actions/emailActions.js";
import Notifier, { openSnackbar } from "./AlertSnackbar.js";

const validator = require("email-validator");

export default class EmailInput extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    if (validator.validate(event.target[0].value)) {
      this.props.dispatch(emailNextStep(this.props.step));
      this.props.dispatch(emailChange(event.target[0].value));
    } else {
      openSnackbar({message: "The email address provided is invalid."});
    }
  };

  render() {
    const { email } = this.props;
    return (
      <Paper>
      <Notifier />
      <form onSubmit={this.handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Sign up for our totally real email list to get totally real emails.
        </Typography>
        <TextField
          label="Email"
          defaultValue={email}
          id="email"
          placeholder="yourEmail@email.com"
          />
        <Button variant="contained" type="submit">Submit Email</Button>
      </form>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.email.step,
    email: state.email.email
  };
};

export const ConnectedEmailInput = connect(mapStateToProps)(EmailInput);
