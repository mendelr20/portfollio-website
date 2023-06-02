import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const trackingId = "G-KHFLY2E0DW"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactGA.set({
  // userId: auth.currentUserId(),
  // // any data that is relevant to the user session
  // // that you would like to track with google analytics
})
ReactDOM.render(
  <BrowserRouter history={history}>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);
