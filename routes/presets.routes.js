const controller = require('../controllers/presets.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); 
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    // //create new preset
    app.post("/api/presets/preset", controller.createPreset)
    // //update preset
    app.put("/api/presets/:idx", controller.editPreset)
    // //delete preset
    app.delete("/api/presets/preset", controller.deletePreset)
    // //get all presets
    app.get('/api/presets/all', controller.allPresets)
    // //get single preset
    app.get('/api/presets/:idx', controller.getPreset)
}