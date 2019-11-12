/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import ReactGA from 'react-ga';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Situl Civictech România a fost updatat! Vrei să reîncarci pagina pentru a vedea noutățile?`,
  )
  if (answer === true) {
    window.location.reload()
  }
}

ReactGA.initialize('UA-101116876-1', {
  debug: process.env.NODE_ENV === 'development',
})

// GDPR compliant tracking
ReactGA.ga("set", "allowAdFeatures", false);
ReactGA.ga("set", "anonymizeIp", true);
  
export const onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.location.pathname);
};