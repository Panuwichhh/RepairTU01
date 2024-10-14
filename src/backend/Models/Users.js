const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
})

export default mongoose.model('users',userSchema);