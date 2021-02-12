import ReactGA from 'react-ga';

const GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
const env = process.env.NODE_ENV;
let gaPageView = (segment: string) => {
  // eslint-disable-next-line no-console
};
if (env === 'production' && GA_ID) {
  ReactGA.initialize(GA_ID);
  /**
   * Registrar page view no GA
   * @param {String} segment pathname acessado
   */
  gaPageView = segment => {
    return ReactGA.pageview(segment);
  };
}

const accessLogger = {
  pageView: (segment: string) => {
    gaPageView(segment);
  },
};

export default accessLogger;
