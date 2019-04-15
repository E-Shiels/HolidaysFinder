import React from "react";

import { connect } from "react-redux";
import { emailNextStep, emailChange } from "../modules/actions/emailActions.js";

export default class EmailInput extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    if (
      event.target[0].value.includes("@") &&
      event.target[0].value.includes(".")
    ) {
      this.props.dispatch(emailNextStep(this.props.step));
      this.props.dispatch(emailChange(event.target[0].value));
    } else {
      alert("The email address you provided is invalid. Please try again.");
    }
  };

  render() {
    const { email } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>
          Sign up for our totally real email list to get totally not-fake
          emails.
        </h4>
        <input
          placeholder="yourEmail@email.com"
          defaultValue={email}
          id="email"
        />
        <button type="submit">Submit Email</button>
      </form>
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
