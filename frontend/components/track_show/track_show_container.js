import {connect} from 'react-redux';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';
import TrackShow from './track_show'
import { receiveNewTrack, playTrack, pauseTrack } from '../../actions/playbar_actions';
import { removeComments } from '../../actions/comment_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    track: state.entities.tracks[ownProps.match.params.trackId],
    currentTrack: state.ui.playbar.currentTrack,
    playbar: state.ui.playbar,
    currentUserId: state.session.id,
    currentUser: state.session,
    audio: document.getElementById('audio'),
    history: state.ui.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    sendTrack: (track) => dispatch(receiveNewTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    removeComments: () => dispatch(removeComments()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow)