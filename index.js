const express = require('express');
const app = express()
require('dotenv').config()
const {body , validationResult} = require('express-validator')

app.use(express.json())

app.post("/users",body('Email').isEmail(),
    body('Password').isStrongPassword({minLength:8})
    ,(req,res)=>{
        const error = validationResult(req)
        // console.log(error)
        if(!error.isEmpty()){
            return res.status(400).json({
                error : error 
            })
        }else{
            res.status(200).json({
                message : `Congratulations ${req.body.Email} Your Emaild has been created`
            })        
        }
    
    console.log(req.body)
    // console.log(res.Password)
})

let Port = process.env.Port
app.listen(Port, (req,res)=>{
    console.log(`This server is runnig on ${Port}`)
})