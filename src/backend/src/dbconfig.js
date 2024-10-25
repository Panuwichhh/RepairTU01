require('dotenv').config();
const mongoose = require('mongoose');


const connectAppDB = async () => {
    try {
        //database url
        const conn = await mongoose.connect('mongodb://localhost:27017/RepairTU');
        console.log("Database connected.")
    } catch (err) {
        console.error(err)
    }
}

module.exports = { connectAppDB };

