import Router from 'next/router'
import NProgress from 'nprogress'
import Page from '../components/page'

// TODO: swap with our own
import '../components/styles/nprogress.css'

Router.events.on('routerChangeStart', () => { NProgress.start()})
Router.events.on('routerChangeComplete', () => { NProgress.done()})
Router.events.on('routerChangeError', () => { NProgress.done()})


export default function MyApp({ Component, pageProps }) {
  return <Page>
    <Component {...pageProps} />
  </Page>
}
