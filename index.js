const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('home page')
})

app.listen('3000',()=>{
    console.log('hosted on port 3000')
})