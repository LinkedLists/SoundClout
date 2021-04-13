import { connect } from 'react-redux';
import Playlist from './playlist'
import { fetchTracks } from '../../actions/track_actions'
import { refreshTrack, clearNextTrack } from '../../actions/playbar_actions'
import { receiveHistory } from '../../actions/history_actions'
import { fetchUser } from '../../actions/user_actions'
import { clearPlaylist } from '../../actions/playlist_actions'

const mapStateToProps = (state) => {
  return {
    tracks: state.entities.tracks,
    currentTrack: state.ui.playbar.currentTrack,
    trackHistory: state.ui.history,
    nextTrack: state.ui.nextTrack,
    playlist: state.ui.playlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
    refreshTrack: (track) => dispatch(refreshTrack(track)),
    // receiveNewTrack: (track) => dispatch(receiveNewTrack(track)),
    receiveHistory: (history) => dispatch(receiveHistory(history)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    clearNextTrack: () => dispatch(clearNextTrack()),
    clearPlaylist: () => dispatch(clearPlaylist()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)