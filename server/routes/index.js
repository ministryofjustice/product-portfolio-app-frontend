const express = require('express')
const { formatRawProductData, formatRawThemeData } = require('../utils')

module.exports = function index ({ productService }) {
  const router = express.Router()
  router.get('/', async (req, res) => {
    const rawProducts = await productService.getContent('product')
    const rawThemes = await productService.getContent('themes')
    const products = formatRawProductData(rawProducts)
    const statuses = ['backlog', 'discovery', 'alpha', 'beta', 'live']
    const themes = formatRawThemeData(rawThemes)
    console.log('GET index')
    console.log(products)
    res.render('pages/index', {
      products,
      statuses,
      themes
    })
  })
  return router
}
