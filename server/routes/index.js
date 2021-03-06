/* eslint-disable no-console */
const express = require('express');
const { formatRawProductData, formatRawThemeData, statuses } = require('../utils');

module.exports = function index({ productService }) {
  const router = express.Router();
  router.get('/', async (req, res) => {
    const rawProducts = await productService.getEntries('product');
    const rawThemes = await productService.getEntries('themes');
    const products = formatRawProductData(rawProducts);
    const themes = formatRawThemeData(rawThemes);
    console.log('GET index');
    res.render('pages/index', {
      products,
      statuses,
      themes,
    });
  });
  return router;
};
