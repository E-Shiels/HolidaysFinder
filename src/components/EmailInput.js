import React from 'react'

export default class EmailInput extends React.Component {

  saveAndContinue = (event) => {
    event.preventDefault()
    debugger
    this.props.nextStep()
  }

  render() {
    const { email } = this.props;
    return(
      <form>
      <h4>Sign up for our totally real email list to get totally not-fake emails.</h4>
        <input
        placeholder='youremail@email.com'
        onChange={this.props.handleChange('email')}
        defaultValue={email}
        id='email'
        />
        <input type="submit" onClick={this.saveAndContinue}/>
      </form>
    )
  }
}
