import { connect } from 'react-redux';
import TrackForm from './track_form';
import { updateTrack, clearTrackErrors } from '../../actions/track_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    uploader: state.session.id,
    errors: state.errors.trackErrors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTrack: track => dispatch(updateTrack(track)),
    clearTrackErrors: () => dispatch(clearTrackErrors()),
    closeModal: () => dispatch(closeModal()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm)