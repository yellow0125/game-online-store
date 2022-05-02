const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users',
        },
        orderItems: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'products',
                },
                name: {
                    type: String,
                    required: true
                },
                qty: {
                    type: Number,
                    required: true
                },
                cover: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
            default: 0
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false
        },
        paidAt: {
            type: Date
        },
    },
    {
        timestamps: true,
    }
)

const orderModel = mongoose.model('orders', orderSchema)

module.exports = orderModel