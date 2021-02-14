const db = require('../models/index')

//access to users and presets
const User = db.user
const Preset = db.preset

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
//edit preset
exports.editPreset = (req, res) => {
    const id = req.params.idx
    Preset.updateOne({_id: id}, {
        name: req.body.name,
        options: req.body.preset
    }).then((data) => {
        if(!data) return res.status(400).send({message: "Unable to update preset"})
        else return res.send(data)
    })

}
//delete preset
exports.deletePreset = (req, res) => {
    const id = req.body._id
    Preset.deleteOne({_id: id})
        .then((data) => {
            if(!data) return res.status(400).send({message: "Unable to delete post"})
            else return res.send(data)
        })
}
//get presets
exports.allPresets = (req, res) => {
    Preset.find().then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.status(500).send({ message: err })
    })
}

//get one preset
exports.getPreset = (req, res) => {
    const id = req.params.idx
    Preset.find({_id: id}).then((preset) => {
        if(!preset) return res.status(400).send({ message: "Cannot find this preset" })
        else res.send(preset)
    })
}