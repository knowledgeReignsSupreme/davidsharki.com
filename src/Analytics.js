import ReactGA from 'react-ga';

export const gaInit = () => {
  console.log(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID, []);
  ReactGA.pageview(window.location.pathname);
};

export const reportEvent = (category, event) => {
  console.log('event');
  ReactGA.event({
    category,
    event,
  });
};
