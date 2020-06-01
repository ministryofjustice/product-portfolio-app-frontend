/* eslint-disable no-console */
const express = require('express');
const richTextRenderer = require('@contentful/rich-text-html-renderer');

module.exports = function product({ productService }) {
  const router = express.Router();
  router.get('/product/:id', async (req, res) => {
    const productEntry = await productService.getEntry(req.params.id);
    console.log('GET product');
    const outcomes = richTextRenderer.documentToHtmlString(product.fields.productOutcomes);
    const relatedProductsOrServices = richTextRenderer.documentToHtmlString(
      product.fields.productRelatedProductsOrServices,
    );
    const exampleFeatures = richTextRenderer.documentToHtmlString(
      product.fields.productExampleFeatures,
    );
    productEntry.fields.productOutcomes = outcomes;
    productEntry.fields.productRelatedProductsOrServices = relatedProductsOrServices;
    productEntry.fields.productExampleFeatures = exampleFeatures;
    res.render('pages/product', {
      product: productEntry.fields,
    });
  });
  return router;
};
