import { connect } from 'react-redux';
import TrackForm from './track_form';
import { updateTrack, clearTrackErrors } from '../../actions/track_actions'

const mapStateToProps = (state) => {
  return {
    uploader: state.session.id,
    errors: state.errors.trackErrors,
    formType: "Save Changes",
    trackHistory: state.ui.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    trackAction: track => dispatch(updateTrack(track)),
    clearTrackErrors: () => dispatch(clearTrackErrors()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm)