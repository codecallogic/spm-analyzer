const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass') 
const withVideos = require('next-videos')
 
module.exports = withVideos(withSASS(withCSS({
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    APP_NAME: 'spm-analyzer',
    API: '',
    PRODUCTION: false,
    DOMAIN: 'https://ec2-13-52-78-41.us-west-1.compute.amazonaws.com/',
  }
})))