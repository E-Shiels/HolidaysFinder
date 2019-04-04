import React from 'react'
import { connect } from 'react-redux';
//import { messageChange } from '../modules/actions/emailActions.js'


export default class EmailSuccess extends React.Component {

  // componentDidUpdate() {
  //   this.props.dispatch(messageChange('Your email has been succesfully saved. Thanks!'))
  //   setTimeout(this.props.dispatch(messageChange('')), 8000)
  // }

  render() {
    return(
      <p>{this.props.message}</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.email.message
  }
}

export const ConnectedEmailSuccess = connect(mapStateToProps)(EmailSuccess)
