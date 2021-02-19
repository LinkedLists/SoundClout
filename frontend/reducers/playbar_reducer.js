import { RECEIVE_TRACK } from '../actions/track_actions'
import { PLAY_ACTION, PAUSE_ACTION } from '../actions/playbar_actions'

const defaultState = {
  currentTrack: {},
  "paused": true,
}

const PlaybarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLAY_ACTION:
      action["paused"] = false
      return action
    case PAUSE_ACTION:
      action["paused"] = true
      return true
    case RECEIVE_TRACK:
      return {currentTrack: action.track};
    default:
      return state
  }
}

export default PlaybarReducer