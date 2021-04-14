export const PLAY_ACTION = "PLAY_ACTION";
export const PAUSE_ACTION = "PAUSE_ACTION";
export const RECEIVE_NEW_TRACK = "RECEIVE_NEW_TRACK";
export const RECEIVE_PREV_TRACK = "RECEIVE_PREV_TRACK";
export const RECEIVE_NEXT_TRACK = "RECEIVE_NEXT_TRACK";
export const BURP_PREV_TRACK = "BURP_PREV_TRACK"
export const BURP_NEXT_TRACK = "BURP_NEXT_TRACK"
export const REFRESH_TRACK = "REFRESH_TRACK";
export const CLEAR_PLAYBAR_STATE = "CLEAR_PLAYBAR_STATE";
export const CLEAR_NEXT_TRACK = 'CLEAR_NEXT_TRACK'

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

export const receiveNewTrack = (track) => {
  return({
    type: RECEIVE_NEW_TRACK,
    track
  })
}

export const receivePrevTrack = (track) => {
  return({
    type: RECEIVE_PREV_TRACK,
    track
  })
}

export const burpPrevTrack = (track) => {
  return({
    type: BURP_PREV_TRACK,
    track
  })
}

export const burpNextTrack = (track) => {
  return({
    type: BURP_NEXT_TRACK,
    track
  })
}

export const receiveNextTrack = (track) => {
  return({
    type: RECEIVE_NEXT_TRACK,
    track
  })
}

export const refreshTrack = (track) => {
  return({
    type: REFRESH_TRACK,
    track
  })
}

export const clearPlaybarState = () => {
  return {
    type: CLEAR_PLAYBAR_STATE
  }
} 

export const clearNextTrack = () => {
  return {
    type: CLEAR_NEXT_TRACK
  }
}


