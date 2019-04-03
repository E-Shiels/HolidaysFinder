import React from "react";
import { connect } from 'react-redux';
import { ConnectedEmailInput } from "./EmailInput.js";
import EmailSuccess from "./EmailSuccess.js";
import EmailConfirm from "./EmailConfirm.js";
//import { emailNextStep, emailPrevStep, emailChange } from '../modules/actions/emailActions.js'

export class EmailContainer extends React.Component {
  // nextStep = (email) => {
  //   this.props.dispatch(emailNextStep(this.props.step))
  //   this.props.dispatch(emailChange(email))
  // };
  //
  // prevStep = () => {
  //   this.props.dispatch(emailPrevStep(this.props.step))
  // };
  //
  // handleChange = input => event => {
  //    this.setState({ [input]: event.target.value });
  //  };

  render() {
    const { step } = this.props;
    switch (step) {
      default:
        return;
      case 1:
        return (
          <ConnectedEmailInput/>
        );
      case 2:
        return (
          <EmailConfirm/>
        );
      case 3:
        return <EmailSuccess/>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.email.step,
    email: state.email.email
  }
}

export const ConnectedEmailContainer = connect(mapStateToProps)(EmailContainer)
