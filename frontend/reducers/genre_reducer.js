import { CLEAR_PLAYLIST, RECEIVE_PLAYLIST } from '../actions/playlist_actions'

const GenreReducer = (state = '', action) => {
  // let newState = state.slice()
  switch (action.type) {
    // case RECEIVE_PLAYLIST:
    //   return action.playlist
    case CLEAR_PLAYLIST:
      return ''
    default:
      return state
  }
}

export default GenreReducer