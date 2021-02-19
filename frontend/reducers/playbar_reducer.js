import { RECEIVE_TRACK } from '../actions/track_actions'
import { PLAY_ACTION, PAUSE_ACTION } from '../actions/playbar_actions'

const PlaybarReducer = (state = null, action) => {
  switch (action.type) {
    case PLAY_ACTION:
      // return action
      return true
    case PAUSE_ACTION:
      return false
    default:
      return false
  }
}

export default PlaybarReducer