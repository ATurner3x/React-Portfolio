import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

const sendToAnalytics = ({ name, value }) => {
  // Replace this with your own analytics integration code
  console.log(`[${name}] Metric value: ${value}`);
};

const reportWebVitals = () => {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getLCP(sendToAnalytics);
  getFCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
};

export default reportWebVitals;
