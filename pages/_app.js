import Head from 'next/head'
import '../styles/globals.css'
import '../styles/app.css'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.start();
Router.onRouteChangeError = url => NProgress.done();

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <>
        <title>SPM-Analyzer</title>
        <link rel="stylesheet" href="/fonts/fonts.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/fgb2wcm.css"></link>
      </>
    </Head>
    <Component {...pageProps} />
    </>
}

export default MyApp
