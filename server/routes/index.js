const express = require('express')
const formatRawProductData = require('util')

module.exports = function index ({ productService }) {
  const router = express.Router()
  router.get('/', async (req, res) => {
    const rawProducts = await productService.getProducts('product')
    const products = formatRawProductData(rawProducts)
    console.log('GET index')
    res.render('pages/index', { products })
  })
  return router
}
