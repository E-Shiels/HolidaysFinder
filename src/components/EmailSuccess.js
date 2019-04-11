import React from "react";

import { connect } from "react-redux";

export default class EmailSuccess extends React.Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}

const mapStateToProps = state => {
  return {
    message: state.email.message
  };
};

export const ConnectedEmailSuccess = connect(mapStateToProps)(EmailSuccess);
