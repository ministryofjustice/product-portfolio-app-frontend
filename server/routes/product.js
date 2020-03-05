const express = require('express')

module.exports = function product ({ productService }) {
  const router = express.Router()
  router.get('/product/:id', async (req, res) => {
    const product = await productService.getEntry(req.params.id)
    console.log(product)
    console.log('GET product')
    res.render('pages/product', {
      product: product.fields
    })
  })
  return router
}
