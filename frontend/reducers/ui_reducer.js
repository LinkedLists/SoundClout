import { combineReducers } from 'redux';
import modal from './modal_reducer';
import playbar from './playbar_reducer'
import history from './history_reducer'

const uiReducer = combineReducers({
  modal,
  playbar,
  history,
})

export default uiReducer