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

export const SET_FILTERED_HOLIDAYS = (filteredHolidays) => {
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
