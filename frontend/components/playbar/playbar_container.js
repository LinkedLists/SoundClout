import { connect } from 'react-redux'
import Playbar from './playbar'
import { playTrack, 
  pauseTrack, receiveNewTrack, 
  receivePrevTrack, receiveNextTrack, 
  burpPrevTrack, burpNextTrack,
  refreshTrack, clearPlaybarState, } from '../../actions/playbar_actions'

  import { receiveHistory } from '../../actions/history_actions'
import { shiftPlaylist } from '../../actions/playlist_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    audio: document.getElementById('audio'),
    currentTrack: state.ui.playbar.currentTrack,
    paused: state.ui.playbar.paused,
    currentSessionId: state.session.id,
    currentUser: state.session,
    track: state.entities.tracks,
    trackHistory: state.ui.history,
    prevTracks: state.ui.prevTracks,
    nextTrack: state.ui.nextTrack,
    playlist: state.ui.playlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    receiveNewTrack: (track) => dispatch(receiveNewTrack(track)),
    refreshTrack: (track) => dispatch(refreshTrack(track)),
    clearPlaybarState: () => dispatch(clearPlaybarState()),
    receiveHistory: (history) => dispatch(receiveHistory(history)),
    sendTrack: (track) => dispatch(receiveNewTrack(track)),
    sendPrevTrack: (track) => dispatch(receivePrevTrack(track)),
    sendNextTrack: (track) => dispatch(receiveNextTrack(track)),
    burpPrevTrack: (track) => dispatch(burpPrevTrack(track)),
    burpNextTrack: (track) => dispatch(burpNextTrack(track)),
    shiftPlaylist: () => dispatch(shiftPlaylist()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playbar)