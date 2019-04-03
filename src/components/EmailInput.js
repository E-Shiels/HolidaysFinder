import React from 'react'

export default class EmailInput extends React.Component {

  saveAndContinue = (event) => {
    event.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values } = this.props;
    return(
      <form>
      <h4>Sign up for our totally real email list to get totally not-fake emails.</h4>
        <input
        placeholder='Email'
        onChange={this.props.handleChange('email')}
        defaultValue={values.email}
        />
        <button type="button" onClick={this.saveAndContinue}>Save Email</button>
      </form>
    )
  }
}
