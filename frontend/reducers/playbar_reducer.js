import { PLAY_ACTION, PAUSE_ACTION, 
  RECEIVE_NEW_TRACK, RECEIVE_PREV_TRACK, 
  RECEIVE_NEXT_TRACK, REFRESH_TRACK, 
  CLEAR_PLAYBAR_STATE } from '../actions/playbar_actions'

const defaultState = {
  currentTrack: {},
  "paused": true,
}

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
    case RECEIVE_PREV_TRACK:
      return Object.assign({}, state, {currentTrack: action.track});
    case RECEIVE_NEXT_TRACK:
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