  const router = require('express').Router();
  const productController = require('../controllers/productControllers');

  router.get('/', productController.getAllProducts)

  router.get('/:id', productController.getProductsById)

  router.get('/search/:key', productController.searchProducts)

  router.post('/', productController.createProduct)

  module.exports = router