const config = require('../config/auth.config')
const db = require('../models/index')

const User = db.user
const Preset = db.preset

//grant access to encode and decode the jwt
const jwt = require('jsonwebtoken')
//to hash passwords
const bcrypt = require('bcryptjs')

// REGISTER
exports.register = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    //save user
    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }
        
        //send user
        res.send({ message: "user was registered successfully" })
    })
}

// LOGIN
exports.login = (req, res) => {
    User.findOne({
        username: req.body.username
    })
    .exec((err, user) => {
        if (err) {
            res.status(500).send({message: err})
            return
        }
        if (!user) {
            return res.status(404).send({message: "user not found"})
        }
        //validate the password
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password //encrypted password
        )
        //if password is not valid, return invalid message and null accessToken
        if(!passwordIsValid){
            return res.status(401).send({accessToken: null, message: 'invalid password'})
        }
        //if password is correct generate accessToken
        const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 86400 //token expires in 24 hours
        })

        //send response
        res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            accessToken: token
        })
    })
}