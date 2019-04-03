import React from "react";
import { connect } from 'react-redux';
import EmailInput from "./EmailInput.js";
import EmailSuccess from "./EmailSuccess.js";
import EmailConfirm from "./EmailConfirm.js";
import { emailNextStep, emailPrevStep, emailChange } from '../modules/actions/emailActions.js'

export class EmailContainer extends React.Component {
  componentWillMount() {
    console.log(this.props)
  }

  nextStep = () => {
    console.log(this.props)
    this.props.dispatch(emailNextStep(this.props.step))
  };

  prevStep = () => {
    console.log(this.props)
    this.props.dispatch(emailPrevStep(this.props.step))
  };
  
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.props;
    const { email } = this.props;
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

const mapStateToProps = (state) => {
  return {
    step: state.step,
    email: state.email
  }
}

export const ConnectedEmailContainer = connect(mapStateToProps)(EmailContainer)
