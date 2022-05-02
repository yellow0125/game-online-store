const orderModel = require('../models/orderModel')
const asyncHandler = require('express-async-handler')
// CREATE one order
exports.createOrder = async (req, res) => {
  try {
    const order = new orderModel(
      {
        user: req.user._id,
        orderItems: req.body.orderItems,
        totalPrice: req.body.totalPrice,
      }
    )
    const newOrder = await order.save()
    res.send(newOrder)
  } catch (error) {
    console.log(error);
  }
}

//@desc  get order by id
//@route GET/orders/:id
//@access private
exports.getOrderById = asyncHandler(async (req, res) => {
  const order = await orderModel.findById(req.params.id).populate(
    'user',
    'username email'
  )
  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Can not find the order')
  }
})

exports.getMyOrders = asyncHandler(async (req, res) => {
  const orders = await orderModel.find({ user: req.user._id })
  res.json(orders)
})

// UPDATE order
// update isPaid and paidAt when successfully paid
exports.updatePaymentResult = asyncHandler(async (req, res) => {
  const order = await orderModel.findById(req.params.id)
  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    const paidOrder = await order.save()
    res.json(paidOrder)
  }
  else {
    res.status(404)
    throw new Error('cannot find the order')
  }
})