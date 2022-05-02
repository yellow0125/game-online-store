const express = require('express')
const userController = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/login', userController.authUser)
router.post('/register', userController.registerUser)
router
  .route('/profile')
  .get(protect, userController.getUserProfile)
  .put(protect, userController.updateUserProfile)
router.get('/reviews', userController.getAllReviews)
router.get('/myreviews', protect,userController.getMyReviews)

module.exports = router
