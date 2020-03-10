const production = process.env.NODE_ENV === 'production'

module.exports = {
  appVersion: '0.1.0',
  appName: 'HMPPS Digital Products',
  space: process.env.SPACEID,
  accessToken: process.env.ACCESSTOKEN,
  isProduction: production,
  staticResourceCacheDuration: 1
}
