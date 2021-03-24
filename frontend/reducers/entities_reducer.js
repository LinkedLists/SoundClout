import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import tracksReducer from './tracks_reducer'
import CommentsReducer from './comments_reducer'
import CommentForm from '../components/comment_form/comment_form';

const entitiesReducer = combineReducers({
  users: userReducer,
  tracks: tracksReducer,
  comments: CommentsReducer
})

export default entitiesReducer