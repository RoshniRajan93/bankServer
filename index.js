// server creation step

// import express
const express=require('express')

// create server app using express
const app=express()

// resolving API call
// GET - to read data
app.get('/',(req,res)=>{
    res.send("GET REQUEST")
})

// set port number
app.listen(3000,()=>{
    console.log("Server started at 3000");
})