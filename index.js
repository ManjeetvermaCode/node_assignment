const express=require('express')
const axios=require('axios')

const app=express()

//middlewares
app.use(express.json())


const Url='https://catfact.ninja/breeds'


app.get('/',async(req,res)=>{
   try{
    const arr=[]
    for(let i=0;i<5;i++){
        const {data}=await axios.get(`${Url}?page=${i+1}`)
        arr.push(data)
    }
    res.json(arr)
   }catch(error){
    res.send(`Something went wrong, ${error}`)
   }
})

app.get('/:pg',async(req,res)=>{
    try{
        const {pg}=req.params
        const {data}=await axios.get(`${Url}?page=${pg}`)
        res.send(data)
    }catch(error){
        res.send(`Unable to fetch data from page number ${pg}`)
    }
})

app.listen('3000',()=>{
    console.log('hosted on port 3000')
})