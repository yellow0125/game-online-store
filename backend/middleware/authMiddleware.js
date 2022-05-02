const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req, res, next) => {
  let token
  // console.log(req.headers.authorization)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // console.log(decoded)
      req.user = await userModel.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      res.status(401)
      throw new Error('Unauthorized! Token authentication failed  ')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Unauthorized! Please Login first')
  }
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not an authorized administrator')
  }
}


module.exports = { protect,admin }

