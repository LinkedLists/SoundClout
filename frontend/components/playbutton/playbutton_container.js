import { connect } from 'react-redux'
import PlayButton from './playbutton'
import { playTrack, pauseTrack, receiveNewTrack, refreshTrack, clearPlaybarState } from '../../actions/playbar_actions'
import { receiveHistory } from '../../actions/history_actions'
import { receivePlaylist } from '../../actions/playlist_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    audio: document.getElementById('audio'),
    currentTrack: state.ui.playbar.currentTrack,
    tracks: state.entities.tracks,
    paused: state.ui.playbar.paused,
    playbar: state.ui.playbar,
    currentUser: state.session,
    track: ownProps.track,
    trackHistory: state.ui.history,
    playlist: state.ui.playlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    refreshTrack: (track) => dispatch(refreshTrack(track)),
    clearPlaybarState: () => dispatch(clearPlaybarState()),
    receiveHistory: (history) => dispatch(receiveHistory(history)),
    sendTrack: (track) => dispatch(receiveNewTrack(track)),
    generatePlaylist: (playlist) => dispatch(receivePlaylist(playlist)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton)