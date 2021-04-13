export const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST'

export const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

export const clearPlaylist = () => {
  return {
    type: CLEAR_PLAYLIST
  };
};
