const initialState = {
  holidays: [],
  filteredHolidays: [],
  observanceFilteredHolidays: null,
  favoriteHolidays: [],
  //favoriteFilter: false,
  selectedLocation: [], //location select
  focused: false, //date picker
  observances: [],
  observanceFilters: [],
  loading: false,
  error: null,
  date: null
};

export default function holidayReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_HOLIDAYS_BEGIN":
      return { ...state, loading: true, error: null };
    case "FETCH_HOLIDAYS_SUCCESS":
      return { ...state, loading: false, holidays: action.holidays };
    case "FETCH_FAVORITE_HOLIDAYS_SUCCESS":
      return { ...state, loading: false, favoriteHolidays: action.holidays };
    case "FETCH_HOLIDAYS_FAILURE":
      return { ...state, loading: false, error: action.error, holidays: [] };
    case "SET_FILTERED_HOLIDAYS":
      return { ...state, filteredHolidays: action.filteredHolidays };
    case "SET_LOCATION":
      return { ...state, selectedLocation: action.location };
    case "SET_DATE":
      return { ...state, date: action.date };
    case "CHANGE_FAVORITE":
      return {
        ...state,
        filteredHolidays: state.filteredHolidays.map(holiday => {
          if (holiday.id === action.id) {
            return {
              ...holiday,
              favorite: !action.favoriteStatus
            };
          }
          return holiday;
        }),
        holidays: state.holidays.map(holiday => {
          if (holiday.id === action.id) {
            return {
              ...holiday,
              favorite: !action.favoriteStatus
            };
          }
          return holiday;
        })
      };

    // case "ADD_OBSERVANCE_FILTER":
    //   return {
    //     ...state,
    //     observanceFilters: Object.assign({}, state, action.observance)
    //   };
    //
    // case "REMOVE_OBSERVANCE_FILTER":
    //   const newObservanceFilter = state.observanceFilters.filter(
    //     filter => filter !== action.filter
    //   );
    //   return { ...state, observanceFilters: newObservanceFilter };

    case "UPDATE_OBSERVANCE_FILTERS":
      return {...state, observanceFilters: action.observanceFilters}

    case "UPDATE_OBSERVANCE_FILTERED_HOLIDAYS":
      let observanceFilteredHolidays = [];
      let types = null;
      //debugger
      state.filteredHolidays.forEach(holiday => {
        if (holiday.type.includes("-")) {
          types = holiday.type.split(" - ");
        }
        if ((state.observanceFilters.indexOf(types || holiday.type) > 0) || state.observanceFilters.length === state.observances.length || !state.observanceFilters.length) {
          if (observanceFilteredHolidays.indexOf(holiday) === -1) {
            observanceFilteredHolidays.push(holiday);
          }
        }
      });
      return {
        ...state,
        observanceFilteredHolidays: observanceFilteredHolidays
      };
    default:
      return state;
  }
}
