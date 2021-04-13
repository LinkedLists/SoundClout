import { combineReducers } from 'redux';
import modal from './modal_reducer';
import playbar from './playbar_reducer'
import history from './history_reducer'
import prevTracks from './prevTracks_reducer'
import nextTrack from './nextTrack_reducer'
import playlist from './playlist_reducer'
import genre from './genre_reducer'

const uiReducer = combineReducers({
  modal,
  playbar,
  history,
  prevTracks,
  nextTrack,
  playlist,
  genre
})

export default uiReducer