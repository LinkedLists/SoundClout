import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return newState[action.user.id] = action.user 
    default:
      return oldState
  }
}

export default userReducer