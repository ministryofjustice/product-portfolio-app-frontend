const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const helmet = require('helmet');
const noCache = require('nocache');
const compression = require('compression');

const appConfig = require('./config');
const createIndexRouter = require('./routes/index');
const createProductRouter = require('./routes/product');

const cacheControl = { maxAge: appConfig.staticResourceCacheDuration * 1000 };

module.exports = function createApp({ productService }) { // eslint-disable-line no-shadow
  const app = express();
  nunjucks.configure(
    [
      path.join(__dirname, 'views'),
      path.join(__dirname, 'views/pages'),
      'node_modules/govuk-frontend/govuk',
    ], {
      autoescape: true,
      express: app,
    },
  );
  app.set('port', process.env.PORT || 3000);
  app.set('view engine', 'html');
  app.use(helmet());
  app.use(noCache()); // Don't cache dynamic resources
  app.use(compression());

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/public', express.static(path.join(__dirname, 'public'), cacheControl));
  app.use('/govuk-frontend', express.static(path.join(__dirname, '../node_modules/govuk-frontend/govuk'), cacheControl));
  app.use('/assets', express.static(path.join(__dirname, '../node_modules/govuk-frontend/govuk/assets'), cacheControl));

  app.use('/', createIndexRouter({ productService }));
  app.use('/', createProductRouter({ productService }));
  return app;
};
