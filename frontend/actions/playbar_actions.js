import { RECEIVE_CURRENT_USER } from "./session_actions";
import { RECEIVE_ALL_TRACKS } from "./track_actions";

export const PLAY_ACTION = "PLAY_ACTION";
export const PAUSE_ACTION = "PAUSE_ACTION";

// I don't think thunk action is needed

export const playTrack = () => {
  return {
    type: PLAY_ACTION
  }
}

export const pauseTrack = () => {
  return {
    type: PAUSE_ACTION
  }
}
