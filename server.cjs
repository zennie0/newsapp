import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

app.use(express.static(join(__dirname, "frontend/dist")));

app.listen(5000,()=> console.log("Server running on port 5000"));