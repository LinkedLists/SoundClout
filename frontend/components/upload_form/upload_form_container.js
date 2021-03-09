import {connect} from 'react-redux';
import UploadForm from './upload_form'

const mapStateToProps = (state) => {
  return {
    uploader: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm)