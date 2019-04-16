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
  return {
    type: "CHANGE_FAVORITE",
    id,
    favoriteStatus
  };
};

export const updateObservanceFilters = (observanceFilters) => {
  return {
    type: "UPDATE_OBSERVANCE_FILTERS",
    observanceFilters
  };
};

export const emptyObservanceFilteredHolidays = () => {
  return {
    type: "EMPTY_OBSERVANCE_FILTERED_HOLIDAYS"
  };
};

export const updateObservanceFilteredHolidays = (observanceListLength) => {
  return {
    type: "UPDATE_OBSERVANCE_FILTERED_HOLIDAYS",
    observanceListLength
  };
};
