import { RECEIVE_TRACK_ERRORS, CLEAR_TRACK_ERRORS } from '../actions/track_actions';

// ActiveRecord will be storing validation errors in an array
const trackErrorsReducer = (oldState = [], action) => {
  switch(action.type) {
    case RECEIVE_TRACK_ERRORS:
      return Object.assign({}, oldState, action.errors)
      // return action.errors
    case CLEAR_TRACK_ERRORS:
      return []
    default:
      return oldState
  }
}

export default trackErrorsReducer