import { RECEIVE_NEW_TRACK } from '../actions/playbar_actions'
import { RECEIVE_COMMENT, REMOVE_COMMENT, REMOVE_COMMENTS } from '../actions/comment_actions'
import { RECEIVE_HISTORY, CLEAR_HISTORY } from '../actions/history_actions'
import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK, UPDATE_TRACK } from "../actions/track_actions";

const HistoryReducer = (state = [], action) => {
  let newState = state.slice()
  // let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_NEW_TRACK:
      // wtf am i doing
      // let actionCopy = Object.assign({}, action)
      // actionCopy.track.numComments = action.track.numComments
      newState.push(action.track.id)
      return newState
    case RECEIVE_HISTORY:
      return action.history
    case CLEAR_HISTORY:
      return []
    // case RECEIVE_COMMENT:
    //   // SUPER UGLY!!!!
    //   let trackId = action.comment.comment.track_id
    //   newState = state.map( track => {
    //     // some reason action.comment.comment.track_id is a string
    //     if (trackId === track.id.toString()) {
    //       track.numComments = action.comment.comment.numComments
    //     }
    //     return track
    //   })
    //   return newState 

    // case REMOVE_COMMENT:
    //   // this is really bad
    //   trackId = action.trackCommentPair[0].id
    //   newState = state.map( track => {
    //     if (trackId === track.id) {
    //       track.numComments = action.trackCommentPair[2]
    //     }
    //     return track
    //   })
    //   return newState 
    case REMOVE_TRACK:
      let newArr = newState.filter(trackId => trackId !== action.trackId)
      return newArr
    // case UPDATE_TRACK:
    //   newState = state.map( track => {
    //     if (action.track.id === track.id) {
    //       track = Object.assign(track, action.track)
    //     }
    //     return track
    //   })

    default:
      return state
  }
}

export default HistoryReducer