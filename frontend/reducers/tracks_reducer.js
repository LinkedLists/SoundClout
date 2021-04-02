import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from "../actions/track_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT, REMOVE_COMMENTS } from '../actions/comment_actions'

const TracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_TRACKS:
      return Object.assign({}, oldState, action.tracks)
    case RECEIVE_TRACK:
      return {[action.track.id]: action.track}
    case REMOVE_TRACK:
      delete newState[action.trackId]
      return newState

    case RECEIVE_COMMENT:
      // SUPER UGLY!!!!
      let key = Object.keys(newState)[0]
      const values = Object.values(newState)[0]
      let newValues
      if (values.comments) {
        newValues = values.comments[action.comment.comment.id] = action.comment.comment
      } else {
        values.comments = {}
        newValues = values.comments[action.comment.comment.id] = action.comment.comment
      }
      newState[key].comments[newValues.id] = newValues
      return newState

    case REMOVE_COMMENT:
      key = Object.keys(newState)[0]
      delete newState[key].comments[action.trackCommentPair[1]]
      return newState

    default:
      return oldState
  }
}

export default TracksReducer