import { connect } from 'react-redux'
import Playbar from './playbar'
import { playTrack, pauseTrack } from '../../actions/playbar_actions'
import { fetchTrack } from '../../actions/track_actions'


// will this slice of state change when you navigate through a show page? --YESSSS
// playbar will be in the ui so perhaps you can grab info about the track being played
const mapStateToProps = (state) => {
  return {
    currentTrack: state.ui.playbar.currentTrack,
    currentSessionId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playbar)