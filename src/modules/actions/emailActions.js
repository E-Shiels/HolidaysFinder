export const emailNextStep = (step) => {
  return {
    type: 'EMAIL_NEXT_STEP', step
  }
}

export const emailPrevStep = (step) => {
  return {
    type: 'EMAIL_PREV_STEP', step
  }
}

export const emailChange = (email) => {
  return {
    type: 'EMAIL_CHANGE', email
  }
}

export const messageChange = (message) => {
  return {
    type: 'MESSAGE_CHANGE', message
  }
};
