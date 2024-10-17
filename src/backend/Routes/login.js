const User = require('../Models/Users')

module.exports = (req, res) => {
    User.create(req, body).then(() => {
        console.log("User registered susccessfully")
        res.redirect('/')
    }).catch((error) => {
        console.log(error)
    })
}