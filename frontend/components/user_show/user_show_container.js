import {connect} from 'react-redux';
import { fetchTracks, deleteTrack } from '../../actions/track_actions';
import UserShow from './user_show'
import { receiveNewTrack, playTrack, pauseTrack, clearPlaybarState } from '../../actions/playbar_actions';
import { fetchUser } from '../../actions/user_actions'
import { removeComments } from '../../actions/comment_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    track: Object.values(state.entities.tracks)[0],
    user: state.entities.users[ownProps.match.params.userId],
    tracks: state.entities.tracks,
    currentTrack: state.ui.playbar.currentTrack,
    playbar: state.ui.playbar,
    sessionId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    audio: document.getElementById('audio'),
    trackHistory: state.ui.history,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendTrack: (track) => dispatch(receiveNewTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    clearPlaybarState: () => dispatch(clearPlaybarState()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchTracks: () => dispatch(fetchTracks()),
    removeComments: () => dispatch(removeComments()),
    clearPlaybarState: () => dispatch(clearPlaybarState()),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)