import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import ReactGA from 'react-ga'
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
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
  // let currentTrack
  // if (window.localStorage.getItem('currentTrack')) {
  //   currentTrack = JSON.parse(window.localStorage.getItem("currentTrack"))
  // }
  let prevTracks
  if (window.localStorage.getItem('prevTracks')) {
    prevTracks = JSON.parse(window.localStorage.getItem("prevTracks"))
  }
  let nextTrack
  if (window.localStorage.getItem('nextTrack')) {
    nextTrack = JSON.parse(window.localStorage.getItem("nextTrack"))
  }
  let playlist
  if (window.localStorage.getItem('playlist')) {
    playlist = JSON.parse(window.localStorage.getItem("playlist"))
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
        nextTrack: nextTrack,
        playlist: playlist
      }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})