import ReactGA from "react-ga";

const googleAnalyticsEnable = () => {
  const TRACKING_ID = "UA-201069012-1";
  ReactGA.initialize(TRACKING_ID);
};

export default googleAnalyticsEnable;
