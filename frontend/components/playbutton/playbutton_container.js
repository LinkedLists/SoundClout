import { connect } from 'react-redux'
import PlayButton from './playbutton'
import { playTrack, pauseTrack, receiveNewTrack, refreshTrack, clearPlaybarState } from '../../actions/playbar_actions'
import { receiveHistory } from '../../actions/history_actions'
// import { fetchTrack } from '../../actions/track_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    audio: document.getElementById('audio'),
    currentTrack: state.ui.playbar.currentTrack,
    paused: state.ui.playbar.paused,
    playbar: state.ui.playbar,
    // currentSessionId: state.session.id,
    currentUser: state.session,
    track: ownProps.track,
    trackHistory: state.ui.history
  }
}

// the playbar should not be fetching tracks on its own because they should be
// sent when a user wants to play something
const mapDispatchToProps = (dispatch) => {
  return {
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    // receiveNewTrack: (track) => dispatch(receiveNewTrack(track)),
    refreshTrack: (track) => dispatch(refreshTrack(track)),
    clearPlaybarState: () => dispatch(clearPlaybarState()),
    receiveHistory: (history) => dispatch(receiveHistory(history)),
    sendTrack: (track) => dispatch(receiveNewTrack(track))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton)