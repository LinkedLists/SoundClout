export const createTrack = track => {
  return(
    $.ajax({
      url: 'api/tracks',
      method: 'POST',
      data: { track }
    })
  )
}

export const deleteTrack = (trackId) => {
  return(
    $.ajax({
      url: `api/tracks/${trackId}`,
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


// bring this back when you have update ready

// export const updateTrack = (track) => {
//   return(
//     $.ajax({
//       url: `api/tracks/${track.id}`,
//       method: 'PATCH',
//       data: { track }
//     })
//   )
// }

