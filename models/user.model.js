const mongoose = require('mongoose')

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        presets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Preset'}]
    })
)

module.exports = User