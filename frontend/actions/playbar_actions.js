// import { RECEIVE_CURRENT_USER } from "./session_actions";
// import { RECEIVE_ALL_TRACKS } from "./track_actions";

export const PLAY_ACTION = "PLAY_ACTION";
export const PAUSE_ACTION = "PAUSE_ACTION";
export const RECEIVE_NEW_TRACK = "RECEIVE_NEW_TRACK";
export const CLEAR_PLAYBAR_STATE = "CLEAR_PLAYBAR_STATE";

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

// using a playbar specific receive track action
export const receiveNewTrack = (track) => {
  return({
    type: RECEIVE_NEW_TRACK,
    track
  })
}

export const clearPlaybarState = () => {
  return {
    type: CLEAR_PLAYBAR_STATE
  }
} 


