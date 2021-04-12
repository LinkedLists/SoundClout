import { combineReducers } from 'redux';
import modal from './modal_reducer';
import playbar from './playbar_reducer'
import history from './history_reducer'
import prevTracks from './prevTracks_reducer'

const uiReducer = combineReducers({
  modal,
  playbar,
  history,
  prevTracks
})

export default uiReducer