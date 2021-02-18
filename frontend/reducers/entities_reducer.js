import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import tracksReducer from './tracks_reducer'

const entitiesReducer = combineReducers({
  users: userReducer,
  tracks: tracksReducer
})

export default entitiesReducer