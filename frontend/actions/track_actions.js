import * as TrackApiUtil from "../util/track_api_util"

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const CLEAR_TRACK_ERRORS = "CLEAR_TRACK_ERRORS";
export const UPDATE_TRACK = "UPDATE_TRACK";

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

const removeTrack = (track) => {
  return({
    type: REMOVE_TRACK,
    track
  })
}

const editTrack = (track) => {
  return({
    type: UPDATE_TRACK,
    track
  })
}

const receiveTrackErrors = (errors) => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
})

export const clearTrackErrors = () => ({
  type: CLEAR_TRACK_ERRORS
})


export const fetchTracks = () => (dispatch) => (
  TrackApiUtil.fetchTracks().then((tracks) => dispatch(receiveAllTracks(tracks)))
    .then(res => {
      window.localStorage.setItem('tracks', JSON.stringify(res.tracks))
  })
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

export const updateTrack = (track) => (dispatch) => (
  TrackApiUtil.updateTrack(track).then(
    track => dispatch(editTrack(track)),
    error => dispatch(receiveTrackErrors(error.responseJSON))
  )
)

export const deleteTrack = (track) => (dispatch) => (
  TrackApiUtil.deleteTrack(track).then( () => dispatch(removeTrack(track)))
    .then(res => {handleLocalStorage(res.track)})
)

const handleLocalStorage = (track) => {
  let tracks
  if (window.localStorage.getItem("tracks")) {
    tracks = JSON.parse(window.localStorage.getItem("tracks"))
    delete tracks[track.id]
    window.localStorage.setItem('tracks', JSON.stringify(tracks))
  }
  if (window.localStorage.getItem("history")) {
    let oldHistory = JSON.parse(window.localStorage.getItem("history"))
    let newHistory
    if (oldHistory !== 0) {
      newHistory = oldHistory.filter(trackId => trackId !== track.id)
      window.localStorage.setItem("history", JSON.stringify(newHistory))
    }
  }
}
