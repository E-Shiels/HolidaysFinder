export const emailNextStep = (step) => {
  return {
    type: "EMAIL_NEXT_STEP",
    step
  };
};

export const emailPrevStep = (step) => {
  return {
    type: "EMAIL_PREV_STEP",
    step
  };
};

export const emailResetStep = () => {
  return {
    type: "EMAIL_RESET_STEP"
  };
};

export const emailChange = (email) => {
  return {
    type: "EMAIL_CHANGE",
    email
  };
};

export const messageChange = (message) => {
  return {
    type: "MESSAGE_CHANGE",
    message
  };
};

export const postEmail = (email) => {
  return dispatch => {
    fetch("http://localhost:3000/emails", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: {
          email
        }
      })
    }).then(resp => {
      if (resp.ok) {
        dispatch(messageChange("Your email has been succesfully saved. Thanks!"))
      } else {
        dispatch(messageChange("Your email couldn't be saved. Please try again."))
      }
    })
  }
}
