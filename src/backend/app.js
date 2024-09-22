const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://Panu:1150@cluster0.ej325.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connect Database');
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;
