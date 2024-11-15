require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors')
const connecion=require('./db')
const authRoutes=require('../backend/routes/authRoutes')
const adminRoutes=require('../backend/routes/adminRoutes')

//db connection
connecion();


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173'
  }))


//routes
app.use('/api/auth',authRoutes); 
app.use('/api/admin',adminRoutes); 


const port= process.env.PORT||8000;

app.listen(port,()=>{
    console.log(`server is listening in port..${port}`)
})