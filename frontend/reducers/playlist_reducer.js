import { RECEIVE_NEXT_TRACK, BURP_NEXT_TRACK, BURP_PREV_TRACK, SAVE_NEXT_TRACK } from '../actions/playbar_actions'
import { CLEAR_HISTORY } from '../actions/history_actions'
import { REMOVE_TRACK } from "../actions/track_actions";
import { CLEAR_PLAYLIST, RECEIVE_PLAYLIST, SHIFT_PLAYLIST } from '../actions/playlist_actions'

const PlaylistReducer = (state = [], action) => {
  let newState = state.slice()
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      window.localStorage.setItem("playlist", JSON.stringify(newState))
      return action.playlist
    case SHIFT_PLAYLIST:
      newState.shift()
      window.localStorage.setItem("playlist", JSON.stringify(newState))
      return newState
    case CLEAR_PLAYLIST:
      window.localStorage.setItem("playlist", JSON.stringify(newState))
      return []
    default:
      return state
  }
}

export default PlaylistReducer