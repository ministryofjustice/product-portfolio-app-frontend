const config = require('../config');
const contentful = require('contentful');

console.log(config);

const contentfulClient = contentful.createClient({
  space: config.space,
  accessToken: config.accessToken,
});

module.exports = contentfulClient;
