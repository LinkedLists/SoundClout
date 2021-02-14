import { CLEAR_SESSION_ERRORS, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

// ActiveRecord will be storing validation errors in an array
const sessionErrorsReducer = (oldState = [], action) => {

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors
    case CLEAR_SESSION_ERRORS:
      return []
    default:
      return oldState
  }
}

export default sessionErrorsReducer