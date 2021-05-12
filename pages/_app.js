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
        <title>SPM Analyzer - iOS and Android App for Amazon Sellers - Sales Estimator - Rank Calculator</title>
        <link rel="stylesheet" href="/fonts/fonts.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/fgb2wcm.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/fgb2wcm.css"></link>
        <meta name="description" content="How to make money on amazon in 2021, amazon sellers product research tool lets users gather product data by its best seller rank to estimate the sales per month by sales rank. Quickly estimate the sales per month of any product on amazon with the sales rank. The on the go ios app for amazon product research, similar to jungle scout estimator and amz scout calculator tools."></meta>
        <meta name="keywords" content="most accurate amazon sales estimator tool, sales rank calculator, amz fba calculator, bsr estimator tool, amazon best seller rank, amz scout fba research, amazon research tool, ios android spm analyzer sales rank estimator, jungle scout tool."></meta>
        <script async src="//tinder.thrivecart.com/embed/v1/thrivecart.js" id="tc-spmanalyzer-1-SGJZOP"></script>
        <script async src="//tinder.thrivecart.com/embed/v1/thrivecart.js" id="tc-spmanalyzer-2-K7QF5W"></script>
      </>
    </Head>
    <Component {...pageProps} />
    </>
}

export default MyApp
