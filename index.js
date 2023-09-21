require('dotenv').config()
const PORT = process.env.PORT || 8082;
const express = require('express');
const server = express();
const mongoose = require("mongoose");
const EmployeeRoutes = require('./routes/employee')

server.use(express.json());

mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log('Database Connected Successfully')
})
.catch(()=>{
    console.log("Failed to Connect")
})

server.use('/Employee',EmployeeRoutes)

server.get('/',(req,res)=>{
    res.send("MONGODB TUTORIAL");
})

server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

