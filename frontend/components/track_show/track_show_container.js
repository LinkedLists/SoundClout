import {connect} from 'react-redux';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';
import TrackShow from './track_show'

// test dispatching a receive track to the playbar from the show
import { receiveNewTrack, playTrack, pauseTrack } from '../../actions/playbar_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    track: state.entities.tracks[ownProps.match.params.trackId],
    currentTrack: state.ui.playbar.currentTrack
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),


    // test dispatching a receive track to the playbar from the show
    sendTrack: (track) => dispatch(receiveNewTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow)