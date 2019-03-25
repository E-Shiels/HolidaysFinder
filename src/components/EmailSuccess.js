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
      <p>Email Successfully Saved. Thanks!</p>
    )
  }
}
