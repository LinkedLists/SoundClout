import { RECEIVE_NEW_TRACK, RECEIVE_PREV_TRACK, RECEIVE_NEXT_TRACK, BURP_NEXT_TRACK, BURP_PREV_TRACK, SAVE_PREV_TRACK } from '../actions/playbar_actions'
import { CLEAR_HISTORY } from '../actions/history_actions'
import { REMOVE_TRACK } from "../actions/track_actions";

const prevTracksReducer = (state = [], action) => {
  let newState = state.slice()
  switch (action.type) {
    case RECEIVE_NEW_TRACK:
      newState.push(action.track.id)
      window.localStorage.setItem("prevTracks", JSON.stringify(newState))
      return newState
    case SAVE_PREV_TRACK:
      newState.push(action.track.id)
      return newState
    case RECEIVE_PREV_TRACK:
      newState.pop()
      window.localStorage.setItem("prevTracks", JSON.stringify(newState))
      return newState
    case RECEIVE_NEXT_TRACK:
      newState.push(action.track.id)
      window.localStorage.setItem("prevTracks", JSON.stringify(newState))
      return newState
    case BURP_PREV_TRACK:
      newState.pop()
      window.localStorage.setItem("prevTracks", JSON.stringify(newState))
    case BURP_NEXT_TRACK:
      newState.push(action.track.id)
      window.localStorage.setItem("prevTracks", JSON.stringify(newState))
      return newState
    // case RECEIVE_HISTORY:
    //   return action.history
    case CLEAR_HISTORY:
      return []
    case REMOVE_TRACK:
      let newArr = newState.filter(trackId => trackId !== action.track.id)
      return newArr
    default:
      return state
  }
}

export default prevTracksReducer