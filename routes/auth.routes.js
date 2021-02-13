const { verifyRegister } = require('../middlewares')
const controller = require('../controllers/auth.controller')

module.exports = function(app) {
    app.use((req, res, next) => {
        //set header and allow use of x-access token
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        )
        res.header("Access-Control-Allow-Origin", '*')
        next()
    })
    //set up signup route and pass middleware to check username, email, and roles
    app.post("/api/auth/register", verifyRegister.checkDuplicateUsernameOrEmail, controller.register)
    //handle sign in
    app.post("/api/auth/signin", controller.login)
}