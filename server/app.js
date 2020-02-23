const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const helmet = require('helmet')

const createIndexRouter = require('./routes/index')

module.exports = function createApp () { // eslint-disable-line no-shadow
  const app = express()

  nunjucks.configure(
    [
      path.join(__dirname, 'views')
    ], {
      autoescape: true,
      express: app
    })
  app.set('port', process.env.PORT || 3000)
  app.set('view engine', 'html')
  app.use(helmet())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use('/', createIndexRouter())
  return app
}
