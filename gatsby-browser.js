/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Situl Civictech România a fost updatat! Vrei să reîncarci pagina pentru a vedea noutățile?`,
  )
  if (answer === true) {
    window.location.reload()
  }
}
