const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    StudentID : String,
    Password :{
        type : String
    }
},{timestamps : true});

export default mongoose.model('users',userSchema);