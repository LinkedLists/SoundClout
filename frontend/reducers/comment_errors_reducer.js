import { RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';

// ActiveRecord will be storing validation errors in an array
const CommentErrorsReducer = (oldState = [], action) => {
  switch(action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return Object.assign({}, oldState, action.errors)
    // case CLEAR_TRACK_ERRORS:
    //   return []
    default:
      return oldState
  }
}

export default CommentErrorsReducer