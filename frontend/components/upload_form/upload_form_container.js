import { connect } from 'react-redux';
import UploadForm from './upload_form'
import { createTrack, clearTrackErrors } from '../../actions/track_actions'

const mapStateToProps = (state) => {
  return {
    uploader: state.session.id,
    errors: state.errors.trackErrors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTrack: track => dispatch(createTrack(track)),
    clearTrackErrors: () => dispatch(clearTrackErrors()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm)