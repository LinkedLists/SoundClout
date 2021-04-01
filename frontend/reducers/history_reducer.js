import { RECEIVE_NEW_TRACK } from '../actions/playbar_actions'
import { RECEIVE_HISTORY, CLEAR_HISTORY } from '../actions/history_actions'


const HistoryReducer = (state = [], action) => {
  let newState = state.slice()
  
  switch (action.type) {
    case RECEIVE_NEW_TRACK:
      newState.push(action.track)
      return newState
      // return Object.assign({}, state, {[action.track.id]: action.track});
    case RECEIVE_HISTORY:
      return action.history
    case CLEAR_HISTORY:
      return []
    default:
      return state
  }
}

export default HistoryReducer