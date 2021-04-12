import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  let store

  let tracks
  if (window.localStorage.getItem("tracks")) {
    tracks = JSON.parse(window.localStorage.getItem("tracks"))
  }
  let history 
  if (window.localStorage.getItem("history") && window.localStorage.getItem("history").length !== 0) {
    history = JSON.parse(window.localStorage.getItem("history"))
  }
  let currentUser
  if (window.localStorage.getItem('currentUser')) {
    currentUser = JSON.parse(window.localStorage.getItem("currentUser"))
  }
  let currentTrack
  if (window.localStorage.getItem('currentTrack')) {
    currentTrack = JSON.parse(window.localStorage.getItem("currentTrack"))
  }
  let prevTracks
  if (history[history.length - 1] === currentTrack.id) {
    prevTracks = history.slice(0 , history.length - 1)
  }
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: { 
        users: {[window.currentUser.id]: currentUser}, 
        tracks: tracks
      },
      session: { id: window.currentUser.id },
      ui: {
        history: history,
        prevTracks: prevTracks,
      }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})