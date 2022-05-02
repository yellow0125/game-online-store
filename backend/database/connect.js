const mongoose = require('mongoose')
require('dotenv').config();

var dev_db_url = 'Please put your MongoDB Atlas uri here'

var mongoDB = process.env.MONGODB_URI || dev_db_url

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected');
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = connectDB