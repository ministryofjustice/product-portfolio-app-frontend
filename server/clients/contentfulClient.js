const contentful = require('contentful');
const config = require('../config');

const contentfulClient = contentful.createClient({
  space: config.space,
  accessToken: config.accessToken,
});

module.exports = contentfulClient;
