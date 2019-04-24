import React from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import { connect } from "react-redux";
import {
  emailNextStep,
  emailPrevStep,
  postEmail
} from "../modules/actions/emailActions.js";

export default class EmailConfirm extends React.Component {
  handleNext = (event, email) => {
    event.preventDefault();
    this.props.dispatch(emailNextStep(this.props.step));
    this.props.dispatch(postEmail(email));
  };

  handleBack = (event) => {
    event.preventDefault();
    this.props.dispatch(emailPrevStep(this.props.step));
  };

  render() {
    const { email } = this.props;
    return (
      <Paper>
        <Typography variant="h5" gutterBottom>
          Sign up for our totally real email list to get totally not-fake
          emails.
        </Typography>
        <Typography variant="body1">{email}</Typography>
        <Button variant="contained" type="button" onClick={this.handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={(event) => this.handleNext(event, email)}
        >
          Confirm Email
        </Button>
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

export const ConnectedEmailConfirm = connect(mapStateToProps)(EmailConfirm);
