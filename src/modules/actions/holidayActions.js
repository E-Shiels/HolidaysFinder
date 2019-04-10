export const fetchHolidaysBegin = () => {
  return {
    type: 'FETCH_HOLIDAYS_BEGIN'
  }
}

export const fetchHolidaysSuccess = (holidays) => {
  return {
    type: 'FETCH_HOLIDAYS_SUCCESS', holidays
  }
}

export const fetchHolidaysFailure = (error) => {
  return {
    type: 'FETCH_HOLIDAYS_FAILURE', error
  }
}

export const setFilteredHolidays = (filteredHolidays) => {
  return {
    type: 'SET_FILTERED_HOLIDAYS', filteredHolidays
  }
}

export const setLocation = (location) => {
  return {
    type: 'SET_LOCATION', location
  }
}

export const setDate = (date) => {
  return {
    type: 'SET_DATE', date
  }
}

export const changeFavorite = (id, favoriteStatus) => {
  return {
    type: "CHANGE_FAVORITE", id, favoriteStatus
  }
}

// export const changeFavoriteFilter = (favoriteFilterStatus) => {
//   return {
//     type: "CHANGE_FAVORITE_FILTER", favoriteFilterStatus
//   }
// }
//
// export const setFavoriteHolidays = (favoriteHolidays) => {
//   return {
//     type: 'SET_FAVORITE_HOLIDAYS', favoriteHolidays
//   }
// }
