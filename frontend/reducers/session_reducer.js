import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user
      // return Object.assign({}, oldState, action.user)
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return oldState
  }
}

export default sessionReducer