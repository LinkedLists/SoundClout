import {connect} from 'react-redux';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';
import TrackShow from './track_show'

// test dispatching a receive track to the playbar from the show
import { receiveTrack } from '../../actions/playbar_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    track: state.entities.tracks[ownProps.match.params.trackId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),


    // test dispatching a receive track to the playbar from the show
    sendTrack: (track) => dispatch(receiveTrack(track))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow)