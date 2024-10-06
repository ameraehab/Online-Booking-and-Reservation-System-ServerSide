const express = require('express')
const mongoose  = require('mongoose')

const auth = require('./routes/auth') ;
const userRoute = require('./routes/userRouter')

const app = express() ;
const port = 3000 ;

const url = "mongodb+srv://yasmeenayr:tableBooky2024@booking-system.who5p.mongodb.net/tableBooky?retryWrites=true&w=majority&appName=Booking-System" ;

mongoose.connect(url).then(()=>{
    console.log('mongodb server started');
    
})

app.use(express.json()) ;
// app.use('/api/auth' , auth) ;
app.use('/api/users' , userRoute )

app.listen(port , ()=>{
    console.log(`listening on http://localhost:${port}`);
    
})