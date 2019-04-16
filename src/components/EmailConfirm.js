import React from "react";

import { connect } from "react-redux";
import {
  emailNextStep,
  emailPrevStep
} from "../modules/actions/emailActions.js";

export default class EmailConfirm extends React.Component {

  addEmailToMailingList = (email) => {
    fetch("http://localhost:3000/emails", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: {
          email
        }
      })
    });
  };


  handleNext = (event, email) => {
    event.preventDefault();
    this.props.dispatch(emailNextStep(this.props.step));
    this.addEmailToMailingList(email);

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
        <button type="button" onClick={(event) => this.handleNext(event, email)}>
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
