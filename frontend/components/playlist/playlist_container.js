import { connect } from 'react-redux';
import Playlist from './playlist'
import { fetchTracks } from '../../actions/track_actions'
import { playTrack, pauseTrack, receiveNewTrack, refreshTrack, clearPlaybarState, clearNextTrack } from '../../actions/playbar_actions'
import { receiveHistory } from '../../actions/history_actions'
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state) => {
  return {
    tracks: state.entities.tracks,
    currentTrack: state.ui.playbar.currentTrack,
    trackHistory: state.ui.history,
    nextTrack: state.ui.nextTrack
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
    refreshTrack: (track) => dispatch(refreshTrack(track)),
    // receiveNewTrack: (track) => dispatch(receiveNewTrack(track)),
    receiveHistory: (history) => dispatch(receiveHistory(history)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    clearNextTrack: () => dispatch(clearNextTrack())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)