const express = require('express')
const path = require('path')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const orderRoute = require('./routes/orderRoute')
const connectDB = require('./database/connect')
const bodyParser = require('body-parser')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// get PayPal client ID
app.get('/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})

app.use('/products', productRoute)
app.use('/users', userRoute)
app.use('/orders', orderRoute)

// deployment prep
// resolve current dir name
const __direcname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__direcname, '/frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__direcname, 'frontend/build/index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Hello')
    })
}


app.use(notFound)
app.use(errorHandler)

// connect MongoDB then run server
connectDB().then(() =>
    app.listen(process.env.PORT || 5000, () => {
        console.log('server is running on port 5000');
    })
)