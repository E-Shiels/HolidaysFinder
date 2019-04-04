const initialState = {
  holidays: [],
  filteredHolidays: [],
  selectedLocation: [], //location select
  focused: false, //date picker
  observances: [],
  loading: false,
  error: null,
};

export default function holidayReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_HOLIDAYS_BEGIN":
      return {...state, loading: true, error: null}
    case "FETCH_HOLIDAYS_SUCCESS":
      return {...state, loading: false, holiday: action.holidays}
    case "FETCH_HOLIDAYS_FAILURE":
      return {...state, loading: false, error: action.error, holidays: []}
    default:
      return state;
  }
}
