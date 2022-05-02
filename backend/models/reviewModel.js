const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'products',
    },
    rating: {
      type: Number,
    },
    review: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const reviewModel = mongoose.model('reviews', reviewSchema)

module.exports = reviewModel