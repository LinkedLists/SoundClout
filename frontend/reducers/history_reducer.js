import { RECEIVE_NEW_TRACK } from '../actions/playbar_actions'
import { RECEIVE_COMMENT, REMOVE_COMMENT, REMOVE_COMMENTS } from '../actions/comment_actions'
import { RECEIVE_HISTORY, CLEAR_HISTORY } from '../actions/history_actions'


const HistoryReducer = (state = [], action) => {
  let newState = state.slice()
  // let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_NEW_TRACK:
      if (action.track.comments) {
        action.track.comments = Object.keys(action.track.comments).length
      } else {
        action.track.comments = 0
      }
      newState.push(action.track)
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
          track.comments === 0 ? 
            track.comments = 1 : track.comments += 1
        }
        return track
      })
      return newState 

    case REMOVE_COMMENT:
      // this is really bad
      trackId = action.trackCommentPair[0]
      console.log(trackId + " track ids " + action.trackCommentPair[0])
      newState = state.map( track => {
        if (trackId === track.id) {
          console.log("here")
          track.comments -= 1
        }
        return track
      })
      return newState 
      
    default:
      return state
  }
}

export default HistoryReducer