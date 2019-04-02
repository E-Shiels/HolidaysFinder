import React from "react";
import EmailInput from "./EmailInput.js";
import EmailSuccess from "./EmailSuccess.js";
import EmailConfirm from "./EmailConfirm.js";

export default class EmailContainer extends React.Component {
  state = {
    step: 1,
    email: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const { email } = this.state;
    const values = { email };
    switch (step) {
      default:
        return;
      case 1:
        return (
          <EmailInput
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <EmailConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <EmailSuccess prevStep={this.prevStep} />;
    }
  }
}
