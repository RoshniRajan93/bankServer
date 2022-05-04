        // server creation step

// import express
    const express=require('express')

// import dataservice
    const dataService=require('./services/data.service')

// import jsonwebtoken
    const jwt=require('jsonwebtoken')

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

// jwtMiddleware
    const jwtMiddleware=(req,res,next)=>{
        try{
            const token=req.headers["x-access-token"]
            const data=jwt.verify(token,'SecretKey0123456789')
            req.currentAcno=data.currentAcno
            next()
        }
        catch{
            res.status(401).json({
                status:false,
                message:"Please Login..."
            })
        }
    }

// Register API
    app.post('/register',(req,res)=>{
        dataService.register(req.body.uname,req.body.acno,req.body.password)
        .then(result=>{
            res.status(result.statusCode).json(result)
        })
    })

// Login API
    app.post('/login',(req,res)=>{
        dataService.login(req.body.acno,req.body.pswd)
        .then(result=>{
            res.status(result.statusCode).json(result)
        })  
    })

// Deposit API - Router Specific Middleware: jwtMiddleware
    app.post('/deposit',jwtMiddleware,(req,res)=>{
        const result=dataService.deposit(req.body.acno,req.body.pswd,req.body.amnt)
        res.status(result.statusCode).json(result)
    })

// Withdraw API - Router Specific Middleware: jwtMiddleware
    app.post('/withdraw',jwtMiddleware,(req,res)=>{
        const result=dataService.withdraw(req,req.body.acno,req.body.pswd,req.body.amnt)
        res.status(result.statusCode).json(result)
    })

// Transaction API - Router Specific Middleware: jwtMiddleware
    app.post('/transaction',jwtMiddleware,(req,res)=>{
        const result=dataService.transaction(req.body.acno)
        res.status(result.statusCode).json(result)
    })

// set port number
    app.listen(3000,()=>{
        console.log("Server started at 3000");
    })