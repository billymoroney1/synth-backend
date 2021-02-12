const mongoose = require('mongoose')

const Preset = mongoose.model(
    'Preset',
    new mongoose.Schema({
        name: String,
        options: [{}]
    })
)

module.exports = Preset