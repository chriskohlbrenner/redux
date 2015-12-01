import { MULTIPLY_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_TO_ZERO } from '../actions/counter'

export default function counter(state = 0, action) {
  switch (action.type) {
    case RESET_TO_ZERO:
      return 0
    case MULTIPLY_COUNTER:
      return state * 2
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}
