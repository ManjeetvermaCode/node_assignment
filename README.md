## node_assignment
## This project is fetching data from 'https://catfact.ninja/breeds' url using Axios. Backend of this app is written using nodejs and expressjs.


# To run this project on your machine either you can Download the file, then extract all and then open in your preferred code editor or use command 'git clone <repo_url>'.

# To install dependecies enter cmd (Make sure to have nodejs installed.)
`npm install`

---

# Here is the list of api endpoints with their respective description.

| Description                           | Api endpoints                             |
|---------------------------------------| ------------------------------------------|
| To fetch data from all the pages.     | http://localhost:3000/api                 |
| To fetch data from a specific page.   | http://localhost:3000/api/page_no         |
| To fetch cat breeds group by Country. | http://localhost:3000/api/country/page_no |

# Route that checks whether the incomming string has atleast 8 or more than 8 words using Regular Expressions (RegEx)

```
app.post('/message',(req,res)=>{//Using regular expression to check whether there are atleast 8 or more than eight words present.
    try{
        const {text}=req.body
        const wordCountPattern = /\b\w+\b/g;
        const words = text.match(wordCountPattern);
        const atLeastEightWords = words && words.length >= 8;
    
    !atLeastEightWords?res.status(200).send('there are less than 8 worlds'):res.status(400).send('no of words exceeded 8 worlds') 
    }   catch(error){
        res.status(400).send('something went wrong', error)
    }
})
```

Use Api development tools like Postman for testing this route and for sending payload data via forms-data or form-urlencoded data
