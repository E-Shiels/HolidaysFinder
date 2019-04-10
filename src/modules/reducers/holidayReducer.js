const initialState = {
  holidays: [],
  filteredHolidays: [],
  favoriteHolidays: [],
  favoriteFilter: false,
  selectedLocation: [], //location select
  focused: false, //date picker
  observances: [],
  loading: false,
  error: null,
  date: null,
};

export default function holidayReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_HOLIDAYS_BEGIN":
      return {...state, loading: true, error: null}
    case "FETCH_HOLIDAYS_SUCCESS":
      return {...state, loading: false, holidays: action.holidays}
    case "FETCH_HOLIDAYS_FAILURE":
      return {...state, loading: false, error: action.error, holidays: []}
    case "SET_FILTERED_HOLIDAYS":
      return {...state, filteredHolidays: action.filteredHolidays}
    case "SET_LOCATION":
      return {...state, selectedLocation: action.location}
    case "SET_DATE":
      return {...state, date: action.date}
    case "CHANGE_FAVORITE":
      return {...state, filteredHolidays: state.filteredHolidays.map((holiday) => {
        if (holiday.id === action.id) {
          return {
            ...holiday,
            favorite: action.favoriteStatus
          }
        }
        return holiday;
      }), holidays: state.holidays.map((holiday) => {
        if (holiday.id === action.id) {
          return {
            ...holiday,
            favorite: action.favoriteStatus
          }
        }
        return holiday;
      })}
    // case "CHANGE_FAVORITE_FILTER":
    //   return {...state, favoriteFilter: !action.favoriteFilterStatus}
    // case "SET_FAVORITE_HOLIDAYS":
    //   return {...state, favoriteHolidays: action.favoriteHolidays}
    default:
      return state;
  }
}
