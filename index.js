        // server creation step

// import express
const express=require('express')

// import dataservice
const dataService=require('./services/data.service')

// create server app using express
const app=express()

// to parse json data
app.use(express.json())

        // Resolving REST API

// GET - to read data
app.get('/',(req,res)=>{
    res.send("GET REQUEST")
})

// POST - to create data
app.post('/',(req,res)=>{
    res.send("POST REQUEST")
})

// PUT - to update/modify data
app.put('/',(req,res)=>{
    res.send("PUT REQUEST")
})

// PATCH - to partially update data
app.patch('/',(req,res)=>{
    res.send("PATCH REQUEST")
})

// DELETE - to delete data
app.delete('/',(req,res)=>{
    res.send("DELETE REQUEST")
})

        // Bank Server

// Register API
    app.post('/register',(req,res)=>{
        const result=dataService.register(req.body.uname,req.body.acno,req.body.password)
        if(result){
            res.send("Successfully Registered...")
        }
        else{
            res.send("Account Number already exist...")
        }
    })

// set port number
app.listen(3000,()=>{
    console.log("Server started at 3000");
})