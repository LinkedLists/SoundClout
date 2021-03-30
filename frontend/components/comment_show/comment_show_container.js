import {connect} from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import CommentShow from './comment_show'

const mapStateToProps = (state, ownProps) => {
  return {
    // currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    track: ownProps.track,
    comments: state.entities.comments,
    currentUsername: state.session.username,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentShow)