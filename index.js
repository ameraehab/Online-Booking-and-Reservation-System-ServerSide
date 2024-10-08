require('dotenv').config()
const express = require('express')
const mongoose  = require('mongoose')
const auth = require('./routes/auth') ;
const userRoute = require('./routes/userRouter')

const app = express() ;
const port = process.env.PORT ;

const url = process.env.MONGO_URL;

mongoose.connect(url).then(()=>{
    console.log('mongodb server started');
    
})

app.use(express.json()) ;
// app.use('/api/auth' , auth) ;
app.use('/api/users' , userRoute )

app.listen(port , ()=>{
    console.log(`listening on http://localhost:${port}`);
    
})