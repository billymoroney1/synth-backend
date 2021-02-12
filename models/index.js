const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//Allow us to use FindByIdAndModify
mongoose.set('useFindAndModify', false)

const db = {}

db.mongoose = mongoose
db.user = require('./user.model')
db.preset = require('./preset.model')

module.exports = db