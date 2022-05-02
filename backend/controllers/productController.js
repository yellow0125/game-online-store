const productModel = require('../models/productModel');
const reviewModel = require('../models/reviewModel');
// const asyncHandler = require('express-async-handler')
// READ all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.json(products)
    } catch (error) {
        console.log(error);
    }
}

// READ search products
exports.getSearchProducts = async (req, res) => {
    try {
        // console.log(req.params.searchCriteria);
        const criteria =
        {
            name: {
                $regex: req.params.searchCriteria,
                $options: 'i'
            }
        }

        const products = await productModel.find({ ...criteria })
        res.json(products)
    } catch (error) {
        console.log(error);
    }
}

// READ one product by id
exports.getOneProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await productModel.findById(id)
        if (!product) {
            console.log('no item found with this id');
        }
        else {
            res.json(product)
        }
    } catch (error) {
        console.log(error);
    }
}

// get top3 products
// GET/products/top
exports.getTopProducts = async (req, res) => {
    try {
        const id = req.params.id
        const products = await productModel.find().sort({ price: -1 }).limit(3)
        res.json(products)

    } catch (error) {
        console.log(error);
    }
}

// CREATE one product
exports.createOneProduct = async (req, res) => {
    try {
        const product = new productModel(
            {
                name: req.body.name,
                cover: req.body.cover,
                tag: req.body.tag,
                releasedate: req.body.releasedate,
                category: req.body.category,
                developer: req.body.developer,
                publisher: req.body.publisher,
                description: req.body.description,
                price: req.body.price,
                countInStock: req.body.countInStock,
                rating: req.body.rating,
                numReviews: req.body.numReviews,
            }
        )
        const newProduct = await product.save()
        res.send(newProduct)
    } catch (error) {
        console.log(error);
    }
}

// DELETE one product by id
exports.deleteOneProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await productModel.findById(id)
        if (!product) {
            console.log('no item found with this id');
        }
        else {
            await product.remove()
            res.json({ message: 'delete success' })
        }
    } catch (error) {
        console.log(error);
    }
}

// UPDATE one product
exports.updateOneProductconst = async (req, res) => {

    const {
        name,
        cover,
        tag,
        releasedate,
        category,
        developer,
        publisher,
        description,
        price,
        countInStock,
        rating,
        numReviews,
    } = req.body

    const id = req.params.id
    const product = await productModel.findById(id)
    if (!product) {
        console.log('no item found with this id');
    } else {
        product.name = name
        product.cover = cover
        product.tag = tag
        product.releasedate = releasedate
        product.category = category
        product.developer = developer
        product.publisher = publisher
        product.description = description
        product.price = price
        product.countInStock = countInStock
        product.rating = rating
        product.numReviews = numReviews

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    }
}


// CREATE product review
exports.createReview = async (req, res) => {
    try {
        const { rating, review } = req.body
        const id = req.params.id
        const product = await productModel.findById(id)
        if (!product) {
            console.log('no item found with this id');
        } else {
            // create review
            const data = new reviewModel(
                {
                    user: req.user._id,
                    product: id,
                    rating: parseInt(rating),
                    review,

                }
            )
            const newData = await data.save()

            const newReview = {
                user: req.user._id,
                username: req.user.username,
                rating: parseInt(rating),
                review,
            }
            product.reviews.push(newReview)
            // update number of reviews and rating
            product.numReviews = product.reviews.length
            const totalRating = product.reviews.reduce((sum, review) =>
                sum + review.rating, 0
            )
            product.rating = totalRating / product.reviews.length
            const updatedProduct = await product.save()
            res.json(updatedProduct)


        }

    } catch (error) {
        console.log(error);
    }
}

//create product sample on productlist page
exports.createProduct = async (req, res) => {
    try {
        const product = new productModel(
            {
                user: req.user._id,
                name: 'sample name',
                cover: '/images/sample.jpg',
                tag: 'Action sample',
                releasedate: '21 Apr, 2022',
                category: 'Action sample',
                developer: 'X-box sample',
                publisher: 'X-box sample',
                description: 'sample description',
                price: 0,
                countInStock: 99,
                rating: 0,
                numReviews: 0,
                highlight: 'sample highlight'
            }
        )
        const newProduct = await product.save()
        res.json(newProduct)
    } catch (error) {
        console.log(error);
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const {
            name,
            cover,
            tag,
            releasedate,
            category,
            developer,
            publisher,
            description,
            price,
            countInStock,
            rating,
            numReviews,
            highlight
        } = req.body

        const product = await productModel.findById(req.params.id)
        res.json(newProduct)
        if (!product) {
            console.log('no item found with this id');
        } else {
            product.name = name
            product.cover = cover
            product.tag = tag
            product.releasedate = releasedate
            product.category = category
            product.developer = developer
            product.publisher = publisher
            product.description = description
            product.price = price
            product.countInStock = countInStock
            product.rating = rating
            product.numReviews = numReviews
            product.highlight = highlight

            const updatedProduct = await product.save()
            res.json(updatedProduct)
        }
    } catch (error) {
        console.log(error);
    }
}
