import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return <div></div>;
};

const trackingId = "G-KHFLY2E0DW"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

ReactDOM.render(
  <BrowserRouter>
    <RouteChangeTracker />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
