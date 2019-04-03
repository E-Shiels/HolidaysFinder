import React from 'react'

export default class EmailSuccess extends React.Component {

  //REQUIRES REDUX TO RESET STATE
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.prevStep()
  //     this.props.prevStep()
  //   }, 10000)
  // }
  // componentWillUnmount() {
  //   clearTimeout();
  // }

  render() {
    return(
      <p>Your email was successfully saved. Thanks!</p>
    )
  }
}
