import React from "react";

export default class EmailConfirm extends React.Component {

  saveAndConfirm = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <>
        <p>{values.email}</p>
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
