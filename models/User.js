const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true,unique: true},
    phone:{type:String, require:true},
    password:{type:String, require:true},
    created_at:{type:Date, default: Date.now},
});

const User = mongoose.Model('User',userSchema)
module.exports = User;