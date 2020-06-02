/* eslint-disable no-console */
const express = require('express');
const richTextRenderer = require('@contentful/rich-text-html-renderer');

module.exports = function product({ productService }) {
  const router = express.Router();
  router.get('/product/:id', async (req, res) => {
    const { fields } = await productService.getEntry(req.params.id);
    console.log('GET product');
    const outcomes = richTextRenderer.documentToHtmlString(fields.productOutcomes);
    const relatedProductsOrServices = richTextRenderer.documentToHtmlString(
      fields.productRelatedProductsOrServices,
    );
    const exampleFeatures = richTextRenderer.documentToHtmlString(
      fields.productExampleFeatures,
    );
    fields.productOutcomes = outcomes;
    fields.productRelatedProductsOrServices = relatedProductsOrServices;
    fields.productExampleFeatures = exampleFeatures;
    res.render('pages/product', {
      product: fields,
    });
  });
  return router;
};
