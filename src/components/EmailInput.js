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
