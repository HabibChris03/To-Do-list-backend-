const express = require('express')
const mongoose = require ('mongoose')
const app = express()
const connectDB = require('./scripts/connectMongoDB')

connectDB();

app.listen(5000,()=>{
    console.log('server is running on port http://localhost:5000')
})