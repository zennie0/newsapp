const express = require("express");
const cors = require("cors");
// const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
app.use(cors());


app.use("/api/news", async(req,res)=>{
    try{
 const query = req.query.q || "latest";
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`);
    const data = await response.json();
    res.json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Failed to fetch news"});
    }
   
})

app.listen(5000,()=> console.log("Server running on port 5000"));