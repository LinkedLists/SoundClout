import { connect } from 'react-redux'
import Playbar from './playbar'
import { playTrack, 
  pauseTrack, receiveNewTrack, 
  receivePrevTrack, receiveNextTrack, 
  burpPrevTrack, burpNextTrack,
  refreshTrack, clearPlaybarState,
  saveNextTrack, savePrevTrack } from '../../actions/playbar_actions'

import { receiveHistory } from '../../actions/history_actions'
// import { fetchTrack } from '../../actions/track_actions'


const mapStateToProps = (state) => {
  return {
    audio: document.getElementById('audio'),
    currentTrack: state.ui.playbar.currentTrack,
    paused: state.ui.playbar.paused,
    currentSessionId: state.session.id,
    currentUser: state.session,
    track: state.entities.tracks,
    trackHistory: state.ui.history,
    prevTracks: state.ui.prevTracks,
    nextTrack: state.ui.nextTrack
  }
}

// the playbar should not be fetching tracks on its own because they should be
// sent when a user wants to play something
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
    saveNextTrack: (track) => dispatch(saveNextTrack(track)),
    savePrevTrack: (track) => dispatch(savePrevTrack(track)),
    burpPrevTrack: (track) => dispatch(burpPrevTrack(track)),
    burpNextTrack: (track) => dispatch(burpNextTrack(track)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playbar)