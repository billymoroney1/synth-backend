const { authJwt } = require('../middlewares')
const controller = require('../controllers/user.controller')

module.exports = function(app) {
    app.use((req, res, next) => {
        //set header and allow use of x access token
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        )
        next()
    })
    //get user profile
    app.get('/api/user/profile/:id')
}