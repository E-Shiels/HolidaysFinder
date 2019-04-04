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
