export const createTrack = track => {
  return(
    $.ajax({
      url: 'api/tracks',
      method: 'POST',
      data: track ,
      contentType: false,
      processData: false
    })
  )
}

export const deleteTrack = (track) => {
  return(
    $.ajax({
      url: `api/tracks/${track.id}`,
      method: 'DELETE'
    })
  )
}

export const fetchTrack = trackId => {
  return(
    $.ajax({
      url: `api/tracks/${trackId}`,
      method: 'GET',
    })
  )
}

export const fetchTracks = () => {
  return(
    $.ajax({
      url: 'api/tracks',
      method: 'GET',
    })
  )
}

export const updateTrack = (track) => {
  return(
    $.ajax({
      url: `api/tracks/${track.get("track[id]")}`,
      method: 'PATCH',
      data: track,
      contentType: false,
      processData: false,
    })
  )
}

