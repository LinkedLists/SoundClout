import { PLAY_ACTION, PAUSE_ACTION, RECEIVE_NEW_TRACK } from '../actions/playbar_actions'

const defaultState = {
  currentTrack: {},
  "paused": true,
}

// i should only receive a track when a new play is dispatched from another show page
// play and pause actions are useless i think

const PlaybarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLAY_ACTION:
      action["paused"] = false
      return action
    case PAUSE_ACTION:
      action["paused"] = true
      return true
    case RECEIVE_NEW_TRACK:
      return Object.assign({}, defaultState, {currentTrack: action.track});
    default:
      return state
  }
}

export default PlaybarReducer