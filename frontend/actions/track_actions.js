import * as TrackApiUtil from "../util/track_api_util"

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const CLEAR_TRACK_ERRORS = "CLEAR_TRACK_ERRORS";

const receiveAllTracks = (tracks) => {
  return({
    type: RECEIVE_ALL_TRACKS,
    tracks
  })
}

const receiveTrack = (track) => {
  return({
    type: RECEIVE_TRACK,
    track
  })
}

const removeTrack = (trackId) => {
  return({
    type: REMOVE_TRACK,
    trackId
  })
}

const receiveTrackErrors = (errors) => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
})

export const clearTrackErrors = () => ({
  type: CLEAR_TRACK_ERRORS
})


// should include an error callback on the promises

export const fetchTracks = () => (dispatch) => (
  TrackApiUtil.fetchTracks().then((tracks) => dispatch(receiveAllTracks(tracks)))
)

export const fetchTrack = (trackId) => (dispatch) => (
  TrackApiUtil.fetchTrack(trackId).then((track) => dispatch(receiveTrack(track)))
)

export const createTrack = (track) => (dispatch) => (
  TrackApiUtil.createTrack(track).then(
    track => dispatch(receiveTrack(track)),
    error => dispatch(receiveTrackErrors(error.responseJSON))
  )
)

export const deleteTrack = (trackId) => (dispatch) => (
  TrackApiUtil.deleteTrack(trackId).then( () => dispatch(removeTrack(trackId)))
)
  
// add update once ready

// export const updateTrack = (track) => (dispatch) => (
//   TrackApiUtil.updateTrack(track).then((track) => dispatch(receiveTrack(track)))
// )