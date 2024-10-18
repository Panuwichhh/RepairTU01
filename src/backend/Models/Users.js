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

// userSchema.pre('save', function(next) {
//     constuser = this

//     bcrypt.hash(user.password, 10).then(hash => {
//         user.password = hash
//         next()
//     }).catch(error => {
//         console.error(error)
//     })
// })

const User = mongoose.model('User', userSchema)
module.exports = User