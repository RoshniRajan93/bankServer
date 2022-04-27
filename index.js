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
        res.status(result.statusCode).json(result)
    })

// Login API
    app.post('/login',(req,res)=>{
        const result=dataService.login(req.body.acno,req.body.pswd)
        res.status(result.statusCode).json(result)
    })

// Deposit API
app.post('/deposit',(req,res)=>{
    const result=dataService.deposit(req.body.acno,req.body.pswd,req.body.amnt)
    res.status(result.statusCode).json(result)
})

// set port number
app.listen(3000,()=>{
    console.log("Server started at 3000");
})