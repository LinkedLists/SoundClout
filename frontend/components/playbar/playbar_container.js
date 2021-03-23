import { connect } from 'react-redux'
import Playbar from './playbar'
import { playTrack, pauseTrack, receiveNewTrack, clearPlaybarState } from '../../actions/playbar_actions'
// import { fetchTrack } from '../../actions/track_actions'


// will this slice of state change when you navigate through a show page? --YES
// playbar will be in the ui so perhaps you can grab info about the track being played
const mapStateToProps = (state) => {
  return {
    currentTrack: state.ui.playbar.currentTrack,
    paused: state.ui.playbar.paused,
    currentSessionId: state.session.id
  }
}

// the playbar should not be fetching tracks on its own because they should be
// sent when a user wants to play something
const mapDispatchToProps = (dispatch) => {
  return {
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    receiveNewTrack: (track) => dispatch(receiveNewTrack(track)),
    clearPlaybarState: () => dispatch(clearPlaybarState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playbar)