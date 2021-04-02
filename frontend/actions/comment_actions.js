import * as CommentApiUtil from '../util/comment_api_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = (trackCommentPair) => {
  return {
    type: REMOVE_COMMENT,
    trackCommentPair
  };
};
// const removeComment = (commentId) => {
//   return {
//     type: REMOVE_COMMENT,
//     commentId
//   };
// };

export const removeComments = () => {
  return {
    type: REMOVE_COMMENTS
  }
}

export const receiveCommentErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
}

export const createComment = (comment) => (dispatch) => (
  CommentApiUtil.createComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    error => dispatch(receiveCommentErrors(error.responseJSON))
  )
)

export const deleteComment = (trackCommentPair) => (dispatch) => (
  CommentApiUtil.deleteComment(trackCommentPair[1]).then( () => dispatch(removeComment(trackCommentPair)))
)

// export const deleteComment = (commentId) => (dispatch) => (
//   CommentApiUtil.deleteComment(commentId).then( () => dispatch(removeComment(commentId)))
// )


