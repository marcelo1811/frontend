import Page from '../components/page'

export default function MyApp({ Component, PageProps }) {
  return <Page>
    <Component {...PageProps} />
  </Page>
}
