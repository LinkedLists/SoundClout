import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import tracksReducer from './tracks_reducer'
import CommentsReducer from './comments_reducer'

const entitiesReducer = combineReducers({
  users: userReducer,
  tracks: tracksReducer,
  comments: CommentsReducer
})

export default entitiesReducer