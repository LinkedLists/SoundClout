import { RECEIVE_CURRENT_USER } from "./session_actions";
import { RECEIVE_ALL_TRACKS } from "./track_actions";

export const PLAY_ACTION = "PLAY_ACTION";
export const PAUSE_ACTION = "PAUSE_ACTION";

// a play would need to receive a current track to know what its currently playing
// as well as a receive track action to update the current track perhaps

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
