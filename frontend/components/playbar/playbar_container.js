import { connect } from 'react-redux'
import Playbar from './playbar'
import { playTrack, pauseTrack, receiveNewTrack, refreshTrack, clearPlaybarState } from '../../actions/playbar_actions'
import { receiveHistory } from '../../actions/history_actions'
// import { fetchTrack } from '../../actions/track_actions'


// will this slice of state change when you navigate through a show page? --YES
// playbar will be in the ui so perhaps you can grab info about the track being played
const mapStateToProps = (state) => {
  return {
    audio: document.getElementById('audio'),
    currentTrack: state.ui.playbar.currentTrack,
    paused: state.ui.playbar.paused,
    currentSessionId: state.session.id,
    currentUser: state.session,
    track: state.entities.tracks
    // currentUser: state.entities.users[state.session.id],
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
    receiveHistory: (history) => dispatch(receiveHistory(history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playbar)