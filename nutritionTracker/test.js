const express = require("express")
const app = express()

const mongoose = require("mongoose")

mongoose.connect("http://localhost:27017/test").then((result)=>{
    console.log(result)
    console.log("db connection successfull")
}).catch()

app.listen(8000,()=>{
    console.log("server started successfully")
})