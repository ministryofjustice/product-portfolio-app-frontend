const ExpressCache = require('./expressCacheMiddleware');
const cacheManager = require('cache-manager');

const cacheMiddleware = new ExpressCache(
  cacheManager.caching({
    store: 'memory', max: 10000, ttl: 3600,
  }),
);

module.exports = cacheMiddleware;
