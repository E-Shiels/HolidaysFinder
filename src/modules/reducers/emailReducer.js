const initialState = {
  step: 1,
  email: "",
};

export default function email(state = initialState, action) {
  switch (action.type) {
    case "EMAIL_NEXT_STEP":
      return {...state, step: action.step + 1};
    case "EMAIL_PREV_STEP":
      return {...state, step: action.step - 1};
    case "EMAIL_CHANGE":
      return {...state, email: action.email};
    default:
      return state;
  }
};
