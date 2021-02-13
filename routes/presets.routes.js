const controller = require('../controllers/presets.controller')

module.exports = function(app) {
    // app.use((req, res, next) => {
    //     //set header and allow use of x-access token
    //     res.header(
    //         "Access-Control-Allow-Headers",
    //         "x-access-token, Origin, Content-type, Accept"
    //     )
    //     res.header("Access-Control-Allow-Origin", '*')
    //     next()
    // })

    // //create new preset
    app.post("/api/presets/preset", controller.createPreset)
    // //update preset
    // app.put("/api/presets/preset", controller.editPreset)
    // //delete preset
    // app.delete("/api/presets/preset", controller.deletePreset)
    // //get all presets
    // app.get('/api/presets', controller.allPresets)
    // //get single preset
    // app.get('/api/presets/:id', controller.getPreset)
}