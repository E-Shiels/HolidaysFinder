import React from 'react';
import { connect } from 'react-redux'
import { ConnectedHoliday } from "./Holiday.js";


export default class FavoriteHolidays extends React.Component {
  state = {
    favoriteHolidays: [],
  }

  findFavoriteHolidays = () =>{
    let favoriteHolidays = this.props.holidays.map((holiday) => {
      return holiday.favorite === true
    })
    this.setState({favoriteHolidays: favoriteHolidays})
  }

  renderFavoriteHolidays = (favoriteHolidays) => {
    return favoriteHolidays.map(holiday => {
      let locationsList = [""];
      if (holiday.states.length === 1) {
        locationsList.push({
          name: holiday.states[0].name
        });
      } else if (holiday.states === "All") {
        locationsList.push({
          name: "Canada (All)"
        });
      } else {
        holiday.states.split(",").forEach(state => {
          locationsList.push({
            name: state.trim()
          });
        });
      }
      let observanceList = [];
      if (holiday.type.includes(",")) {
        holiday.type.split(", ").forEach(type => {
          observanceList.push(type.trim());
        });
      } else {
        observanceList.push(holiday.type);
      }

      return (
        <ConnectedHoliday
          key={holiday.id}
          id={holiday.id}
          date={holiday.date}
          name={holiday.name}
          observance={observanceList}
          description={holiday.description}
          locations={locationsList}
          favorite={holiday.favorite}
        />
      );
    });
  }

  componentWillReceiveProps() {
    this.findFavoriteHolidays()
  }

  render() {
    return(
      this.renderFavoriteHolidays(this.state.favoriteHolidays)
    )
  }
}

const mapStateToProps = state => {
  return {
    holidays: state.holidays.holidays,
  };
};

export const ConnectedFavoriteHolidays = connect(mapStateToProps)(
  FavoriteHolidays
);
