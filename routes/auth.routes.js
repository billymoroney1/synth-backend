const { verifySignup } = require('../middlewares')
const controller = require('../controllers/auth.controller')

module.exports = function(app) {
    app.use((req, res, next) => {
        //set header and allow use of x-access token
        res.header(
            "Access-Control-Allow-Headerse",
            "x-access-token, Origin, Content-type, Accept"
        )
        next()
    })
    //set up signup route and pass middleware to check username, email, and roles
    app.post("/api/auth/signup",
    [verifySignup.checkDuplicateUsernameOrEmail], controller.signup)
    //handle sign in
    app.post("/api/auth/signin", controller.signin)
}