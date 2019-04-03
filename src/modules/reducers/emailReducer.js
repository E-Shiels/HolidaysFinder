const initialState = {
  step: 1,
  email: "",
};

function  email(state = initialState, action) {
  switch (action.type) {
    case "EMAIL_NEXT_STEP":
      return action.step + 1;
    case "EMAIL_PREV_STEP":
      return action.step - 1;
    case "EMAIL_CHANGE":
      return action.email;
    default:
      return state;
  }
};

export default email;
