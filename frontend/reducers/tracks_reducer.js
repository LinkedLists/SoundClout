import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK, UPDATE_TRACK } from "../actions/track_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions'
import { RECEIVE_USER } from '../actions/user_actions';

const TracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_TRACKS:
      return Object.assign({}, oldState, action.tracks)
    case RECEIVE_TRACK:
      newState[action.track.id] = action.track
      return newState
    case UPDATE_TRACK:
      newState[action.track.id] = action.track
      return newState
    case REMOVE_TRACK:
      delete newState[action.track.id]
      return newState

    case RECEIVE_COMMENT:
      newState[action.comment.comment.track_id].numComments = action.comment.comment.numComments
      return newState

    case REMOVE_COMMENT:
      newState[action.trackCommentPair[0].id].numComments = action.trackCommentPair[2]
      return newState

    case RECEIVE_USER:
      return Object.assign({}, oldState, action.user.tracks)
    default:
      return oldState
  }
}

export default TracksReducer