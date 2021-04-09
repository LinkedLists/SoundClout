import { PLAY_ACTION, PAUSE_ACTION, RECEIVE_NEW_TRACK, REFRESH_TRACK, CLEAR_PLAYBAR_STATE } from '../actions/playbar_actions'

const defaultState = {
  currentTrack: {},
  "paused": true,
}

// i should only receive a track when a new play is dispatched from another show page
// play and pause actions are useless i think

const PlaybarReducer = (state = defaultState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case PLAY_ACTION:
      newState["paused"] = false
      return newState
    case PAUSE_ACTION:
      newState["paused"] = true
      return newState
    case RECEIVE_NEW_TRACK:
      return Object.assign({}, state, {currentTrack: action.track});
    case REFRESH_TRACK:
      return Object.assign({}, defaultState, {currentTrack: action.track});
    case CLEAR_PLAYBAR_STATE:
      return defaultState
    default:
      return state
  }
}

export default PlaybarReducer