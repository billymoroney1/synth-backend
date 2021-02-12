const db = require('../models/index')
const { populate } = require('../models/user.model')

//access to users and presets
const User = db.user
const Post = db.post

//make a preset
exports.createPreset = (req, res) => {
    const preset = new Preset({
        name: req.body.name,
        options: req.body.options
    })

    //save preset
    preset.save((err, preset) => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }
        
        //send success message
        res.send({ message: "preset created successfully" })
    })
}
// //edit preset
// exports.editPreset = (req, res) => {

// }
// //delete preset
// exports.deletePreset = (req, res) => {

// }
// //get presets
// exports.allPresets = (req, res) => {

// }
// //get one preset
// exports.getPreset = (req, res) => {

// }