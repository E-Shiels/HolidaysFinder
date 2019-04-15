import React from "react";

import { connect } from "react-redux";
import {
  emailNextStep,
  emailPrevStep
} from "../modules/actions/emailActions.js";

export default class EmailConfirm extends React.Component {
  handleNext = (event, email) => {
    event.preventDefault();
    this.props.dispatch(emailNextStep(this.props.step));
  };

  handleBack = (event) => {
    event.preventDefault();
    this.props.dispatch(emailPrevStep(this.props.step));
  };

  render() {
    const { email } = this.props;
    return (
      <React.Fragment>
        <h4>
          Sign up for our totally real email list to get totally not-fake
          emails.
        </h4>
        <p>{email}</p>
        <button type="button" onClick={this.handleBack}>
          Back
        </button>
        <button type="button" onClick={this.handleNext}>
          Confirm Email
        </button>
      </React.Fragment>
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
