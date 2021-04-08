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
      let actionCopy = Object.assign({}, action)
      if (action.track.comments) {
        actionCopy.track.numComments = Object.keys(action.track.comments).length
      } 
      else {
        actionCopy.track.numComments = 0
      }
      newState.push(actionCopy.track)
      return newState
    case RECEIVE_HISTORY:
      return action.history
    case CLEAR_HISTORY:
      return []
    case RECEIVE_COMMENT:
      // SUPER UGLY!!!!
      let trackId = action.comment.comment.track_id
      newState = state.map( track => {
        // some reason action.comment.comment.track_id is a string
        if (trackId === track.id.toString()) {
          track.numComments === 0 ? 
            track.numComments = 1 : track.numComments += 1
          track.numComments < 0 ? 
            track.numComments = 0 : null
        }
        return track
      })
      return newState 

    case REMOVE_COMMENT:
      // this is really bad
      trackId = action.trackCommentPair[0]
      newState = state.map( track => {
        if (trackId === track.id) {
          track.numComments > 0 ? 
            track.numComments -= 1 : null
        }
        return track
      })
      return newState 
    case REMOVE_TRACK:
      let indexArr = [];
      for(let i = 0; i < newState.length; i++) {
        if (newState[i].id === action.trackId) {
          indexArr.push(i);
        }
      }
      while(indexArr.length) {
        newState.splice(indexArr.pop(), 1)
      }
      return newState
    case UPDATE_TRACK:
      newState = state.map( track => {
        if (action.track.id === track.id) {
          track = Object.assign(track, action.track)
        }
        return track
      })

    default:
      return state
  }
}

export default HistoryReducer