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
    case "FETCH_SUCCESS":
      return { ...state, loading: false, [action.fetchType]: action.holidays };
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
        filteredHolidays: state.filteredHolidays.map((holiday) => {
          if (holiday.id === action.id) {
            return {
              ...holiday,
              favorite: !action.favoriteStatus
            };
          }
          return holiday;
        }),
        holidays: state.holidays.map((holiday) => {
          if (holiday.id === action.id) {
            return {
              ...holiday,
              favorite: !action.favoriteStatus
            };
          }
          return holiday;
        })
      };

    case "UPDATE_OBSERVANCE_FILTERS":
      return { ...state, observanceFilters: action.observanceFilters };

    case "RESET_OBSERVANCE_FILTERED_HOLIDAYS_AND_FILTERS":
      return { ...state, observanceFilteredHolidays: null, observanceFilters: [] };

    case "UPDATE_OBSERVANCE_FILTERED_HOLIDAYS":
      let observanceFilteredHolidays = [];
      state.filteredHolidays.forEach((holiday) => {
        let types = "";
        if (holiday.type.includes("-")) {
          types = holiday.type.split(" - ");
        }
        if (types.length > 0) {
          types.forEach((type) => {
            if (
              state.observanceFilters.indexOf(type) > -1 ||
              !state.observanceFilters.length
            ) {
              if (observanceFilteredHolidays.indexOf(holiday) === -1) {
                observanceFilteredHolidays.push(holiday);
              }
            }
          });
        }
        if (
          state.observanceFilters.indexOf(holiday.type) > -1 ||
          !state.observanceFilters.length
        ) {
          if (observanceFilteredHolidays.indexOf(holiday) === -1) {
            observanceFilteredHolidays.push(holiday);
          }
        }
      });
      return {
        ...state,
        observanceFilteredHolidays
      };
    default:
      return state;
  }
}
