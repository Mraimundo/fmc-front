import ReactGA from 'react-ga';

/**
 * Integração com o google analytics
 */
const GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
const env = process.env.NODE_ENV;
let gaPageView = (segment: string) => {
  console.log(segment);
};
/* console.log(process.env.GOOGLE_ANALYTICS_ID); */
if (env === 'production' && GA_ID) {
  ReactGA.initialize(GA_ID);
  /**
   * Registrar page view no GA
   * @param {String} segment pathname acessado
   */
  gaPageView = segment => ReactGA.pageview(segment);
}

/**
 * Registrar log de acesso no Vendavall
 * @ param {String} segment pathname acessado
 * /
const vendavallPageView = segment => {
  /*console.tron.log(`TODO: Implementar log de acesso no vendavall [${segment}]`);* /
}; */

const accessLogger = {
  pageView: (segment: string) => {
    // vendavallPageView(segment);
    gaPageView(segment);
  },
};

export default accessLogger;
