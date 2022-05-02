const connectDB = require('./connect')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')
const orderModel = require('../models/orderModel')
const reviewModel = require('../models/reviewModel')

require('dotenv').config()

// clear all the data in database
const clearDB = async () => {
    try {
        // clear db
        await productModel.deleteMany()
        await userModel.deleteMany()
        await orderModel.deleteMany()
        await reviewModel.deleteMany()

        console.log('successfully delete sample data');
        process.exit()
    } catch (error) {
        console.log('fail to delte sample data');
        process.exit(1)
    }
}

connectDB().then(() => clearDB())