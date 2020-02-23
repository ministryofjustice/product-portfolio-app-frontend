const express = require('express')

module.exports = function index () {
  const router = express.Router()
  router.get('/', (req, res) => {
    console.log('GET indec')
    res.render('pages/index')
  })
  return router
}
