const express = require('express')
const richTextRenderer = require('@contentful/rich-text-html-renderer')

module.exports = function product ({ productService }) {
  const router = express.Router()
  router.get('/product/:id', async (req, res) => {
    const product = await productService.getEntry(req.params.id)
    console.log('GET product')
    product.fields.productOutcomes = richTextRenderer.documentToHtmlString(product.fields.productOutcomes)
    product.fields.productRelatedProductsOrServices = richTextRenderer.documentToHtmlString(product.fields.productRelatedProductsOrServices)
    product.fields.productExampleFeatures = richTextRenderer.documentToHtmlString(product.fields.productExampleFeatures)
    res.render('pages/product', {
      product: product.fields
    })
  })
  return router
}
