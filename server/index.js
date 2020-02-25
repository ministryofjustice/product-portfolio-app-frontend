const createApp = require('./app')
const contentfulClient = require('./clients/contentfulClient')
const createProductService = require('./services/products')

const productService = createProductService(contentfulClient)

const app = createApp({ productService })

module.exports = app
