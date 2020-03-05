const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const helmet = require('helmet')
const sassMiddleware = require('node-sass-middleware')

const createIndexRouter = require('./routes/index')
const createProductRouter = require('./routes/product')

module.exports = function createApp ({ productService }) { // eslint-disable-line no-shadow
  const app = express()
  nunjucks.configure(
    [
      path.join(__dirname, 'views'),
      path.join(__dirname, 'views/pages'),
      'node_modules/govuk-frontend/govuk'
    ], {
      autoescape: true,
      express: app
    })
  app.set('port', process.env.PORT || 3000)
  app.set('view engine', 'html')
  app.use(helmet())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    debug: false,
    outputStyle: 'compressed'
  }))
  app.use(express.static(path.join(__dirname, 'public')))
  app.use('/govuk-frontend', express.static(path.join(__dirname, '/node_modules/govuk-frontend/govuk')))
  app.use('/assets', express.static(path.join(__dirname, '/node_modules/govuk-frontend/govuk/assets')))

  app.use('/', createIndexRouter({ productService }))
  app.use('/', createProductRouter({ productService }))
  return app
}
