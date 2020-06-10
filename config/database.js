const mongoose = require('mongoose')

//Read the .env File
const dotenv = require('dotenv');
dotenv.config();

mongoose.Promise = global.Promise

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongoDB connected")
}).catch((err) => {
    console.log("error while connecting to DB", err)
})

module.export = mongoose