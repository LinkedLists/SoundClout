import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK, UPDATE_TRACK } from "../actions/track_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT, REMOVE_COMMENTS } from '../actions/comment_actions'
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
      // return {[action.track.id]: action.track}
    case REMOVE_TRACK:
      delete newState[action.track.id]
      return newState

    case RECEIVE_COMMENT:
      // // SUPER UGLY!!!!
      // let key = Object.keys(newState)[0]
      // const values = Object.values(newState)[0]
      // if (!values.comments) {
      //   values.comments = {}
      // }
      // const newValues = values.comments[action.comment.comment.id] = action.comment.comment
      // newState[key].comments[newValues.id] = newValues
      // return newState
      // debugger
      newState[action.comment.comment.track_id].numComments = action.comment.comment.numComments
      return newState


    case REMOVE_COMMENT:
      // key = Object.keys(newState)[0]
      // delete newState[key].comments[action.trackCommentPair[1]]
      // debugger
      newState[action.trackCommentPair[0].id].numComments = action.trackCommentPair[2]
      return newState

    case RECEIVE_USER:
      return Object.assign({}, oldState, action.user.tracks)
    default:
      return oldState
  }
}

export default TracksReducer