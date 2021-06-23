import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
// import { Router } from "react-router-dom";
import App from "./app";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

const trackingId = "UA-200233490-1"
ReactGA.initialize(trackingId)
// ReactGA.pageview(window.location.pathname + window.location.search)

// history.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root