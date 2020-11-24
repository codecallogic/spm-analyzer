const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    APP_NAME: 'spm-analyzer',
    API: '',
    PRODUCTION: false,
    DOMAIN: 'http://localhost:3000',
  }
})