import ReactGA from 'react-ga';

export const gaInit = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const reportEvent = (category, event) => {
  ReactGA.event({
    category,
    event,
  });
};
