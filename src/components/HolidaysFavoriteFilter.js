// import React from "react";
// import equal from "fast-deep-equal";
// import { connect } from "react-redux";
// import {
//   changeFavoriteFilter,
//   setFavoriteHolidays
// } from "../modules/actions/holidayActions.js";
//
// export default class HolidaysFavoriteFilter extends React.Component {
//   state = {
//     favoriteFilter: this.props.favoriteFilter
//   }
//
//   getListOfFavoriteHolidays = () => {
//     this.props.dispatch(
//       setFavoriteHolidays(
//         this.props.filteredHolidays.filter((holiday) => {
//         //  debugger
//           return holiday.favorite === true
//         })
//       )
//     );
//   };
//
//   renderFavoritesFilter = () => {
//     if (this.props.favoriteHolidays.length >= 1) {
//       return (
//         <>
//           <label htmlFor="viewFavorites">View Only Favorites?</label>
//           <input type="checkbox" id="viewFavorites" name="viewFavorites" onChange={this.handleChange} value={this.props.favoriteFilter} />
//         </>
//       )
//     } else {
//       return null
//     }
//   }
//
//   handleChange = () => {
//     this.setState({favoriteFilter: !this.state.favoriteFilter}, function() {
//     this.props.dispatch(changeFavoriteFilter(this.state.favoriteFilter))
//   })
//   }
//
//   componentDidUpdate(prevProps) {
//     if (!equal(this.props.filteredHolidays, prevProps.filteredHolidays)) {
//       this.getListOfFavoriteHolidays()
//     }
//   }
//
//   render() {
//     return (
//       this.renderFavoritesFilter()
//   )
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     holidays: state.holidays.holidays,
//     filteredHolidays: state.holidays.filteredHolidays,
//     favoriteFilter: state.holidays.favoriteFilter,
//     favoriteHolidays: state.holidays.favoriteHolidays
//   };
// };
//
// export const ConnectedHolidaysFavoriteFilter = connect(mapStateToProps)(
//   HolidaysFavoriteFilter
// );
