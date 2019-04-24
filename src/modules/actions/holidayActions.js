export const fetchHolidaysBegin = () => {
  return {
    type: "FETCH_HOLIDAYS_BEGIN"
  };
};

export const fetchSuccess = (fetchType, holidays) => {
  return {
    type: "FETCH_SUCCESS",
    fetchType,
    holidays
  };
};

export const fetchHolidaysFailure = (error) => {
  return {
    type: "FETCH_HOLIDAYS_FAILURE",
    error
  };
};

export const fetchHolidays = () => {
  return dispatch => {
    dispatch(fetchHolidaysBegin());
    return fetch("http://localhost:3000/api/v1/holidays")
      .then((response) => handleErrors(response))
      .then((response) => response.json())
      .then((json) => {
        return json
      })
      .catch((error) => dispatch(fetchHolidaysFailure(error)));
  }
}

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const setFilteredHolidays = (filteredHolidays) => {
  return {
    type: "SET_FILTERED_HOLIDAYS",
    filteredHolidays
  };
};

export const setLocation = (location) => {
  return {
    type: "SET_LOCATION",
    location
  };
};

export const setDate = (date) => {
  return {
    type: "SET_DATE",
    date
  };
};

export const changeFavorite = (id, favoriteStatus) => {
  return dispatch => {
    dispatch(putFavoriteStatus(id, favoriteStatus))
    dispatch(changeFavoriteStatus(id, favoriteStatus))
  }
}

export const changeFavoriteStatus = (id, favoriteStatus) => {
  return {
    type: "CHANGE_FAVORITE_STATUS",
    id,
    favoriteStatus
  };
};

export const putFavoriteStatus = (id, favoriteStatus) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/holidays/${id}.json`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        holiday: {
          favorite: favoriteStatus
        }
      })
    })
  }
};

export const updateObservanceFilters = (observanceFilters) => {
  return {
    type: "UPDATE_OBSERVANCE_FILTERS",
    observanceFilters
  };
};

export const resetObservanceFilteredHolidaysAndFilters = () => {
  return {
    type: "RESET_OBSERVANCE_FILTERED_HOLIDAYS_AND_FILTERS"
  };
};

export const updateObservanceFilteredHolidays = (observanceListLength) => {
  return {
    type: "UPDATE_OBSERVANCE_FILTERED_HOLIDAYS",
    observanceListLength
  };
};
