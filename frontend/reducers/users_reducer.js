import { RECEIVE_USER, CLEAR_USER_STATE } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // newState[action.user.id] = action.user 
      return Object.assign({}, oldState, {[action.user.id]: action.user})
      // return newState
    case RECEIVE_USER:
      return Object.assign({}, oldState, {[action.user.id]: action.user})
    case CLEAR_USER_STATE:
      return {}
    default:
      return oldState
  }
}

export default userReducer