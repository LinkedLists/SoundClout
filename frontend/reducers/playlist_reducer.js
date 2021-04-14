import { CLEAR_PLAYLIST, RECEIVE_PLAYLIST, SHIFT_PLAYLIST } from '../actions/playlist_actions'

const PlaylistReducer = (state = [], action) => {
  let newState = state.slice()
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      window.localStorage.setItem("playlist", JSON.stringify(action.playlist))
      return action.playlist
    case SHIFT_PLAYLIST:
      newState.shift()
      window.localStorage.setItem("playlist", JSON.stringify(newState))
      return newState
    case CLEAR_PLAYLIST:
      window.localStorage.setItem("playlist", JSON.stringify([]))
      return []
    default:
      return state
  }
}

export default PlaylistReducer