import * as CommentApiUtil from '../util/comment_api_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS'

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

const removeComments = () => {
  return {
    type: REMOVE_COMMENTS
  }
}

export const receiveComment = (comment) => (dispatch) => (
  CommentApiUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
)

export const deleteComment = (commentId) => (dispatch) => (
  CommentApiUtil.deleteComment(commentId).then( () => dispatch(removeComment(commentId)))
)


