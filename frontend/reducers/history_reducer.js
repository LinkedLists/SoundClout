import { RECEIVE_NEW_TRACK } from '../actions/playbar_actions'

const HistoryReducer = (state = [], action) => {
  let newState = state.splice()
  switch (action.type) {
    case RECEIVE_NEW_TRACK:
      newState.push(action.track.id)
      return newState
    // case CLEAR_HISTORY:
    //   return {}
    default:
      return state
  }
}

export default HistoryReducer