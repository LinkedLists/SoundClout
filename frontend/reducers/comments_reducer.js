import { RECEIVE_COMMENT, REMOVE_COMMENT, REMOVE_COMMENTS } from '../actions/comment_actions'

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment
      return nextState
    case REMOVE_COMMENT:
      delete newState[action.commentId]
      return newState
    case REMOVE_COMMENTS:
      return {}
    default: 
      return oldState
  }
}
