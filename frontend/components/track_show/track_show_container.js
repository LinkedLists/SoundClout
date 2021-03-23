import {connect} from 'react-redux';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';
import TrackShow from './track_show'

// going to try dispatching a receive track to the playbar from the tracks show
import { receiveNewTrack, playTrack, pauseTrack } from '../../actions/playbar_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    track: state.entities.tracks[ownProps.match.params.trackId],
    currentTrack: state.ui.playbar.currentTrack,
    playbar: state.ui.playbar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),


    // test dispatching a receive track to the playbar from the show
    sendTrack: (track) => dispatch(receiveNewTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    openModal: modal => dispatch(openModal(modal)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow)