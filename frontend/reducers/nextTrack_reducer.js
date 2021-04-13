import { RECEIVE_NEXT_TRACK, BURP_NEXT_TRACK, BURP_PREV_TRACK, SAVE_NEXT_TRACK, CLEAR_NEXT_TRACK } from '../actions/playbar_actions'
import { CLEAR_HISTORY } from '../actions/history_actions'
import { REMOVE_TRACK } from "../actions/track_actions";

const prevTracksReducer = (state = [], action) => {
  let newState = state.slice()
  switch (action.type) {
    case SAVE_NEXT_TRACK:
      newState.push(action.track.id)
      return newState
    case RECEIVE_NEXT_TRACK:
      newState.pop()
      window.localStorage.setItem("nextTrack", JSON.stringify(newState))
      return newState
    case BURP_NEXT_TRACK:
      newState.pop()
      window.localStorage.setItem("nextTrack", JSON.stringify(newState))
      return newState
    case BURP_PREV_TRACK:
      newState.push(action.track.id)
      window.localStorage.setItem("nextTrack", JSON.stringify(newState))
      return newState
    case CLEAR_HISTORY:
      return []
    case CLEAR_NEXT_TRACK:
      return []
    case REMOVE_TRACK:
      let newArr = newState.filter(trackId => trackId !== action.track.id)
      return newArr
    default:
      return state
  }
}

export default prevTracksReducer