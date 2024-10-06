const User = require('../models/userModel') ;

const {validationResult} = require('express-validator')

exports.getAllUsers = async(req, res)=>{
    const users = await User.find() ; 
    res.json(users)
} ;

exports.getUser = async (req,res)=>{

    const user  = await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({error : "user not founded"})
    }
    res.json(user)
    
}


exports.addUser = async (req,  res)=>{
    const product  =  req.body ;
    
   
    
    const newUser = new User(req.body)  ;
    await newUser.save() ;
    res.status(201).json(newUser) ;
    
    
}

exports.updateUser = (req, res)=>{
    const id  = +req.params.id  ;
    let product  = products.find((product) => product.id === id )
    if(!product){
        return res.status(404).json({error : "product not found "})
    }
    product  = {...product , ...req.body } ;
    res.status(200).json(product) ;
}

exports.deleteUser =  (req, res)=>{
    const id  = +req.params.id  ;
    products = products.filter((product)=>product.id !== id ) ;
    res.status(200).json(products) ;
}

