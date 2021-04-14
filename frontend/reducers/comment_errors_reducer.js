import { RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';

const CommentErrorsReducer = (oldState = [], action) => {
  switch(action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return Object.assign({}, oldState, action.errors)
    default:
      return oldState
  }
}

export default CommentErrorsReducer