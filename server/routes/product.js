const express = require('express')

module.exports = function product ({ productService }) {
  const router = express.Router()
  router.get('/product/:id', (req, res) => {
    console.log('GET product')
    res.render('pages/product', {
      // product: product.getById(req.params.id)
    })
  })
  return router
}
