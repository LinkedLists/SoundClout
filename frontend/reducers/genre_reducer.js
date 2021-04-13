import { RECEIVE_NEXT_TRACK, BURP_NEXT_TRACK, BURP_PREV_TRACK, SAVE_NEXT_TRACK } from '../actions/playbar_actions'
import { CLEAR_HISTORY } from '../actions/history_actions'
import { REMOVE_TRACK } from "../actions/track_actions";

const GenreReducer = (state = '', action) => {
  // let newState = state.slice()
  switch (action.type) {

    default:
      return state
  }
}

export default GenreReducer