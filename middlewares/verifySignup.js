const db = require('../models/index')
const User = db.user;

//check if username or email already exist in db
const checkDuplicateUsernameOrEmail = (req, res, next) => {
    //username
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }
        if (user) {
            res.status(400).send({ message: "Failed! Username already in use!"})
            return
        }

        //email
        User.findOne({
            email: req.body.email
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }
            if (user) {
                res.status(400).send({ message: "Failed! Email is already in use!"})
            }
            next()
        })
    })
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail
}

module.exports = verifySignup