const express=require('express')
const axios=require('axios')
const fs=require('fs')
const groupBy =require('./utils/groupByCountry')

const app=express()

//middlewares
app.use(express.json())


const Url='https://catfact.ninja/breeds'


app.get('/api/',async(req,res)=>{//This route gets 'data' from all the pages.
   try{
    const arr=[]
    for(let i=0;i<5;i++){
        const {data}=await axios.get(`${Url}?page=${i+1}`)
        arr.push(data)
    }
    const allData='received_Data/all_data_response.txt'
    fs.writeFileSync(allData,JSON.stringify(arr,null,2))// Log the response AS-IS to a text file
    res.status(201).json(arr)
   }catch(error){
    res.status(400).send(`Something went wrong, ${error}`)
   }
})

app.get('/api/:pg',async(req,res)=>{// This route gets data from a specific page
    try{
        const {pg}=req.params
        const file=`received_Data/pg${pg}.txt`
        const {data}=await axios.get(`${Url}?page=${pg}`)
        fs.writeFileSync(file,JSON.stringify(data,null,2))// Log the response AS-IS to a text file
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(`Unable to fetch data from page number ${pg}`)
    }
})

app.get('/api/country/:pg',async(req,res)=>{//This route returns cat breeds grouped by Country 
    try{
        const {pg}=req.params
        const {data}=await axios.get(`${Url}?page=${pg}`)
        const result=groupBy(data.data,'country')
        const file=`received_Data/groupByCountry_${pg}.txt`
        fs.writeFileSync(file,JSON.stringify(result,null,2))// Log the response AS-IS to a text file
        res.status(200).json(result)
    }catch(error){
        res.status(400).send('Unable to return cat breeds grouped by Country- ', error)
    }

})

app.listen('3000',()=>{
    console.log('hosted on port 3000')
})