import React from 'react';
import Select from 'react-select';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const locationOptions = [
  { value: 'all', label:'Canada (All)'},
  { value: 'AB', label:'Alberta'},
  { value: 'BC', label:'British Columbia'},
  { value: 'MB', label:'Manitoba'},
  { value: 'NB', label:'New Brunswick'},
  { value: 'NL', label:'Newfoundland and Labrador'},
  { value: 'NS', label:'Nova Scotia'},
  { value: 'NT', label:'Northwest Territories'},
  { value: 'NU', label:'Nunavut'},
  { value: 'ON', label:'Ontario'},
  { value: 'PE', label:'Prince Edward Island'},
  { value: 'QC', label:'Quebec'},
  { value: 'SK', label:'Saskatchewan'},
  { value: 'YT', label:'Yukon'}
];

export default class LocationAndTimeInput extends React.Component {
  state = {
    selectedLocation: null, //location select
    date: null,
    focused: false, //date picker
  }

  handleChange = (selectedLocation) => {
    this.setState({ selectedLocation });
    console.log(`Option selected:`, selectedLocation);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.selectedLocation[0].label)
    console.log(this.state.date._d)
  }

  render() {
    const { selectedLocation } = this.state;

    return(
      <>
      <h2>Find holidays in </h2>
      <form onSubmit={this.handleSubmit}>
        <Select
          value={selectedLocation}
          onChange={this.handleChange}
          options={locationOptions}
          defaultValue={{ value: 'all', label:'Canada (All)' }}
          isMulti
        />

      <h3>On</h3>
      <SingleDatePicker
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
        showClearDate
        reopenPickerOnClearDate
        enableOutsideDays
      />
        <br></br>
        <input type="submit"/>
      </form>
      </>
)}
}