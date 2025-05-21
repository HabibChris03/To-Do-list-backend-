const mongoose = require("mongoose");
require('dotenv').config();

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI,{//await 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to MongoDB ✔");

    }catch(error){
        console.log("Error  400, Failed to connect to Database", error);
    }
}
module.exports = connectDB;