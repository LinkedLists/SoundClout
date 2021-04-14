import {connect} from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form'


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session,
    currentUserId: state.session.id,
    tracks: state.entities.tracks,
    track: ownProps.track,
    trackHistory: state.ui.history,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)