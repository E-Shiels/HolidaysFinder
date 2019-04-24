import React from "react";

import { connect } from "react-redux";
import { ConnectedEmailInput } from "./EmailInput.js";
import { ConnectedEmailSuccess } from "./EmailSuccess.js";
import { ConnectedEmailConfirm } from "./EmailConfirm.js";

import {
  emailResetStep,
  emailChange
} from "../modules/actions/emailActions.js";

export class EmailContainer extends React.Component {
  render() {
    const { step } = this.props;
    switch (step) {
      default:
        return;
      case 1:
        return <ConnectedEmailInput />;
      case 2:
        return <ConnectedEmailConfirm />;
      case 3:
        return <ConnectedEmailSuccess />;
    }
  }

  componentDidUpdate() {
    if (this.props.step === 3) {
      setTimeout(() => {
        this.props.dispatch(emailChange(""));
        this.props.dispatch(emailResetStep());
      }, 15000);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.email.step
  };
};

export const ConnectedEmailContainer = connect(mapStateToProps)(EmailContainer);
