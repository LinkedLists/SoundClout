import {connect} from 'react-redux';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    track: state.entities.tracks[ownProps.match.params.trackId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
  }
}