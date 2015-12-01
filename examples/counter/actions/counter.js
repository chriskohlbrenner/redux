export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const MULTIPLY_COUNTER = 'MULTIPLY_COUNTER'
export const RESET_TO_ZERO = 'RESET_TO_ZERO'


export function resetToZero() {
  return {
    type: RESET_TO_ZERO
  }
}

export function multiply() {
  return {
    type: MULTIPLY_COUNTER
  }
}

export function multiplyIfDivisibleByFive() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 5 != 0) {
      return
    }

    dispatch(multiply())
  }
}

export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}
