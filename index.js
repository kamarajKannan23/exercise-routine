const express = require('express')
const cors = require('cors')

//mongodb 
const mongoose = require('./config/database')

const routes = require('./config/routes')

//Read the .env File
const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/v1', routes)


app.listen(port, () => {
    console.log(`running on port ${port}`)
})