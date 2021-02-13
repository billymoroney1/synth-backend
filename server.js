const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const dbConfig = require('./config/db.config')
const cors = require('cors')

const app = express()

require('dotenv').config()

app.use(cors())

//parse requests of content type - application/json
app.use(bodyParser.json())

//parse request of content type = application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//Setup Mongoose
const db = require('./models/index')
const dbURI = process.env.MONGODB_URI || `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`

//connect to backend
db.mongoose
.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to MongoDb")
})
.catch(err => {
    console.error("connection error", err)
    process.exit()
})

//test route
app.get('/', (req, res) => {
    res.json({message: "Welcome to the home page"})
})

//import routes we wrote
require('./routes/auth.routes')(app)
require('./routes/presets.routes')(app)
require('./routes/user.routes')(app)

//set port, listen for request
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {{
    console.log('synth backend running')
}})
