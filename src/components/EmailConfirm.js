import React from "react";
import { emailNextStep, emailPrevStep, emailChange } from '../modules/actions/emailActions.js'

export default class EmailConfirm extends React.Component {
  nextStep = (email) => {
    this.props.dispatch(emailNextStep(this.props.step))
    this.props.dispatch(emailChange(email))
  };

  saveAndConfirm = (event) => {
    event.preventDefault();
  };

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { email } = this.props;
    return (
      <>
      <h4>Sign up for our totally real email list to get totally not-fake emails.</h4>
        <p>{email}</p>
        <button type="button" onClick={this.back}>
          Back
        </button>
        <button type="button" onClick={this.saveAndConfirm}>
          Confirm Email
        </button>
      </>
    );
  }
}
