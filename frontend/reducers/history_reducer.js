import { RECEIVE_NEW_TRACK } from '../actions/playbar_actions'

const HistoryReducer = (state = [], action) => {
  let newState = state.slice()
  
  switch (action.type) {
    case RECEIVE_NEW_TRACK:
      newState.push(action.track)
      return newState
      // return Object.assign({}, state, {[action.track.id]: action.track});

    // case CLEAR_HISTORY:
    //   return {}
    default:
      return state
  }
}

export default HistoryReducer