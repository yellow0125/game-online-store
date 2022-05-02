const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema(
    {
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users',
        },
        username:
        {
            type: String,
            required: true
        },
        rating:
        {
            type: Number,
            required: true,
            default: 0
        },
        review:
        {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

var productSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users',
        },
        name: {
            type: String,
            required: true,
        },
        cover: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
            required: true,
        },
        releasedate: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        developer: {
            type: String,
            required: true,
        },
        publisher: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        highlight: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        countInStock: {
            type: Number,
            required: true,
            default: 0,
        },
        rating: {
            type: Number,
            required: true,
            default: 0
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0
        },
        reviews: [reviewSchema],
    },
    {
        timestamps: true,
    }
)

const productModel = mongoose.model('products', productSchema)

module.exports = productModel