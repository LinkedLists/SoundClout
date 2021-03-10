import { connect } from 'react-redux';
import UploadForm from './upload_form'
import { createTrack } from '../../actions/track_actions'

const mapStateToProps = (state) => {
  return {
    uploader: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTrack: track => dispatch(createTrack(track)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm)