const express = require('express')
const orderController = require('../controllers/orderController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', protect, orderController.createOrder)
router.get('/myorders', protect, orderController.getMyOrders)
router.get('/:id', protect, orderController.getOrderById)
router.put('/:id/pay', protect, orderController.updatePaymentResult)

module.exports = router
