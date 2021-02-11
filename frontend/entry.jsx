import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// import configureStore from './store/store'
// import Root from './components/root';

const store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;
document.addEventListener('DOMContentLoaded', () => {
  // const root = document.getElementById('root');
  // ReactDOM.render(<h1>hello</h1>, root);
})