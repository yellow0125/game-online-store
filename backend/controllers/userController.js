const userModel = require('../models/userModel')
const generateToken = require('../utils/generateToken')
const asyncHandler = require('express-async-handler')
const reviewModel = require('../models/reviewModel')

// const { check, validationResult } = require('express-validator');
//@desc User Register
//@router POST/users/register
//@access public
exports.registerUser = asyncHandler(async (req, res) => {

  const { username, email, password } = req.body
  // check(username).isLength({ min: 2, max: 12 }),
  // check(email).isEmail(),
  // check('password').isLength({ min: 3 })
  const userExists = await userModel.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User Already Existed')
  }


  const user = await userModel.create({ username, email, password })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      // psw:user.password
    })
  } else {
    res.status(400)
    throw new Error('Invalid user information')
  }

}),



  //@desc User Login Authentication
  //@router POST/users/login
  //@access public
  exports.authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error('Email or Password Incorrect')
    }

  })

//@desc Obtain the details about the successful login user
//@router GET/users/profile
//@access private
exports.getUserProfile = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    // console.log('User does not exist');
    res.status(404)
    throw new Error('User does not Exist')
  }
})

//@desc UPDATE the details about user
//@router PUT/users/profile
//@access private
exports.updateUserProfile = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user._id)

  if (user) {
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }
    const updateUser = await user.save()
    res.json({
      _id: updateUser._id,
      name: updateUser.username,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: generateToken(updateUser._id),
    })
  } else {
    // console.log('User does not exist');
    res.status(404)
    throw new Error('User does not Exist')
  }

})

//get the lastest reviews.
exports.getAllReviews = asyncHandler(async (req, res) => {
  const reviews = await reviewModel.find().sort({ createdAt: -1 }).limit(3).populate(
    'user',
    'username email'
  ).populate(
    'product',
    'name'
  )
  res.json(reviews)
})

exports.getMyReviews = asyncHandler(async (req, res) => {
  const reviews = await reviewModel.find({user: req.user._id}).populate(
    'product',
    'name cover'
  )
  res.json(reviews)
})