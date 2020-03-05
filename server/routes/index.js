const express = require('express')
const { formatRawProductData, formatRawThemeData } = require('../utils')

module.exports = function index ({ productService }) {
  const router = express.Router()
  router.get('/', async (req, res) => {
    const rawProducts = await productService.getEntries('product')
    const rawThemes = await productService.getEntries('themes')
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
