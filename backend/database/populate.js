const connectDB = require('./connect')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')
const orderModel = require('../models/orderModel')
const products = require('../data/products')
const users = require('../data/users')
const reviewModel = require('../models/reviewModel')

require('dotenv').config()

// populate database with sample products and users
const populateDB = async () => {
    try {
        // initialize db
        await productModel.deleteMany()
        await userModel.deleteMany()
        await orderModel.deleteMany()
        await reviewModel.deleteMany()

        // insert sample data
        // insert sample users
        const allUsers = await userModel.insertMany(users)
        // insert sample products
        const adminUser = allUsers[0]._id
        const allProducts = products.map(product => {
            return { user: adminUser, ...product }
        })
        await productModel.insertMany(allProducts)

        console.log('successfully insert sample data');
        process.exit()
    } catch (error) {
        console.log('fail to insert sample data');
        process.exit(1)
    }
}

connectDB().then(() => populateDB())