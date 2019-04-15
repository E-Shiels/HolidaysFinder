import React from "react";

import { connect } from "react-redux";
import { ConnectedEmailInput } from "./EmailInput.js";
import { ConnectedEmailSuccess } from "./EmailSuccess.js";
import { ConnectedEmailConfirm } from "./EmailConfirm.js";

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
}

const mapStateToProps = (state) => {
  return {
    step: state.email.step
  };
};

export const ConnectedEmailContainer = connect(mapStateToProps)(EmailContainer);
