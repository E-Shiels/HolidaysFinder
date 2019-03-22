import React from 'react';
import Select from 'react-select';

const options = [
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
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = this.state;

    return(
      <>
      <h2>Find holidays in </h2>
      <form>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          defaultValue={{ value: 'all', label:'Canada (All)' }}
          isMulti
        />
      <h3>On</h3>
        <input type="date"/>
        <br></br>
        <input type="submit"/>
      </form>
      </>
)}
}
