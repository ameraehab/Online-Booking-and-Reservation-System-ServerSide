const User = require('../models/userModel') ;

const {validationResult} = require('express-validator')

exports.getAllUsers = async(req, res)=>{
    const users = await User.find() ; 
    res.json(users)
} ;

exports.getUser = async (req,res)=>{

    try {
        const user  = await User.findById(req.params.id)
        if(!user){
            return res.status(404).json({error : "user not founded"})
        }
        res.json(user)    
    } catch (error) {
        return res.status(400).json({error : "invalid object id "})
        
    }
}


exports.addUser = async (req,  res)=>{
    const product  =  req.body ;
    
   
    
    const newUser = new User(req.body)  ;
    await newUser.save() ;
    res.status(201).json(newUser) ;
    
    
}

exports.updateUser = async (req, res)=>{
    const id  = req.params.id
    try {
        const updatedUser = await User.updateOne({_id : id} , {$set : {...req.body}})
        res.status(200).json(updatedUser) ;
        
    } catch (error) {
        return res.status(400).json({error : error})
    }
}

exports.deleteUser = async  (req, res)=>{
    const deletedUser  = await User.deleteOne({_id : req.params.id})
    res.status(200).json({sucess : true }) ;
}

