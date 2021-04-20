import { RECEIVE_NEW_TRACK } from '../actions/playbar_actions'
import { RECEIVE_HISTORY, CLEAR_HISTORY } from '../actions/history_actions'
import { REMOVE_TRACK } from "../actions/track_actions";

const HistoryReducer = (state = [], action) => {
  let newState = state.slice()
  switch (action.type) {
    case RECEIVE_NEW_TRACK:
      if (action.track) {
        newState.push(action.track.id)
        window.localStorage.setItem("history", JSON.stringify(newState))
        return newState
      }
    case RECEIVE_HISTORY:
      let history = action.history && action.history.length ? action.history : []
      return history
    case CLEAR_HISTORY:
      return []
    case REMOVE_TRACK:
      let newArr = newState.filter(trackId => trackId !== action.track.id)
      return newArr

    default:
      return state
  }
}

export default HistoryReducer