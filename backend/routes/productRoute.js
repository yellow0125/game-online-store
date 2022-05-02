const express = require('express')
const productController = require('../controllers/productController')
const { protect,admin } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', productController.getAllProducts)
router.post('/', protect,admin,productController.createProduct)
router.get('/', productController.getAllProducts)
router.get('/top', productController.getTopProducts)
router.get('/:id', productController.getOneProduct)
router.delete('/:id',protect,admin, productController.deleteOneProduct)
router.put('/:id',protect,admin, productController.updateProduct)
router.get('/search/:searchCriteria', productController.getSearchProducts)
router.post('/:id/reviews', protect, productController.createReview)

module.exports = router
