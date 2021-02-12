const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')
const db = require('../models/index')

const User = db.user

//verify web token
const verifyWebToken = (req, res, next) => {
    let token = req.headers['x-access-token']
    //if no token, send error
    if(!token){
        return res.status(403).send({message: "No token provided"})
    }
    //jwt will try to verify token
    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.status(401).send({message: "unauthorized"})
        }
        req.userId = decoded.id
        next()
    })
}

const authJwt = {
    verifyWebToken
}

module.exports = authJwt