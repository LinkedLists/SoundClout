import { RECEIVE_USER, CLEAR_USER_STATE } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK, UPDATE_TRACK } from "../actions/track_actions";

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
    case REMOVE_TRACK:
      if ("tracks" in newState[action.track.uploader_id]) {
        delete newState[action.track.uploader_id].tracks[action.track.id]
      }
      return newState
    case UPDATE_TRACK:
      newState[action.track.uploader_id].tracks[action.track.id] = action.track
      return newState
    default:
      return oldState
  }
}

export default userReducer