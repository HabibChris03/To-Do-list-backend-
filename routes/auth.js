const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
router.post('/auth/signup', async (req , res)=>{
    try{
        const formData = req.body;//req is going to contain the user information 
        const existingUser = await User.findOne({email:formData.email})// check if user exist
        if(existingUser){
            return res.status(400).json({message: 'Email already exist'})//responds to the front end
        }
         
            const hashedPassword = await bcrypt.hash(formData.password, 10);//hashing the password //... is used to spread the formdata
            const newData ={...formData, password: hashedPassword};//hashing 
            const saveUser =new User(newData);
            await saveUser.save();
            return res.status(201).json({message:"User registered successfully"});
    }catch(err){
           console.log("Error registering user: ",err)
           return res.status(501).json({message: "Internal server error"})
    }


})

module.exports = router;
